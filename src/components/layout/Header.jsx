import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Header.module.css";

import "../../i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import ThemeButton from "./ThemeButton";
import Logotipo from "./Logotipo";
import LanguageButtons from "./LanguageButtons";
import MenuButton from "./MenuButton";

const Header = ({ currentTheme, toggleTheme }) => {
  const { t } = useTranslation();

  const [menuActive, setMenuActive] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    setMenuActive(false);
  }, [location]);

  return (
    <div className={styles.headerBg}>
      <header className={styles.header}>
        <Logotipo currentTheme={currentTheme} />
        <MenuButton isActive={menuActive} onClick={toggleMenu} />
        <div className={menuActive ? styles.menuActived : styles.menu}>
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
                  to="/projects"
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
  currentTheme: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
