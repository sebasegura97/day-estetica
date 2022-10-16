import { GetServerSideProps } from "next";
import { QUERY_LIMIT } from "../constants";
import { IAppProps } from "../types";
import getContentfulCatalog from "../utils/getContentfulCatalog";

const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const category =
    typeof query.category === "string" ? query.category : undefined;

  const response = await getContentfulCatalog({
    limit: QUERY_LIMIT,
    category,
  });

  const props: IAppProps = {
    services: response?.items || [],
    totalCount: response?.totalCount || 0,
    category: category || null,
  };

  return {
    props,
  };
};
export default getServerSideProps;
