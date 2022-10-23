import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
