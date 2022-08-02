import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./styles.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1>Esqueceu a senha?</h1>
          </div>

          <div className={styles.subtitle}>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto numquam similique eum quae!
            </h4>
            <div className={styles.loginForm}>
              <div className={styles.loginFormInput}>
                <Input
                  label="Email"
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <div className={styles.button}>
                  <Button Title="Enviar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
