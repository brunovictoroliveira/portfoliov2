import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Header.module.css";

import "../../i18n";
import { useTranslation } from "react-i18next";

import ThemeButton from "./ThemeButton";
import Logotipo from "./Logotipo";
import LanguageButtons from "./LanguageButtons";
import MenuButton from "./MenuButton";

const Header = ({ currentTheme, toggleTheme }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.headerBg}>
      <header className={styles.header}>
        <Logotipo currentTheme={currentTheme} />
        <MenuButton />
        <div className={styles.menu}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.selected : styles.notSelected
                  }
                >
                  {t("nav.option1")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    isActive ? styles.selected : styles.notSelected
                  }
                >
                  {t("nav.option2")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/works"
                  className={({ isActive }) =>
                    isActive ? styles.selected : styles.notSelected
                  }
                >
                  {t("nav.option3")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? styles.selected : styles.notSelected
                  }
                >
                  {t("nav.option4")}
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.ajustes}>
            <ThemeButton
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
            />
            <LanguageButtons />
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  currentTheme: PropTypes.oneOf(["light", "dark"]).isRequired, // Define que o tema deve ser 'light' ou 'dark'
  toggleTheme: PropTypes.func.isRequired, // toggleTheme é uma função obrigatória
};

export default Header;
