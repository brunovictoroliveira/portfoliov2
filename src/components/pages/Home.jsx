import styles from "./Home.module.css";
import Photo from "../../assets/imgs/avatar_photo.png";
import Button from "../layout/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.homeText}>
          <h1 className={styles.title}>
            Olá,<br></br>
            me chamo <span className={styles.blue}>Bruno Victor,</span>
            <br></br>sou{" "}
            <span className={styles.pink}>Desenvolvedor Full Stack</span>
          </h1>
          <p className={styles.summary}>
            Tenho cerca de 10 anos de experiência como Designer Gráfico e sempre
            fui apaixonado por tecnologia. Em 2020 iniciei a graduação em
            Análise e Desenvolvimento de Sistemas na UERJ (Universidade do
            Estado do Rio de Janeiro).
            <br></br>
            <br></br>
            Tenho uma personalidade criativa e curiosa. Nas horas vagas gosto de
            ler sobre novidades de Ciência e Tecnologia, Mitologia, Sci-Fi,
            Filosofia, Psicologia e Antropologia. Também desenho, componho e
            toco instrumentos musicais.
          </p>
        </div>
        <Button title="HABILIDADES" />
      </div>
      <div className={styles.box2}>
        <div className={styles.photo}>
          <img src={Photo} alt="Foto de Bruno Victor" />
        </div>
      </div>
    </div>
  );
};

export default Home;
