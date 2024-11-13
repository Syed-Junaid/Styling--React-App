// src/components/ProductCard.js
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Dynamic background color based on category
  const categoryStyle = {
    backgroundColor: product.category === "Electronics" ? "#d1e7dd" : "#f8d7da",
  };

  return (
    <div className={`card ${styles.productCard}`} style={categoryStyle}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>Price:</strong> {product.price}
        </p>
        <div className={styles.rating}>
          <strong>Rating:</strong> {'⭐'.repeat(product.rating)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
