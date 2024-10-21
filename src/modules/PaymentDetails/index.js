// ProductDetail.js
import { useLoaderData } from "@tanstack/react-router";
import React from "react";

function ProductDetail() {
  const product = useLoaderData(); // Fetch product data from loader

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.name} width="300" />
    </div>
  );
}

export default ProductDetail;
