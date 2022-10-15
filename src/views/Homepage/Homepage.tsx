import { NextPage } from "next";
import Head from "next/head";
import MainMenu from "../../components/MainMenu";
import Footer from "../../components/Footer";
import Brands from "./components/Brands";
import Catalog from "./sections/Catalog";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import WhatsappFab from "../../components/WhatsappFab";
import { SmoothScroll } from "../../components/SmoothScroll";

const Homepage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Day | Home</title>
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
        <Hero />
        <Brands />
        <Catalog />
        <Contact />
        <About />
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
