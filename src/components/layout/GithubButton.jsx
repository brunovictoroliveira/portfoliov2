import styles from "./GithubButton.module.css";

const GithubButton = () => {
  return (
    <div className={styles.button}>
      <div className={styles.githubIcon}></div>
      <div className={styles.text}>Acessar repositório</div>
    </div>
  );
};

export default GithubButton;
