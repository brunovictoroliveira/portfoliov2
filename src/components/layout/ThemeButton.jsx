import PropTypes from "prop-types";
import styles from "./ThemeButton.module.css";

import { useState, useEffect } from "react";

const ThemeButton = ({ currentTheme, toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === "dark");

  // Atualiza o estado do botão quando o tema global muda
  useEffect(() => {
    setIsDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  // Função que alterna o tema ao clicar no botão
  const handleThemeToggle = () => {
    toggleTheme(); // Chama a função do App para alternar o tema
  };

  return (
    <div className={styles.button} onClick={handleThemeToggle}>
      <div
        className={styles.circle}
        style={{ left: isDarkMode ? "38px" : "5px" }} // Muda a posição da bolinha
      ></div>
    </div>
  );
};

ThemeButton.propTypes = {
  currentTheme: PropTypes.oneOf(["light", "dark"]).isRequired, // Deve ser 'light' ou 'dark'
  toggleTheme: PropTypes.func.isRequired, // toggleTheme é uma função obrigatória
};

export default ThemeButton;
