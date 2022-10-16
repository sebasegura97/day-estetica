
import React from "react";
import { CATEGORIES } from "./constants";

const Catalog = () => {
  return (
    <section className="py-12 lg:py-32 bg-secondary-50">
      <div className="container text-center mx-auto">
        <h3 className="font-h1 mb-8 lg:mb-24 text-secondary-900">Servicios</h3>
        <h4 className="font-h5 mb-8 px-8 lg:mb-24 text-secondary-900 max-w-5xl m-auto">Tenemos un catalogo diseñado por expertos y el mejor acompañamiento para que logres tus objetivos.</h4>
        <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2  gap-y-10 sm:gap-12 lg:gap-24 w-fit mx-auto">
          {CATEGORIES.map(({ icon, href, title }) => {
            return (
              <a
                key={`category-icon-${href}`}
                className={"flex items-center"}
                href={href}
              >
                <div className="w-16 h-16 lg:w-32 lg:h-32 rounded-full relative">{icon}</div>
                <span className="font-sans text-secondary-900 text-3xl lg:text-5xl ml-6">
                  {title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
