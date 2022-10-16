import { ContentfulClientApi, createClient } from "contentful";

let client: ContentfulClientApi | undefined;

export const getContentfulClient = () => {
  if (client) return client;
  client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACESS_TOKEN || "",
  });
  return client;
};
