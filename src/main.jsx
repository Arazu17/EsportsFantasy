import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import CodLeaguePage from './CodLeaguePage.jsx'; // You'll create this

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cod" element={<CodLeaguePage />} />
    </Routes>
  </BrowserRouter>
);
