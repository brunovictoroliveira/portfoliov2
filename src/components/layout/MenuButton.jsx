import styles from "./MenuButton.module.css";
import PropTypes from "prop-types";

const MenuButton = ({ isActive, onClick }) => {
  return (
    <div
      className={`${styles.menuButton} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.menuLine}></span>
      <span className={styles.menuLine}></span>
      <span className={styles.menuLine}></span>
    </div>
  );
};

MenuButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
