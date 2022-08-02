/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProgressBar from "../../components/ProgressBar";
import styles from "./styles.module.css";

const ShoppingCart = () => {
  const [cep, setCep] = React.useState("");
  const [plus, setPlus] = React.useState<number>(1);
  const [price, setPrice] = React.useState<number>(100);
  const [progress, setProgress] = React.useState<number>(1);

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Carrinho | Ecommerce</title>
      </Head>

      <div className={styles.progressBar}>
        <ProgressBar progress={progress} />
      </div>

      <div className={styles.submainContainer}>
        <div className={styles.itemsContainer}>
          <div className={styles.fretecontainer}>
            <div className={styles.containerCep}>
              <span className={styles.value}>Digite se CEP</span>
              <div className={styles.input}>
                <Input
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => {
                    setCep(e.target.value);
                  }}
                />
                <Button Title="OK" />
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.item}>
              <div className={styles.image}>
                <img
                  width={200}
                  height={200}
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="image"
                />
                <div className={styles.descriptionProduct}>
                  <span className={styles.name}>Nome do produto</span>
                  <span className={styles.description}>
                    Descrição do produto
                  </span>
                </div>

                <div className={styles.quantity}>
                  <span>Quantidade</span>
                  <div className={styles.quantityContainer}>
                    <button
                      className={styles.button}
                      onClick={() => {
                        setPlus(plus - 1);
                      }}
                    >
                      -
                    </button>
                    <span className={styles.number}>{plus}</span>
                    <button
                      className={styles.button}
                      onClick={() => {
                        setPlus(plus + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className={styles.containerValue}>
                  <span className={styles.value}>Valor Total</span>
                  <div className={styles.quantityContainer}>
                    <span className={styles.price}>R$ {price * plus},00</span>
                  </div>
                </div>
                <div className={styles.containerRemove}>
                  <span className={styles.remove}>
                    <GoTrashcan />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.subcontainer}>
          <div className={styles.containerSubtotal}>
            <span className={styles.titleSubcontainer}>Resumo</span>
            <div className={styles.resumeProduct}>
              <span className={styles.title}>Valor dos Produtos:</span>
              <span className={styles.price}>R$ {price * plus},00</span>
            </div>
            <div className={styles.resumeProduct}>
              <span className={styles.title}>Valor do Frete:</span>
              <span className={styles.price}>R$ {price * plus},00</span>
            </div>
            <div className={styles.resumeProduct}>
              <span className={styles.title}>Total a ser pago:</span>
              <span className={styles.price}>R$ {price * plus},00</span>
            </div>

            <div className={styles.containerButton}>
              <Button Title="Ir para o pagamento" />
              <Button Title="Continuar comprando" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
