import React from "react";
import "./index.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { ProductTable } from "./components/productTable/productTable";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="product-table-spa/product-list" />} />
            <Route path="product-table-spa/product-list" element={<ProductTable />} />
            <Route path="product-table-spa/my-account" element={<h3>Account Page</h3>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
