import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";
import itemMan from "../../../itemMan";

const Man = () => {
  const [data] = React.useState(itemMan);
  return (
    <div className={styles.mainArea}>
      <Head>
        <title>Man | Ecomerce</title>
      </Head>
      {data.map((item) => (
        <>
          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img width={200} height={200} src={item.image} alt="" />
                <span>{item.name}</span>
                <span>{item.description}</span>
                <span>{item.price}</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Man;
