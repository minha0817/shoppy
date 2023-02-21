import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AllProducts from "../src/components/AllProducts";
import MyCart from "../src/components/MyCart";
import NewProduct from "../src/components/NewProduct";
import ProductDetail from "../src/components/ProductDetail";
import Login from "../src/components/Login";
import Nav from "../src/components/Nav";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/carts",
        element: <MyCart />,
      },
      {
        path: "/products/new",
        element: <NewProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <App /> */}
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
