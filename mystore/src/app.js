import React from "react";
import "./App.css";
import Header from "./components/Header.js";


const App = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="content">
          <h1>Delicious Moments Await</h1>
          <button className="cta-button">OUR PRODUCTS</button>
        </div>
      </div>
    </div>
  );
};

export default App;
