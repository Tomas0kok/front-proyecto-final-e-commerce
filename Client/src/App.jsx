// src/App.js
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-light text-center py-3">
        <p>&copy; 2023 E-Commerce. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
