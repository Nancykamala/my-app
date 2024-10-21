import React from "react";
import { useSearchParams } from "react-router-dom";

function Results({ products }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div>
      <h1>Search Results</h1>
      {query && <p>Showing results for "{query}"</p>}

      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <img src={product.image} alt={product.name} width="100" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for "{query}".</p>
      )}
    </div>
  );
}

export default Results;
