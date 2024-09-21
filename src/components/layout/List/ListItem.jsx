/* eslint-disable react/prop-types */
import styles from "./ListItem.module.css";

const ListItem = ({ icon, text }) => {
  return (
    <div className={styles.itemBox}>
      <div className={styles[icon]}></div>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};

export default ListItem;
