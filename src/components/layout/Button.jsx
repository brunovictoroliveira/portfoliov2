import styles from "./Button.module.css";

import PropTypes from "prop-types";

const Button = ({ title }) => {
  return <div className={styles.button}>{title}</div>;
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
