import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.topSection}>
          <div className={styles.leftSection}>
            <label htmlFor="name">Nome*:</label>
            <input type="text" placeholder="Digite seu nome" />
            <label htmlFor="company">Empresa*:</label>
            <input type="text" placeholder="Digite o nome da sua empresa" />
            <label htmlFor="email">E-mail*:</label>
            <input type="email" placeholder="Digite seu e-mail" />
            <label htmlFor="phone">Telefone:</label>
            <input type="tel" placeholder="+00 99 123456789" />
          </div>
          <div className={styles.rightSection}>
            <textarea placeholder="Digite sua mensagem aqui" />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
