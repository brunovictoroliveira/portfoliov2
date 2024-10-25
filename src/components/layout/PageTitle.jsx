import styles from "./PageTitle.module.css";

import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.titleBox}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
