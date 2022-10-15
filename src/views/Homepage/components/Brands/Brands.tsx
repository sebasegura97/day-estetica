import clsx from "clsx";
import Image from "next/image";
import { BRANDS } from "./constants";

const Brands: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex flex-row flex-wrap justify-center p-4 bg-white lg:max-w-4xl lg:m-auto",
        className
      )}
    >
      {BRANDS.map((brand) => (
        <div
          className="flex items-center justify-start relative w-32 h-16 m-4 lg:mx-10 lg:w-20 lg:h-16"
          key={`home-brands-${brand.name}`}
        >
          <Image src={brand.logoSrc} alt={brand.name} objectFit="contain" />
        </div>
      ))}
    </div>
  );
};

export default Brands;
