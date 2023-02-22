import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import User from "../components/User";
import { login, logout } from "../api/firebase";
import Button from "./ui/Button";
import { useAuthContext } from "./context/AuthContext";

export default function Nav() {
  
  const {user, login, logout} = useAuthContext();

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

        {user && (
          <Link to={"/carts"}>
            <span>Carts</span>
          </Link>
        )}

        {user && user.isAdmin && (
          <Link to={"/products/new"} className="text-2xl">
            <GrEdit />
          </Link>
        )}

        {user && <User user={user} />}

        {!user && <Button text="Login" onClick={login} />}
        {user && <Button text="Logout" onClick={logout} />}
      </nav>
    </header>
  );
}
