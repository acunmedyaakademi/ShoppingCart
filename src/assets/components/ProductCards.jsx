import React from "react";
import ProductCard from "./ProductCard";

const ProductCards = ({
  products,
  selectedFilter,
  searchQuery,
  handleAddToCart,
}) => {
  const filteredProducts = products.filter(
    (product) =>
      (selectedFilter === "All" ||
        product.category.toLowerCase() === selectedFilter.toLowerCase()) &&
      (searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="cardContainer">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductCards;
