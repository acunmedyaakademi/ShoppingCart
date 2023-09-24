import React, { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Search from "./assets/components/Search";
import Buttons from "./assets/components/Button";
import ProductCards from "./assets/components/ProductCards";
import ProductForm from "./assets/components/ProductForm";
import Cart from "./assets/components/cart";
import { products as initialProducts } from "./assets/data/product";
import { filters } from "./assets/data/filters";
import "./index.css";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductFormVisible, setIsProductFormVisible] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity++;
      setCartItems(updatedCart);
    }
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity--;
        setCartItems(updatedCart);
      }
    }
  };

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity++;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    toggleCart();
  };

  const handleFilterClick = (filterTitle) => setSelectedFilter(filterTitle);

  const handleSearch = (event) => setSearchQuery(event.target.value);

  let lastGeneratedId = initialProducts.length;
  if (localStorage.lastGeneratedId) {
    lastGeneratedId = Number(localStorage.lastGeneratedId);
  }

  function generateId() {
    lastGeneratedId++;
    localStorage.lastGeneratedId = lastGeneratedId;
    return lastGeneratedId;
  }

  const addNewProduct = (newProduct) => {
    const newProductId = generateId();
    const updatedProducts = [...products, { ...newProduct, id: newProductId }];
    setProducts(updatedProducts);
    setIsProductFormVisible(false);
  };

  return (
    <div>
      <Navbar
        toggleCart={toggleCart}
        toggleProductForm={() => setIsProductFormVisible(!isProductFormVisible)}
        cartItemCount={cartItems.length}
      />
      {isProductFormVisible ? (
        <ProductForm addNewProduct={addNewProduct} />
      ) : (
        <>
          <Search searchQuery={searchQuery} handleSearch={handleSearch} />
          <Buttons
            filters={filters}
            selectedFilter={selectedFilter}
            handleFilterClick={handleFilterClick}
          />
          <ProductCards
            products={products}
            selectedFilter={selectedFilter}
            searchQuery={searchQuery}
            handleAddToCart={handleAddToCart}
            toggleCart={() => setIsCartOpen(!isCartOpen)}
          />
          {isCartOpen && (
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              closeCart={closeCart}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
