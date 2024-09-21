/* eslint-disable react/prop-types */
import styles from "./ListTitle.module.css";

const ListTitle = ({ listTitle }) => {
  return (
    <div className={styles.titleBox}>
      <div className={styles.redLine}></div>
      <div className={styles.blueLine}></div>
      <h1 className={styles.title}>{listTitle}</h1>
    </div>
  );
};

export default ListTitle;
