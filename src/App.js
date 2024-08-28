import './App.css';
import Form from './components/form';
import React from 'react';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Generador de comunicados Generales</h1>
      <Form />
    </div>
  );
}

export default App;
