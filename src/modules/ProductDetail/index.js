import { useLoaderData } from "@tanstack/react-router";
import React from "react";

function ProductDetail() {
  const product = useLoaderData();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: {product.price}</p>
      <p>Product ID: {product.id}</p>
    </div>
  );
}

export default ProductDetail;
