import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import {AuthContextProvider} from "./components/context/AuthContext";
import "./index.css";


function App() {
  return (
    <AuthContextProvider>
      <Nav />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
