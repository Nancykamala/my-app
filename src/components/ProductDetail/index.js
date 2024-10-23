import { useParams } from "@tanstack/react-router";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Details of product with ID: {id}</p>
    </div>
  );
}

export default ProductDetails;
