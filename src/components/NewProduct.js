import React, { useState } from "react";
import Button from "./ui/Button";
import { uploadImage } from "../api/upload";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file)
      .then((url) => {
        addNewProduct(product, url).then(() => {
          setSuccess("✅ Succesfully registered!");
          setTimeout(() => {
            setSuccess(null)
          }, 4000)
        });
      })
      .finally(() => setIsUploading(false));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">Add new product</h2>
      {success && <p className="my-2">{success}</p>}
      {file && <img className="w-96 mx-auto mb-2" src={URL.createObjectURL(file)} alt="local file" />}
      <form onSubmit={handleSubmit} className=" flex flex-col px-12">
        <input
          type="file"
          accept="/image/*"
          name="file"
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="Title of product"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="Price"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="Option(Divide with ,)"
          onChange={handleChange}
          required
        />
        <Button
          text={isUploading ? "Uploading...⏳" : "Register new product"}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
