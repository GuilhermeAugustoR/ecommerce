/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProgressBar from "../../components/ProgressBar";
import freteOption from "./freteOption";
import styles from "./styles.module.css";

const ShoppingCart = () => {
  const [cep, setCep] = React.useState("");
  const [plus, setPlus] = React.useState<number>(1);
  const [price] = React.useState<number>(100);
  const [frete, setFrete] = React.useState<number>(0);
  const [optionFrete] = React.useState<any[]>(freteOption);
  const [progress] = React.useState<number>(1);
  const [isFrete, setIsFrete] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (cep.length < 10) {
      setIsFrete(false);
    }
  }, [cep, plus]);

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
                  maxLength={10}
                  onChange={(e) => {
                    setCep(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/^(\d{2})(\d)/, "$1.$2")
                        .replace(/\.(\d{3})(\d)/, ".$1-$2")
                    );
                  }}
                />
                <Button
                  Title="OK"
                  disabled={cep.length < 10}
                  onClick={() => {
                    setIsFrete(true);
                  }}
                />
              </div>

              {isFrete && (
                <div className={styles.containerFrete}>
                  <span className={styles.value}>Frete</span>
                  {optionFrete.map((item) => (
                    <div key={item.id} className={styles.frete}>
                      <Input
                        htmlFor={item.name}
                        label={`${item.name} - R$${item.price},00`}
                        value={item.price}
                        name="frete"
                        type="radio"
                        direction="row"
                        onChange={(e) => {
                          setFrete(parseInt(e.target.value));
                        }}
                      />
                    </div>
                  ))}
                  <text className={styles.value}>R$ {frete},00</text>
                </div>
              )}
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
                      disabled={plus === 1}
                      style={plus === 1 ? { cursor: "not-allowed" } : {}}
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
              <span className={styles.price}>R$ {frete},00</span>
            </div>
            <div className={styles.resumeProduct}>
              <span className={styles.title}>Total a ser pago:</span>
              <span className={styles.price}>R$ {price * plus + frete},00</span>
            </div>

            <div className={styles.containerButton}>
              <button className={styles.buttonBuy}>Ir para o pagamento</button>
              <button className={styles.buttomContinueBuy} onClick={() => {}}>
                <Link href={"/"}>Continuar Comprando</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
