/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";
import itemMan from "../../../itemMan";
import { BsStar, BsStarFill } from "react-icons/bs";

const Man = () => {
  const [data] = React.useState<any>(itemMan);
  const [isItem, setIsItem] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();

  if (isItem) {
    return (
      <div className={styles.mainContainer}>
        <Head>
          <title>Item | Ecomerce</title>
        </Head>

        <div className={styles.containerItem}>
          <div className={styles.containerDescription}>
            <h3>Title</h3>
            <p>{description}</p>
          </div>

          <div className={styles.itemImage}>
            <img src={image} alt="item" />
          </div>

          <div className={styles.mainContainerItemStyle}>
            <div className={styles.containerItemStyle}>
              <div className={styles.itemSize}>
                <h5>Tamanho</h5>
                <div className={styles.containerSize}>
                  <div className={styles.size}>PP</div>
                  <div className={styles.size}>P</div>
                  <div className={styles.size}>M</div>
                  <div className={styles.size}>G</div>
                  <div className={styles.size}>GG</div>
                </div>
              </div>
            </div>

            <div className={styles.containerStarStyle}>
              <div className={styles.itemSize}>
                <span>Avaliações</span>
                <div>
                  <div className={styles.containerStars}>
                    <div className={styles.star}>
                      <BsStar size={20} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={20} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={20} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={20} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mainArea}>
      <Head>
        <title>Man | Ecomerce</title>
      </Head>
      {data.map((item) => (
        <>
          <div className={styles.container}>
            <div className={styles.item}>
              <div
                className={styles.image}
                onClick={() => {
                  setIsItem(true);
                  setImage(item.image);
                  setDescription(item.description);
                }}
              >
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
    </div>
  );
};

export default Man;
