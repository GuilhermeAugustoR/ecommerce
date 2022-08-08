/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "better-react-carousel";

const Home: NextPage = () => {
  const MyDot = ({ isActive }: any) => (
    <span
      style={{
        height: isActive ? "10px" : "6px",
        width: isActive ? "10px" : "6px",
        borderRadius: "50%",
        background: isActive ? "#14b8a6" : "#6f6f6f",
      }}
    ></span>
  );
  return (
    <>
      <Head>
        <title>Home | Ecomerce</title>
      </Head>

      <div style={{ marginTop: 15 }}>
        <Carousel cols={1} rows={1} loop showDots autoplay={6000} dot={MyDot}>
          <Carousel.Item>
            <img src="https://picsum.photos/id/1/1100/380" alt="img1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/id/2/1100/380" alt="img2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/id/3/1100/380" alt="img3" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
