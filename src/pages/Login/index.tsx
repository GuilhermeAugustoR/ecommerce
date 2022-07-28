import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1>Login</h1>
          </div>

          <div className={styles.loginForm}>
            <div className={styles.loginFormInput}>
              <label htmlFor="email">Email</label>
              <input type="email" />

              <label htmlFor="password">Senha</label>
              <input type="password" />
              <Link href="#">Esqueceu a senha?</Link>

              <div className={styles.button}>
                <button>
                  <span style={{ alignSelf: "center" }}>Login</span>
                </button>
              </div>

              <div className={styles.createAccount}>
                <span>
                  Não tem conta? <Link href="#">Criar Conta</Link>
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
      </div>
    </>
  );
};

export default Login;
