/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";
import itemMan from "../../../itemMan";
import Modal from "../../components/Modal";

const Man = () => {
  const [data] = React.useState(itemMan);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.mainArea}>
      <Head>
        <title>Man | Ecomerce</title>
      </Head>
      {data.map((item) => (
        <>
          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.image} onClick={() => setIsOpen(true)}>
                <img
                  key={item.id}
                  width={200}
                  height={200}
                  src={item.image}
                  alt="image"
                />
                <span className={styles.name}>{item.name}</span>
                <span className={styles.price}>{item.price}</span>
              </div>
            </div>
          </div>
        </>
      ))}

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Man;
