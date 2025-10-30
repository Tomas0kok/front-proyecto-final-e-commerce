import { useState } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
