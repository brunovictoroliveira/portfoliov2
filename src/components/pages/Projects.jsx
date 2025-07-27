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
import ImgToDoList from "../../assets/imgs/todolist.png";
import ImgTasklist from "../../assets/imgs/tasklist.png";
import ImgPortfolio from "../../assets/imgs/home-portfolio-light.png";
import ImgChatbot from "../../assets/imgs/chatbot.png";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <PageTitle title={t("projects.title")} />
      <div className={styles.mainBox}>
        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Chatbot CS2 Team (React)"
            className={styles.projectTitle}
          />
          <img
            src={ImgChatbot}
            alt="Thumbnail Chatbot CS2 Team"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictoroliveira/chatbot-cs2team"
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
            alt="Thumbnail Portfólio"
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
        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Tasklist v2.0 (React)"
            className={styles.projectTitle}
          />
          <img
            src={ImgTasklist}
            alt="Thumbnail Tasklist v2.0"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/tasklist"
              target="_blank"
            >
              <GithubButton />
            </Link>
          </div>
        </div>
        <div className={styles.card}>
          <ProjectTitle
            projectTitle="Tasklist v1.0 (React)"
            className={styles.projectTitle}
          />
          <img
            src={ImgToDoList}
            alt="Thumbnail Tasklist v1.0"
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
            projectTitle="Home Page Spotify"
            className={styles.projectTitle}
          />
          <img
            src={ImgSpotify}
            alt="Thumbnail Home Page Spotify"
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
            alt="Thumbnail Landing Page Rocket Coffee"
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
          <img
            src={ImgBlog}
            alt="Thumbnail Blog Home Page"
            className={styles.image}
          />
          <div className={styles.overlay}>
            <Link
              to="https://github.com/brunovictorlima/03-rocket-blog"
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
