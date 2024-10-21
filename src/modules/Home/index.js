import React from "react";
import {
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductLink,
  ProductName,
  ProductPrice,
} from "../../styles"; // Ensure the correct path

function Home({ products }) {
  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <ProductLink to={`/product/${product.id}`}>
                View Details
              </ProductLink>
            </ProductCard>
          ))}
        </ProductGrid>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default Home;
