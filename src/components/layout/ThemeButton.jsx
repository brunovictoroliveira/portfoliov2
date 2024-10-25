import PropTypes from "prop-types";
import styles from "./ThemeButton.module.css";

import { useState, useEffect } from "react";

const ThemeButton = ({ currentTheme, toggleTheme }) => {
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === "dark");

  useEffect(() => {
    setIsDarkMode(currentTheme === "dark");
  }, [currentTheme]);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div className={styles.button} onClick={handleThemeToggle}>
      <div
        className={styles.circle}
        style={{ left: isDarkMode ? "38px" : "5px" }}
      ></div>
    </div>
  );
};

ThemeButton.propTypes = {
  currentTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeButton;
