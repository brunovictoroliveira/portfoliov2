import styles from "./Contact.module.css";

import PageTitle from "../layout/PageTitle.jsx";
import Form from "../layout/Form/Form.jsx";

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Entre em contato" />
      <Form />
    </div>
  );
};

export default Contact;
