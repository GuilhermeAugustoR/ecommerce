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
  const [total, setTotal] = React.useState<number>(price * plus + frete);
  const [optionFrete] = React.useState<any[]>(freteOption);
  const [progress, setProgress] = React.useState<number>(1);
  const [isFrete, setIsFrete] = React.useState<boolean>(false);
  const [isPayment, setIsPayment] = React.useState<boolean>(false);
  const [isCreditCard, setIsCreditCard] = React.useState<boolean>(true);
  const [isPix, setIsPix] = React.useState<boolean>(false);
  const [isTicket, setIsChicket] = React.useState<boolean>(false);

  const [numberCard, setNumberCard] = React.useState<string>("");
  const [nameCard, setNameCard] = React.useState<string>("");
  const [validateCard, setValidateCard] = React.useState<string>("");
  const [cvvCard, setCvvCard] = React.useState<string>("");
  const [cpfCard, setCpfCard] = React.useState<string>("");
  const [dateCard, setDateCard] = React.useState<string>("");
  const [quantityPayment1] = React.useState<number>(1);
  const [quantityPayment2] = React.useState<number>(2);
  const [quantityPayment3] = React.useState<number>(3);
  const [quantityPayment4] = React.useState<number>(4);

  React.useEffect(() => {
    setTotal(price * plus + frete);
  } , [price, plus, frete]);

  React.useEffect(() => {
    if (cep.length < 10) {
      setIsFrete(false);
    }
  }, [cep, plus]);

  if (isPayment) {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.progressBar}>
          <ProgressBar progress={progress} />
        </div>
        <div className={styles.paymentContainer}>
          <h1>Forma de Pagamento</h1>
          <div className={styles.payment}>
            <button
              style={isPix ? { background: "#0d9488" } : {}}
              onClick={() => {
                setIsPix(true);
                setIsChicket(false);
                setIsCreditCard(false);
              }}
            >
              PIX
            </button>

            <button
              style={isTicket ? { background: "#0d9488" } : {}}
              onClick={() => {
                setIsChicket(true);
                setIsPix(false);
                setIsCreditCard(false);
              }}
            >
              Boleto
            </button>

            <button
              style={isCreditCard ? { background: "#0d9488" } : {}}
              onClick={() => {
                setIsCreditCard(true);
                setIsPix(false);
                setIsChicket(false);
              }}
            >
              Cartão de Crédito
            </button>
          </div>

          {isCreditCard && (
            <div className={styles.containerFormPayment}>
              <div className={styles.formPayment}>
                <Input
                  label="Numero do Cartão"
                  placeholder="Digite o numero do cartão"
                  maxLength={19}
                  value={numberCard}
                  onChange={(e) => {
                    setNumberCard(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(.{4})/g, "$1 ")
                        .replace(/\s+$/, "")
                    );
                  }}
                />
                <Input
                  label="Nome impresso no Cartão"
                  placeholder="Digite o nome impresso cartão"
                  value={nameCard}
                  onChange={(e) => {
                    setNameCard(
                      e.target.value
                        .replace(/((?:[1-9]\s*))/g, "")
                        .replace(/[^a-zA-Z ]/g, "")
                    );
                  }}
                />
              </div>

              <div className={styles.formPayment}>
                <Input
                  label="Validade do Cartão"
                  placeholder="Digite a validade do cartão"
                  value={validateCard}
                  maxLength={5}
                  onChange={(e) => {
                    setValidateCard(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/^(\d{2})(\d{2})/, "$1/$2")
                    );
                  }}
                />
                <Input
                  label="Código de Segurança"
                  placeholder="Digite o código de segurança"
                  value={cvvCard}
                  maxLength={3}
                  onChange={(e) => {
                    setCvvCard(e.target.value.replace(/\D/g, ""));
                  }}
                />
                <Input
                  label="CPF do Titular do Cartão"
                  placeholder="Digite o CPF do titular do cartão"
                  value={cpfCard}
                  maxLength={11}
                  onChange={(e) => {
                    setCpfCard(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    );
                  }}
                />
                <Input
                  label="Data de Nascimento"
                  placeholder="Digite a data de nascimento"
                  value={dateCard}
                  maxLength={10}
                  onChange={(e) => {
                    setDateCard(
                      e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(\d{2})(\d{2})/, "$1/$2/$3")
                    );
                  }}
                />
              </div>

              <div className={styles.formPayment}>
                <div className={styles.select}>
                  <label>Forma de pagamento </label>
                  <select>
                    <option value={quantityPayment1}>1x sem juros</option>
                    <option value={quantityPayment2}>2x sem juros</option>
                    <option value={quantityPayment3}>3x sem juros</option>
                    <option value={quantityPayment4}>4x sem juros</option>
                  </select>
                </div>
              </div>
              <div className={styles.containerButtonTicker}>
                <button className={styles.buttonBack}>
                  <Link href="/">Voltar para a loja</Link>
                </button>

                <button className={styles.buttonConfirm}>
                  <Link href="/">Confirmar compra</Link>
                </button>
              </div>
            </div>
          )}

          {isTicket && (
            <div className={styles.containerFormPayment}>
              <div className={styles.titleTicket}>
                <h2>Boleto</h2>
              </div>

              <div className={styles.subTitleTicket}>
                <h4>
                  Boleto tem até 15% de desconto* na compra e é a forma de
                  pagamento que recebe o maior desconto sob o valor total da
                  compra. Esta é a forma mais vantajosa para quem deseja pagar à
                  vista. Você poderá efetuar o pagamento do boleto em qualquer
                  Banco ou Casa Lotérica em qualquer lugar do Brasil, sem
                  necessidade de confirmação do pagamento. *O desconto poderá
                  ser concedido ou não até o limite de 15%, podendo ser menor ou
                  zero, de acordo com o detalhado nas descrições do produto e só
                  será aplicado às vendas diretas e entregues pelo KaBuM!, não
                  se aplicando aos produtos de Marketplace.
                </h4>
              </div>

              <div className={styles.mainTotalTicket}>
                <div className={styles.totalTicket}>
                  <h2> Total da sua compra</h2>
                  <h2>R${total},00</h2>
                </div>
                <div className={styles.totlaDiscontTicket}>
                  <h2>Total via boleto</h2>
                  <h2 style={{ color: "#05cfbe" }}>R${total * 0.85},00</h2>
                </div>
              </div>

              <div className={styles.containerButtonTicker}>
                <button className={styles.buttonBack}>
                  <Link href="/">Voltar para a loja</Link>
                </button>

                <button className={styles.buttonConfirm}>
                  <Link href="/">Confirmar compra</Link>
                </button>
              </div>
            </div>
          )}

          {isPix && (
            <div className={styles.containerFormPayment}>
              <div className={styles.titleTicket}>
                <h2>Pix</h2>
                <h4>A melhor opção para suas compras à vista</h4>
              </div>

              <div className={styles.subTitleTicket}>
                <span>
                  Pague com PIX e aproveite até 15% OFF. Nessa modalidade, seu
                  pedido é aprovado instantaneamente, o que torna a expedição do
                  seu pedido ainda mais rápida. O que você precisa saber antes
                  de pagar por PIX:
                  <p>
                    É necessário possuir uma chave PIX cadastrada no seu Banco;
                  </p>
                  <p>
                    Com o seu celular, basta escanear o QR Code ou copiar o
                    código para efetivar a compra;
                  </p>
                  <p>
                    O pagamento é processado e debitado do valor em sua conta
                    corrente;
                  </p>
                  Como padrão, o Banco Central limitou os pagamentos no período
                  das 20h às 06h, a valores de até R$1.000. Mas você pode
                  solicitar o aumento do limite deste período diretamente com o
                  seu banco, pela Central de Atendimento ou APP. O prazo de
                  liberação é de até 48h.
                </span>
              </div>

              <div className={styles.mainTotalTicket}>
                <div className={styles.totalTicket}>
                  <h2> Total da sua compra</h2>
                  <h2>R${total},00</h2>
                </div>
                <div className={styles.totlaDiscontTicket}>
                  <h2>Total via boleto</h2>
                  <h2 style={{ color: "#05cfbe" }}>R${total * 0.85},00</h2>
                </div>
              </div>

              <div className={styles.containerButtonTicker}>
                <button className={styles.buttonBack}>
                  <Link href="/">Voltar para a loja</Link>
                </button>

                <button className={styles.buttonConfirm}>
                  <Link href="/">Confirmar compra</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

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
                  src="https://images.lojanike.com.br/320x320/produto/tenis-air-max-flyknit-racer-nn-DJ6106-300-1-11655156149.jpg"
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
              <span className={styles.price}>R$ {total},00</span>
            </div>

            <div className={styles.containerButton}>
              <button
                className={styles.buttonBuy}
                onClick={() => {
                  setIsPayment(true);
                  setProgress(progress + 2);
                }}
              >
                Ir para o pagamento
              </button>
              <button className={styles.buttomContinueBuy}>
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
