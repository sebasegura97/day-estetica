import { NextPage } from "next";
import Head from "next/head";
import MainMenu from "../../components/MainMenu";
import Footer from "../../components/Footer";
import WhatsappFab from "../../components/WhatsappFab";
import { SmoothScroll } from "../../components/SmoothScroll";
import Main from "./sections/Main";
import type { IAppProps } from "./types";

const Catalog: NextPage<IAppProps> = ({ article }) => {
  return (
    <>
      <Head>
        <title>Day | Catalogo</title>
        <meta
          name="description"
          content="Day centro estetico ®. El centro estético número uno en el noroeste argentino. Conocé todos los tratamientos y por que nuestros clientes nos eligen dia a dia."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <SmoothScroll />
      <main className="relative ">
        <MainMenu />
        <WhatsappFab />
        <Main article={article} />
      </main>
      <Footer />
    </>
  );
};

export default Catalog;
