import React from "react";
import "./Header.css";
import myImage from "../assets/culinaria.jpg";


const Header = () => {
  return (
      <header className="header">
          <div>
              <h1>MY STORE</h1>
          </div>
          <nav>
              <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#about">About</a></li>
              </ul>
          </nav>
      </header>
  );
};

export default Header;

