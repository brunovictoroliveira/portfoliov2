import styles from "./Works.module.css";

import PageTitle from "../layout/PageTitle.jsx";
import Button from "../layout/Button.jsx";

import ImgSpotify from "../../assets/imgs/spotify-clone.png";
import ImgCafe from "../../assets/imgs/landing-page-cafe.png";
import ImgBlog from "../../assets/imgs/blog.png";
import ImgCoins from "../../assets/imgs/gerenciador-de-projetos-react.png";
import ImgToDoList from "../../assets/imgs/todolist.png";
import ImgPortfolio from "../../assets/imgs/home-portfolio-light.png";

const Works = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Trabalhos" />
      <div className={styles.mainBox}>
        <div className={styles.card}>
          <img src={ImgSpotify} alt="Layout Home Page Spotify" />
        </div>
        <div className={styles.card}>
          <img src={ImgCafe} alt="Layout Landing Page Café Roxo" />
        </div>
        <div className={styles.card}>
          <img src={ImgBlog} alt="Layout de Blog" />
        </div>
        <div className={styles.card}>
          <img src={ImgCoins} alt="Layout de App Gerenciador de Projetos" />
        </div>
        <div className={styles.card}>
          <img src={ImgToDoList} alt="Layout de App To Do List" />
        </div>
        <div className={styles.card}>
          <img src={ImgPortfolio} alt="Layout Portfólio tema claro" />
        </div>
      </div>
      <Button title="TRABALHOS" />
    </div>
  );
};

export default Works;
