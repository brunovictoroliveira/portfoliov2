import styles from "./Contact.module.css";

import PageTitle from "../layout/PageTitle.jsx";

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Entre em contato" />
    </div>
  );
};

export default Contact;
