import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "antd";

const Navbar = ({ toggleCart, toggleProductForm, isSwitchChecked }) => {
  return (
    <div className="navbar">
      <a href="">LOGO.</a>
      <div>
        <Switch checked={isSwitchChecked} onChange={toggleProductForm} />
        <button onClick={toggleCart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
