import styles from "./ListItem.module.css";

import PropTypes from "prop-types";

const ListItem = ({ icon, text }) => {
  return (
    <div className={styles.itemBox}>
      <div className={styles[icon]}></div>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};

ListItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

export default ListItem;
