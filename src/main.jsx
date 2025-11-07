import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Portfolio from "./Portfolio.jsx";
import TableauPortfolio from "./TableauPortfolio.jsx"; // ✅ add this line
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tableau" element={<TableauPortfolio />} /> {/* ✅ add this route */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
