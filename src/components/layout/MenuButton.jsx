import styles from "./MenuButton.module.css";

const MenuButton = () => {
  return (
    <div className={styles.menuButton}>
      <span className={styles.menuLine}></span>
      <span className={styles.menuLine}></span>
      <span className={styles.menuLine}></span>
    </div>
  );
};

export default MenuButton;
