import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./styles.module.css";

const Register = () => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1>Cadastrar</h1>
          </div>

          <div className={styles.loginForm}>
            <div className={styles.loginFormInput}>
              <Input
                label="Nome Completo"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <Input
                label="Data de Nascimento"
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />

              <Input
                label="Email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <Input
                label="Senha"
                type="password"
                htmlFor="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Input
                label="Confirme sua Senha"
                type="password"
                htmlFor="password"
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.button}>
            <Button Title="Cadastrar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
