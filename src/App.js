import "./App.css";
import AllProducts from "./components/AllProducts";
import MyCart from "./components/MyCart";
import Nav from "./components/Nav";
import NewProduct from "./components/NewProduct";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
