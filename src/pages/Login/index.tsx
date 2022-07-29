import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import styles from "./styles.module.css";
import Input from "../../components/Input";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1>Login</h1>
          </div>

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

              <div className={styles.forgotPass}>
                <Link href="/ForgotPassword">Esqueceu a senha?</Link>
              </div>

              <div className={styles.button}>
                <button>Login</button>
              </div>
            </div>
          </div>

          <div className={styles.account}>
            <div className={styles.createAccount}>
              <span>
                Não tem conta? <Link href="/Register">Criar Conta</Link>
              </span>
            </div>
            <div className={styles.loginWith}>
              <Link href="#">
                <FcGoogle style={{ cursor: "pointer" }} />
              </Link>

              <Link href="#">
                <FaFacebook style={{ cursor: "pointer" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
