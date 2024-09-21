/* eslint-disable react/prop-types */
import styles from "./PageTitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.titleBox}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default PageTitle;
