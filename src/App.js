import "./App.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./components/Context/AuthContext";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Nav />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
