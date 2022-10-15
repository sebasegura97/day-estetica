import { createClient } from "contentful";
import { CatalogCard, IAppProps } from "../types";

const getServerSideProps = async () => {
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID || "",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACESS_TOKEN || "",
  });
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  const response = await client.getEntries<CatalogCard>({
    content_type: "service",
    limit: 10,
    order: "sys.createdAt",
  });
  const items = response.items.map((item) => ({ ...item.fields, id: item.sys.id }));

  const props: IAppProps = {
    services: items,
  };

  return {
    props
  };
};
export default getServerSideProps;
