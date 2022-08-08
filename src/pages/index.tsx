/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "better-react-carousel";
import styles from "../../styles/home.module.css";

const Home: NextPage = () => {
  const MyDot = ({ isActive }: any) => (
    <span
      style={{
        height: isActive ? "10px" : "6px",
        width: isActive ? "10px" : "6px",
        borderRadius: "50%",
        // marginBottom: "30px",
        background: isActive ? "#14b8a6" : "#6f6f6f",
      }}
    />
  );
  return (
    <>
      <Head>
        <title>Home | Ecomerce</title>
      </Head>

      <div className={styles.container}>
        <Carousel cols={1} rows={1} loop showDots autoplay={6000} dot={MyDot}>
          <Carousel.Item>
            <img
              src="https://cdn.dooca.store/739/files/banner-2-site-finna-moda.jpg?v=1632352601&webp=0"
              alt="img1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://gladius.vteximg.com.br/arquivos/ids/159896/BAnners-de-Categoria-vestu%C3%A1rio2.jpg?v=636888591996800000"
              alt="img2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://beagle.vteximg.com.br/arquivos/ids/210689/corra%20e%20aproveite.png?v=637935018933400000"
              alt="img3"
            />
          </Carousel.Item>
        </Carousel>

        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Ecomerce</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>
          </div>

          <div className={styles.subImages}>
            <img
              src="https://1.bp.blogspot.com/-sppANwvLmws/XvYoIyT2JwI/AAAAAAAAAkQ/2Oh69GvgAYwuZU01c0Nvaf4wTA8CXt4ewCLcBGAsYHQ/s1600/productcard.jpg"
              alt="img1"
            />
            <img
              src="https://i.ytimg.com/vi/OJJBIAaZv-g/maxresdefault.jpg"
              alt="img1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
