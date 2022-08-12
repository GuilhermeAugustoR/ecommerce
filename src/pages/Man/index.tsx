/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import styles from "./styles.module.css";
import itemMan from "../../../itemMan";
import { BsStar } from "react-icons/bs";
import { itemColor, itemSize } from "./item";

const Man = () => {
  const [data] = React.useState<any>(itemMan);
  const [isItem, setIsItem] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();
  const [color] = React.useState<any[]>(itemColor);
  const [size] = React.useState<any[]>(itemSize);
  const [sizeActive, setSizeActive] = React.useState<string>("");

  if (isItem) {
    return (
      <div className={styles.mainContainer}>
        <Head>
          <title>Item | Ecomerce</title>
        </Head>

        <div className={styles.containerItem}>
          <div className={styles.containerDescription}>
            <h3>{name}</h3>
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
                  {size.map((item: any) => (
                    <div
                      key={item.id}
                      className={sizeActive === item.size ? styles.sizeActive : styles.size}
                      onClick={() => {
                        setSizeActive(item.size);
                      }}
                    >
                      {item.size}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.containerStarStyle}>
              <div className={styles.itemSize}>
                <span>Avaliações</span>
                <div>
                  <div className={styles.containerStars}>
                    <div className={styles.star}>
                      <BsStar size={15} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={15} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={15} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={15} />
                    </div>
                    <div className={styles.star}>
                      <BsStar size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.containerPrice}>
              <div className={styles.itemSize}>
                <text>Valor</text>
                <div className={styles.containerPriceStyle}>
                  <div className={styles.priceItem}>
                    <text>R$ 100,00</text>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.containerColorStyle}>
              <div className={styles.itemSize}>
                <h5>Cores</h5>
                <div className={styles.containerColor}>
                  {color.map((item: any) => (
                    <div
                      key={item.id}
                      className={styles.color}
                      style={{ backgroundColor: item.color }}
                    />
                  ))}
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
      {data.map((item: any) => (
        <>
          <div className={styles.container}>
            <div className={styles.item}>
              <div
                className={styles.image}
                onClick={() => {
                  setIsItem(true);
                  setImage(item.image);
                  setDescription(item.description);
                  setName(item.name);
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
