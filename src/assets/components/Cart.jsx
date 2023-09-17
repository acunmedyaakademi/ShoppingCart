import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  return (
    <>
      <div className="cartModal">
        <div className="cartImg">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            alt=""
          />
        </div>
        <div className="cartInfo">
          <div>
            <h4 className="cartModalTitle">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h4>
            <p className="cartModalPrice">99</p>
          </div>
          <div className="cartModalBtns">
            <div className="cartQuantity">
              <button>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p className="cartQuantity">Quantity</p>
              <button>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div>
              <button>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
