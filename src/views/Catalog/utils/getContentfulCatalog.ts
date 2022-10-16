import { getContentfulClient } from "../../../utils/contentful";
import { CatalogCard } from "../types";

export type GetCatalogProps = {
  page?: number;
  limit?: number;
  category?: string;
};

const getContentfulCatalog = async ({ page = 0, category, limit }: GetCatalogProps) => {
  const client = getContentfulClient();

  try {
    const { items, total } = await client.getEntries<CatalogCard>({
      content_type: "service",
      order: "sys.createdAt",
      limit,
      skip: page && limit ? page * limit : 0,
      "fields.category": category,
    });

    return {
      items: items.map((item) => ({
        ...item.fields,
        id: item.sys.id,
      })),
      totalCount: total,
    };
  } catch (error) {
    console.error(error);
  }
};

export default getContentfulCatalog;
