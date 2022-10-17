import Image from "next/image";
import React from "react";
import { CatalogDetailArticle } from "../../types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export type MainProps = {
  article: CatalogDetailArticle;
};

const Main: React.FC<MainProps> = ({ article }) => {
  const rawRichTextField = article.fullDescription;

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="font-body text-xl my-2 md:my-4">{children}</p>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="font-h4 mt-4 md:mt-6">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="font-h5 mt-2 md:mt-4">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="font-h6 mt-2 md:mt-4">{children}</h6>
      ),
    },
  };
  const richText = documentToReactComponents(rawRichTextField, options);

  return (
    <div className="container md:max-w-3xl mx-auto py-24 px-4 pb-6 md:px-8 lg:py-36 sm:flex items-center flex-col">
      <h1 className="font-h2 textp-center mb-4 ">{article.title}</h1>
      <div className="w-full h-64 sm:h-96 sm:w-8/12  shrink-0 relative rounded-xl overflow-hidden my-4">
        <Image
          priority
          src={`https://${article.heroImage.fields.file.url}`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>{richText}</div>
    </div>
  );
};

export default Main;
