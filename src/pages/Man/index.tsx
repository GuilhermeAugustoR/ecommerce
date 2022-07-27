import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";
import itemMan from "../../../itemMan";

const Man = () => {
  return (
    <div>
      <Head>
        <title>Man | Ecomerce</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.item}>
          <img
            width={270}
            height={150}
            src="https://picsum.photos/200/300"
            alt=""
          />
          <span>Nome do produto</span>
          <span>Descrição</span>
          <span>Valor</span>
        </div>
      </div>
    </div>
  );
};

export default Man;
