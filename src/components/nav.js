import React from "react";
import { GrEdit } from "react-icons/gr";
import {FiShoppingBag} from "react-icons/fi";

export default function Nav() {
  return (
    <nav>
      <div className="nav--left">
        <FiShoppingBag />
        <span>Shoppy</span>
      </div>
      <div className="nav--right">
        <span>Products</span>
        <span>Carts</span>
        <GrEdit />
        <span>Login</span>
      </div>
    </nav>
  );
}
