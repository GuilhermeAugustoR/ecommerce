/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.css";
import Carousel from "better-react-carousel";

interface CarouselImage {
  img: any[];
}

const CarouselImage: React.FC<CarouselImage> = ({ img }) => {
  const MyDot = ({ isActive }: any) => (
    <span
      style={{
        height: isActive ? "10px" : "6px",
        width: isActive ? "10px" : "6px",
        borderRadius: "50%",
        background: isActive ? "#14b8a6" : "#6f6f6f",
      }}
    />
  );

  return (
    <Carousel cols={1} rows={1} loop showDots autoplay={6000} dot={MyDot}>
      {img.map(({ url, alt }: any) => {
        <Carousel.Item>
          <img src={url} alt={alt} />
        </Carousel.Item>;
      })}

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
  );
};

export default CarouselImage;
