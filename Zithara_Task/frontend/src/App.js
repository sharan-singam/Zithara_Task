import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomersList from './CustomerList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CenteredCustomersList />} />
      </Routes>
    </BrowserRouter>
  );
}

function CenteredCustomersList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CustomersList />
    </div>
  );
}

export default App;
