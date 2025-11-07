import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Portfolio from './Portfolio.jsx'
import './index.css'
import TableauPortfolio from './TableauPortfolio.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tableau" element={<TableauPortfolio />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
