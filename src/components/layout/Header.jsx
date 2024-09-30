import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

import ThemeButton from "./ThemeButton";
import Logotipo from "./Logotipo";
import LanguageButtons from "./LanguageButtons";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Logotipo />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? styles.selected : "")}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? styles.selected : "")}
              >
                Habilidades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                className={({ isActive }) => (isActive ? styles.selected : "")}
              >
                Trabalhos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? styles.selected : "")}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.ajustes}>
          <ThemeButton />
          <LanguageButtons />
        </div>
      </header>
    </>
  );
};

export default Header;
