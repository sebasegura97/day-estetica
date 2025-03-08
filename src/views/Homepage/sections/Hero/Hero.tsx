import Image from "next/image";
import Link from "next/link";
import hero from "./assets/hero.png";

const Hero = () => {
  return (
    <div className="relative min-h-[600px] lg:min-h-[800px] container mx-auto sm:px-4 pt-24 md:pt-32 lg:pt-48 flex flex-col items-center justify-start text-center sm:items-start sm:text-left">
      {/* <div className="flex flex-col items-center "> */}
      <h1 className="font-h1 mb-4 lg:mb-14 max-w-[900px]">
        Lanzamos nuestro ecommerce!
      </h1>
      <h2 className="font-h5 lg:my-2 max-w-xs sm:max-w-sm lg:max-w-xl mx-auto sm:ml-0 font-body text-2xl font-semibold">
        Encontrá la mas amplia variedad de productos de cuidado dermatólogico y
        estético para tu piel y tu cuerpo.
      </h2>
      <div className="flex flex-col items-center sm:flex-row sm:items-baseline">
        <Link href="https://dayspa.mitiendanube.com/productos" passHref>
          <a className="btn-primary font-serif font-bold font-uppercase mt-6 sm:mr-6">
            Ver productos
          </a>
        </Link>
        <Link href="/servicios/" passHref>
          <a className="text-link font-serif text-dark-900 mt-2">
            Ver servicios
          </a>
        </Link>
      </div>
      {/* </div> */}
      <div className="w-full sm:w-7/12 lg:w-1/2 sm:absolute bottom-0 sm:right-0 z-1 relative">
        <Image src={hero} />
        <div className="sm:hidden h-1 bg-primary-300 w-full absolute bottom-0  mb-1"></div>
      </div>
    </div>
  );
};

export default Hero;
