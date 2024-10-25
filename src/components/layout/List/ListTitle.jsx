import styles from "./ListTitle.module.css";

import PropTypes from "prop-types";

const ListTitle = ({ listTitle }) => {
  return (
    <div className={styles.titleBox}>
      <div className={styles.redLine}></div>
      <div className={styles.blueLine}></div>
      <h1 className={styles.title}>{listTitle}</h1>
    </div>
  );
};

ListTitle.propTypes = {
  listTitle: PropTypes.string,
};

export default ListTitle;
