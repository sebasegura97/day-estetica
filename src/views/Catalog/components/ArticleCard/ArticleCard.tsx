import Image from "next/image";
import React from "react";
import { ArticleCardProps } from "./types";

const ArticleCard: React.FC<ArticleCardProps> = ({ service }) => {
  return (
    <article className="w-full flex flex-col rounded-2xl bg-secondary-50 bg-opacity-25" >
      <div className="relative w-full h-52 rounded-t-2xl overflow-hidden mr-4 shrink-0">
        <Image
          alt={service.title}
          src={`https:${service.heroImage.fields.file.url}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex h-full justify-between flex-col items-start p-4 md:p-6">
        <div>
          <h3 className="font-serif text-2xl font-bold mt-4 mb-1 ">
            {service.title}
          </h3>
          <p className="font-body">{service.shortDescription}</p>
        </div>

        <button className="btn-secondary-sm float-right mt-4 self-end">
          Ver mas
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;
