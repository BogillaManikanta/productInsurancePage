import React, { useState } from 'react';

function Filters({ onFilterChange }) {
  const [selectedAge, setSelectedAge] = useState('');


  const handleAgeChange = (e) => {
    const age = e.target.value;
    setSelectedAge(age);
    onFilterChange({ age});
  };


  return (
    <div className="filters">
      <label>
        Age:
        <select value={selectedAge} onChange={handleAgeChange}>
          <option value="">All</option>
          {Array.from({ length: 11 }, (_, i) => 25 + i).map((age) => (
            <option key={age} value={age}>
              {age}
            </option>
          ))}
        </select>
      </label>

    </div>
  );
}

export default Filters;
