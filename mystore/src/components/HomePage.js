import React from "react";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const products = [
    { id: 1, name: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
