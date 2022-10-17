import { GetServerSideProps } from "next";
import { IAppProps } from "../types";
import getContentfulArticle from "../utils/getContentfulArticle";

const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug;
  if (!slug || typeof slug !== "string") return { notFound: true };
  const response = await getContentfulArticle({ slug });
  if (!response) return { notFound: true };

  const props: IAppProps = { article: response };
  return { props };
};
export default getServerSideProps;
