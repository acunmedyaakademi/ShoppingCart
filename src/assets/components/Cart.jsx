import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

function Cart({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  closeCart,
}) {
  const handleIncreaseQuantity = (itemId) => {
    increaseQuantity(itemId);
  };

  const handleDecreaseQuantity = (itemId) => {
    decreaseQuantity(itemId);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="cartOverlay">
      <div className="cartModal">
        <button className="closeButton" onClick={closeCart}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {cartItems.map((item) => (
          <div key={item.id} className="cartItem">
            <div className="cartImg">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cartInfo">
              <h4 className="cartModalTitle">{item.title}</h4>
              <p className="cartModalPrice">{item.price}$</p>
              <div className="cartModalBtns">
                <div className="cartQuantity">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className="cartQuantity">{item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div>
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
