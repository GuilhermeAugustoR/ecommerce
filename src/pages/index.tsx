/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/home.module.css";
import { BsArrowUp } from "react-icons/bs";
import CarouselImage from "../components/Carrousel";
import { imageCarousel } from "../helper/imageCarousel";

const Home: NextPage = () => {


  return (
    <>
      <Head>
        <title>Home | Ecomerce</title>
      </Head>

      <div className={styles.container}>
        <CarouselImage img={imageCarousel} />

        <div className={styles.scrollToTop}>
          <a href="#top">
            <BsArrowUp size={30} />
          </a>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Promoção dia dos Pais</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>
          </div>

          <div className={styles.subImagesPromotion1}>
            <img
              src="https://i.ytimg.com/vi/Ue48xzDjfyE/maxresdefault.jpg"
              alt="img1"
            />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Novidades!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, quisquam.
            </p>
          </div>

          <div className={styles.subImagesPromotion2}>
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
