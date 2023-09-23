import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Filters from './components/Filters';
import ProductMatrix from './components/ProductMatrix';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [filter, setFilter] = useState({ age: '', coverage: '' });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">

       <Header />
       <ProductList />

      <Filters onFilterChange={handleFilterChange} />

      <ProductMatrix filter={filter} />
      <Footer />
    </div>
  );
}

export default App;

