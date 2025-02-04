import React from "react";
import { Header } from "./components/header/header";
import "./index.scss";
import { Navbar } from "./components/navbar/navbar";
import { ProductTable } from "./components/productTable/productTable";

function App() {
  return <div className="App">
    <Header />
    <main className="content">
      <Navbar />
      <ProductTable />
    </main>
  </div>;
}

export default App;
