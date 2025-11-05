// src/App.js
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </>
  );
}

export default App;
