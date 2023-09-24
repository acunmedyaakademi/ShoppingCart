import React, { useState } from "react";

const ProductForm = ({ addNewProduct }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "Mens Clothing",
    description: "",
    image: "",
    stock: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewProduct(newProduct);
    setNewProduct({
      title: "",
      price: "",
      category: "Mens Clothing",
      description: "",
      image: "",
      stock: 0,
    });
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newProduct.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
          >
            <option value="Mens Clothing">Mens Clothing</option>
            <option value="Jewelery">Jewelery</option>
            <option value="Electronics">Electronics</option>
            <option value="Womens Clothing">Womens Clothing</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
