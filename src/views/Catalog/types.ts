import { Asset } from "contentful";

export type CatalogCard = {
  id: string;
  title: string;
  slug: string;
  category: string;
  heroImage: Asset;
  shortDescription: string;
};

export type IAppProps = {
  services: CatalogCard[];
  totalCount: number;
  category?: string | null;
};
