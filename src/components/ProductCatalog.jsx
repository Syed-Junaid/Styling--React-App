// src/components/ProductCatalog.js
import React from "react";
import ProductCard from "./ProductCard";

const ProductCatalog = ({ products }) => {
  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
