import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import {login, logout, onUserStateChange} from "../api/firebase";

export default function Nav() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, [])

  const handleClickLogin = () => {
    login().then(setUser);
  };

  const handleClickLogout = () => {
    logout().then(setUser);
  }

  return (
    <header className=" flex justify-between mx-auto border-b border-gray-300 p-2">
      <Link to={"/"} className="flex items-center text-4xl text-brand">
        <FiShoppingBag className="flex items-center" />
        <span>Shoppy</span>
      </Link>

      <nav className="flex items-center gap-4 font-semibold">
        <Link to={"/products"}>
          <span>Products</span>
        </Link>
        <Link to={"/carts"}>
          <span>Carts</span>
        </Link>
        <Link to={"/products/new"} className="text-2xl">
          <GrEdit />
        </Link>

        {!user && <span onClick={handleClickLogin}>Login</span>}
        {user && <span onClick={handleClickLogout}>Logout</span>}

      </nav>
    </header>
  );
}
