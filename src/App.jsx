import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import "./i18n.js";

import Header from "./components/layout/Header.jsx";

import Home from "./components/pages/Home.jsx";
import Skills from "./components/pages/Skills.jsx";
import Projects from "./components/pages/Projects.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPrefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <BrowserRouter>
        <Header currentTheme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
