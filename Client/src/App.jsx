// src/App.jsx
import {Outlet} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
