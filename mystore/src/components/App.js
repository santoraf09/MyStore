import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import ProductCard from "./components/ProductCard";


const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <h1>Welcome to MyStore</h1>
        <button>Our Products</button>
      </div>
      <Footer />     
    </>
  );
};

export default App;
