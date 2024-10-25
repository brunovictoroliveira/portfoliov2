import styles from "./ProjectTitle.module.css";

import PropTypes from "prop-types";

const ProjectTitle = ({ projectTitle }) => {
  return (
    <div className={styles.titleBox}>
      <div className={styles.redLine}></div>
      <div className={styles.blueLine}></div>
      <h1 className={styles.title}>{projectTitle}</h1>
    </div>
  );
};

ProjectTitle.propTypes = {
  projectTitle: PropTypes.string,
};

export default ProjectTitle;
