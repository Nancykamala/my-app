import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const ProductDetails = lazy(() => import("./components/ProductDetail"));
const SearchPage = lazy(() => import("./components/Search"));
const MultiStepForm = lazy(() => import("./components/MultiStepForm"));
const PaymentDetails = lazy(() => import("./components/PaymentDetails"));
const Address = lazy(() => import("./components/Address"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const PersonalInfo = lazy(() => import("./components/PersonalInfo"));
const Result = lazy(() => import("./components/Result"));
const Submission = lazy(() => import("./components/Submission"));
const NotFound = lazy(() => import("./components/NotFound"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/form", element: <MultiStepForm /> },
  { path: "/payment", element: <PaymentDetails /> },
  { path: "/address", element: <Address /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/personal-info", element: <PersonalInfo /> },
  { path: "/result", element: <Result /> },
  { path: "/submission", element: <Submission /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
