import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" className="cardImg" />
      <h3 className="cardTitle">{product.title}</h3>
      <p className="cardPrice">{product.price} $</p>
      <button className="addCardBtn" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
