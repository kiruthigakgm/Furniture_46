import React, { useState } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import './product.css';

const Product = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="product-container">
      {/* Header Section */}
      <header className="product-header">
        <h1>Furniture Categories</h1>
        <p>Find the perfect furniture for your space</p>
      </header>

      {/* Navigation Buttons */}
      <nav className="product-nav">
        {[
          "Living Room", "Bed Room", "Dining Room", "Office Furniture","Outdoor", "Decor", "Furnishings", "Smart Storage"
        ].map((item) => (
          <button 
            key={item} 
            className="category-button no-color" 
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div className="product-content all-products-inline">
        <div className="category-box no-color">
          <h2>{category}</h2>
          <FoodDisplay category={category} />
        </div>
      </div>
    </div>
  );
};

export default Product;
