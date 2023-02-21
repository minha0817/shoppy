import React from "react";
import { GrEdit } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div className="nav--left">
        <Link to={"/"}>
          <FiShoppingBag />
          <span>Shoppy</span>
        </Link>
      </div>
      <div className="nav--right">
        <Link to={"/products"}>
          <span>Products</span>
        </Link>
        <Link to={"/carts"}>
          <span>Carts</span>
        </Link>
        <Link to={"/products/new"}>
          <GrEdit />
        </Link>
        <Link to={"/login"}>
          <span>Login</span>
        </Link>
      </div>
    </nav>
  );
}
