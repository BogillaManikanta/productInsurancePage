import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import csvFile from '../assets/csvFile.csv';

function ProductMatrix({ filter }) {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  console.log(csvData)
  useEffect(() => {
    const loadCSVData = async () => {
      try {
        const response = await fetch(csvFile);

        if (response.ok) {
          const text = await response.text();

          Papa.parse(text, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
              if (Array.isArray(results.data) && results.data.length > 0) {
                localStorage.setItem('csvData', JSON.stringify(results.data));
                setCsvData(results.data);

                filterDataByAge(results.data, filter.age);
              } else {
                console.error('CSV data is not in the expected format.');
              }
            },
            error: function (error) {
              console.error('Error parsing CSV:', error);
            },
          });
        } else {
          console.error('Failed to fetch CSV file');
        }
      } catch (error) {
        console.error('Error loading CSV data:', error);
      }
    };

    loadCSVData();
  }, [filter]);

  const filterDataByAge = (data, age) => {
    if (!age) {

      setFilteredData(data);
    } else {

      const filtered = data.filter((item) => {
        const [minAge, maxAge] = item['Min-Max Age'].split('-').map(Number);
        return age >= minAge && age <= maxAge;
      });
      setFilteredData(filtered);
    }
  };

  return (
    <div className="product-matrix">
      <h2>CSV Data Table</h2>

      <table>
        <thead>
          <tr>
            {Object.keys(csvData[0] || {}).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductMatrix;
