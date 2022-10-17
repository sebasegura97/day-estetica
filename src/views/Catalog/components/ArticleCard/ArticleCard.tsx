import Image from "next/image";
import React from "react";
import { ArticleCardProps } from "./types";

const ArticleCard: React.FC<ArticleCardProps> = ({ service }) => {
  return (
    <article className="w-full flex flex-col rounded-2xl bg-dark-50 cursor-pointer">
      <div className="relative w-full h-52 rounded-t-2xl overflow-hidden mr-4 shrink-0">
        <Image
          alt={service.title}
          src={`https:${service.heroImage.fields.file.url}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex h-full justify-between flex-col items-start p-4  ">
        <div>
          <h3 className="font-serif text-2xl font-bold mt-2 mb-1 ">
            {service.title}
          </h3>
          <p className="font-body">{service.shortDescription}</p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
