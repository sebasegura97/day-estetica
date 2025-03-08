import React from "react";
import { SERVICE_CATEGORIES, PRODUCT_CATEGORIES } from "./constants";

const Catalog = () => {
  return (
    <>
      <section className="py-12 lg:py-32 ">
        <div className="container text-center mx-auto mb-24 lg:mb-36">
          <h3 className="font-h1 mb-8 lg:mb-24 text-primary-900">Productos</h3>
          <h4 className="font-h5 px-8  text-primary-900 max-w-5xl m-auto">
            Entrá a conocer nuestro ecommerce y descubrí el gran catálogo de
            productos disponibles para vos
          </h4>
          <a
            href="https://dayspa.mitiendanube.com"
            className="btn-primary my-8 lg:my-12 inline-block"
          >
            Entrar
          </a>

          <iframe
            src="https://dayspa.mitiendanube.com/productos"
            className="w-full h-[80vh] "
            title="Store Dayspa"
          ></iframe>
        </div>
      </section>

      <section className="py-12 lg:py-32 bg-secondary-50">
        <div className="container text-center mx-auto">
          <h3 className="font-h1 mb-8 lg:mb-24 text-secondary-900">
            Servicios
          </h3>
          <h4 className="font-h5 mb-8 px-8 lg:mb-24 text-secondary-900 max-w-5xl m-auto">
            Tenemos un catalogo de servicios diseñado por expertos y el mejor
            acompañamiento para que logres tus objetivos.
          </h4>
          <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2  gap-y-10 sm:gap-12 lg:gap-24 w-fit mx-auto">
            {SERVICE_CATEGORIES.map(({ icon, href, title }) => {
              return (
                <a
                  key={`category-icon-${href}`}
                  className={"flex items-center"}
                  href={href}
                >
                  <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-full relative">
                    {icon}
                  </div>
                  <span className="font-sans text-secondary-900 text-3xl lg:text-5xl ml-6">
                    {title}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
