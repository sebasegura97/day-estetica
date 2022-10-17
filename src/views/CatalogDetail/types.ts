import { Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

export type CatalogDetailArticle = {
  id: string;
  title: string;
  slug: string;
  category: string;
  heroImage: Asset;
  shortDescription: string;
  updatedAt: string;
  fullDescription: Document;
};

export type IAppProps = {
  article: CatalogDetailArticle;
};
