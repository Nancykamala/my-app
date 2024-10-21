// router.js
import { createRoute, createRouter } from "@tanstack/router";
import { lazy, Suspense } from "react";
import Home from "../Home";
import Login from "../Login";

// Lazy load the ProductDetail component
const ProductDetail = lazy(() => import("../ProductDetail"));

// Updated loader function (lines changed from existing code)
const products = [
  { id: 1, name: "Lipstick", price: "$12", image: "/images/lipstick.png" },
  { id: 2, name: "Foundation", price: "$25", image: "/images/foundation.png" },
  { id: 3, name: "Mascara", price: "$15", image: "/images/mascara.png" },
];

const productLoader = async ({ params }) => {
  const product = products.find((p) => p.id === parseInt(params.id)); // Updated from fetch to local data
  if (!product) throw new Error("Product not found");
  return product;
};

// Router configuration
const router = createRouter({
  routes: [
    createRoute({
      path: "/",
      element: <Login />,
    }),
    createRoute({
      path: "/home",
      element: <Home products={products} />, // Ensure products are passed to Home component
    }),
    createRoute({
      path: "/product/:id",
      element: (
        <Suspense fallback={<div>Loading Product...</div>}>
          <ProductDetail />
        </Suspense>
      ),
      loader: productLoader, // Updated loader function
    }),
  ],
});

export { router };
