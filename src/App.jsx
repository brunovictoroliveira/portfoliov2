import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/layout/Header.jsx";

import Home from "./components/pages/Home.jsx";
import Skills from "./components/pages/Skills.jsx";
import Works from "./components/pages/Works.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
