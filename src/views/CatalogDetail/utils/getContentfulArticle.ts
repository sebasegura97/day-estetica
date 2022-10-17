import { getContentfulClient } from "../../../utils/contentful";
import { CatalogDetailArticle } from "../types";

export type GetCatalogProps = {
  slug: string;
};

const getContentfulArticle = async ({ slug }: GetCatalogProps) => {
  const client = getContentfulClient();

  try {
    // im using getEntries instead of getEntry because the last one hast not suport to find by specific field (only by slug, i need by slug)
    const { items } = await client.getEntries<CatalogDetailArticle>({
      content_type: "service",
      limit: 1,
      "fields.slug": slug,
    });

    const article = items[0];

    return { ...article.fields, updatedAt: article.sys.updatedAt };
  } catch (error) {
    console.error(error);
  }
};

export default getContentfulArticle;
