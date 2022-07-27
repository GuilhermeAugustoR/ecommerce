import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Ecomerce</title>
      </Head>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      ></div>
    </>
  );
};

export default Home;
