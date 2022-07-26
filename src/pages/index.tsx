import type { NextPage } from "next";
import Head from "next/head";
import Carrousel from "../components/Carrousel";
import { Header } from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Ecomerce</title>
      </Head>
      <Header />

      <main>
        <Carrousel />
      </main>
    </>
  );
};

export default Home;
