/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

import ThemeButton from "./ThemeButton";
import Logotipo from "./Logotipo";
import LanguageButtons from "./LanguageButtons";

const Header = ({ currentTheme, toggleTheme }) => {
  return (
    <>
      <header className={styles.header}>
        <Logotipo />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.selected : styles.notSelected
                }
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? styles.selected : styles.notSelected
                }
              >
                Habilidades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  isActive ? styles.selected : styles.notSelected
                }
              >
                Trabalhos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.selected : styles.notSelected
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.ajustes}>
          <ThemeButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
          <LanguageButtons />
        </div>
      </header>
    </>
  );
};

export default Header;
