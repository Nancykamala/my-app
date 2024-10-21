// router.js
import { createRouter, RootRoute, Route } from "@tanstack/react-router";
import React, { lazy, Suspense } from "react";

import Home from "./modules/Home"; // Ensure paths are correct

import Login from "./modules/Login";
// import NotFound from "../NotFound";
import NotFound from "./modules/NotFound";

// Lazy load ProductDetail component
const ProductDetail = lazy(() => import("./modules/ProductDetail"));

// Sample product data
const products = [
  { id: 1, name: "Lipstick", price: "$12", image: "/images/lipstick.png" },
  { id: 2, name: "Foundation", price: "$25", image: "/images/foundation.png" },
  { id: 3, name: "Mascara", price: "$15", image: "/images/mascara.png" },
];

// Product loader function
const productLoader = async ({ params }) => {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) throw new Error("Product not found");
  return product;
};

// Root route definition
const rootRoute = new RootRoute({
  component: () => (
    <>
      <h1>Welcome to the App</h1>
      <Outlet /> {/* Ensures child routes render */}
    </>
  ),
});

// Define child routes
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: () => <Home products={products} />,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/product/:id",
  component: () => (
    <Suspense fallback={<div>Loading Product...</div>}>
      <ProductDetail />
    </Suspense>
  ),
  loader: productLoader,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

// Create router instance
const router = createRouter({
  routeTree: rootRoute.addChildren([
    homeRoute,
    loginRoute,
    productRoute,
    notFoundRoute,
  ]),
});

export default { router };
