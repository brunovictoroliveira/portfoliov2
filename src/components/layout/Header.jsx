import { Link, NavLink } from "react-router-dom";

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
            <NavLink to="/">
              <li className={styles.selected}>Início</li>
            </NavLink>
            <NavLink to="/skills">
              <li className={styles.unselected}>Habilidades</li>
            </NavLink>
            <NavLink to="/works">
              <li className={styles.unselected}>Trabalhos</li>
            </NavLink>
            <NavLink to="/contact">
              <li className={styles.unselected}>Contato</li>
            </NavLink>
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
