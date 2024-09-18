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
            <li className={styles.selected}>Início</li>
            <li className={styles.unselected}>Habilidades</li>
            <li className={styles.unselected}>Trabalhos</li>
            <li className={styles.unselected}>Contatos</li>
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
