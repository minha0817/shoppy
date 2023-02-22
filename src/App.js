import "./App.css";
import Nav from "./components/Nav";
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
