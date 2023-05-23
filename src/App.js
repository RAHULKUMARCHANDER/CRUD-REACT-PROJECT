import React from 'react';
import './styles/App.css';
import Books from './components/Books';

const App = () => {
  return (
    <div className="app">
      <h1>Book Management</h1>
      <Books />
    </div>
  );
};

export default App;
