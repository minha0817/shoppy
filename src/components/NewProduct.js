import React, { useState } from "react";
import Button from "./ui/Button";
import {uploadImage} from "../api/upload";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
    .then(url => {
      console.log(url);
      addNewProduct(product, url);
    })
  };

  const handleChange = (e) => {
    const {name, value, files} = e.target;

    if(name === 'file') {
      setFile(files && files[0]);
      return;
    }

    setProduct((product) => ({...product, [name]: value}));
  };

  return (
    <section>
      <h1>Add new product</h1>
      {file && <img src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit} className=" flex flex-col p-2">
        <input
          type="file"
          accept="/image/*"
          name="file"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ''}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
          placeholder="Title of product"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ''}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
          placeholder="Price"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ''}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ''}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ''}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
          placeholder="Option(Divide with ,)"
          onChange={handleChange}
          required
        />
        <Button
          text={'Register new product'}
          // className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-brand dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
        />
      </form>
    </section>
  );
}
