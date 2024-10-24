import styles from "./Projects.module.css";

import { Link } from "react-router-dom";

import "../../i18n.js";
import { useTranslation } from "react-i18next";

import PageTitle from "../layout/PageTitle.jsx";
import Button from "../layout/Button.jsx";
import GithubButton from "../layout/GithubButton.jsx";
import ProjectTitle from "../layout/ProjectTitle.jsx";

import ImgSpotify from "../../assets/imgs/spotify-clone.png";
import ImgCafe from "../../assets/imgs/landing-page-cafe.png";
import ImgBlog from "../../assets/imgs/blog.png";
import ImgCoins from "../../assets/imgs/gerenciador-de-projetos-react.png";
import ImgToDoList from "../../assets/imgs/todolist.png";
import ImgPortfolio from "../../assets/imgs/home-portfolio-light.png";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <PageTitle title={t("projects.title")} />
      <div className={styles.mainBox}>
        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Home Page Spotify"
            className={styles.projectTitle}
          />
          <img
            src={ImgSpotify}
            alt="Layout Home Page Spotify"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/01-spotify-project"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Landing Page"
            className={styles.projectTitle}
          />
          <img
            src={ImgCafe}
            alt="Layout Landing Page Rocket Coffee"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/02-rocket-coffee"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Blog Home Page"
            className={styles.projectTitle}
          />
          <img src={ImgBlog} alt="Layout de Blog" className={styles.image} />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/03-rocket-blog"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Project Manager (React)"
            className={styles.projectTitle}
          />
          <img
            src={ImgCoins}
            alt="Layout de App Gerenciador de Projetos"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/gerenciador-de-projetos-react"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <ProjectTitle
            projectTitle="To Do List (React)"
            className={styles.projectTitle}
          />
          <img
            src={ImgToDoList}
            alt="Layout de App To Do List"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/to-do-react"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Portfolio (React)"
            className={styles.projectTitle}
          />
          <img
            src={ImgPortfolio}
            alt="Layout Portfólio"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/portfoliov2"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>
      </div>
      <Link to="/contact">
        <Button title={t("projects.navigationbutton")} />
      </Link>
    </div>
  );
};

export default Projects;
