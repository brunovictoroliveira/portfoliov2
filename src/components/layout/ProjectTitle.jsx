/* eslint-disable react/prop-types */
import styles from "./ProjectTitle.module.css";

const ProjectTitle = ({ projectTitle }) => {
  return (
    <div className={styles.titleBox}>
      <div className={styles.redLine}></div>
      <div className={styles.blueLine}></div>
      <h1 className={styles.title}>{projectTitle}</h1>
    </div>
  );
};

export default ProjectTitle;
