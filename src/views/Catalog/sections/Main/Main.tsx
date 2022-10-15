import Image from "next/image";
import { CatalogCard } from "../../types";

export type MainProps = {
  services: CatalogCard[];
};
const Main: React.FC<MainProps> = ({ services }) => {
  return (
    <div className="container mx-auto grid grid-flow-row grid-cols-1">
      <h1 className="font-h1 pt-24 text-center sm:text-start lg:pt-36 mb-12">
        Catalogo
      </h1>
      {services.map((service) => {
        return (
          <article
            key={service.id}
            className="px-3 w-80 flex flex-col sm:flex-row sm:w-auto max-w-6xl mx-auto pb-6 mb-6 border-b border-primary-50"
          >
            <div className="relative w-full lg:w-80 h-52 rounded-xl overflow-hidden mr-4 shrink-0">
              <Image
                alt={service.title}
                src={`https:${service.heroImage.fields.file.url}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold mt-4 mb-1 ">
                {service.title}
              </h3>
              <p className="font-body">{service.shortDescription}</p>
              <button className="btn-primary py-1 px-8 float-right mt-4 ">
                Ver mas
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Main;
