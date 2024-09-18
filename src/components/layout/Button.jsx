/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button = ({ title }) => {
  return <div className={styles.button}>{title}</div>;
};

export default Button;
