import React from "react";
import Products from "./Products";
export default function AllProducts() {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold my-4 text-center">All products</h2>
      <Products />
    </section>
  );
}
