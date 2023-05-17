import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";

export type BlogData = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};
export type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  revisedAt: string;
};

const getPreArticleData = async () => {
  const data = await fetch("https://taroblog.microcms.io/api/v1/blog", {
    headers: {
      "X-MICROCMS-API-KEY": `${process.env.X_MICROCMS_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  if (!data.ok) {
    throw new Error("Failed to fetch data from microCMS");
  }
  const json = await data.json();
  return json as BlogData;
};

const Page = async () => {
  const preData = await getPreArticleData();
  const articles = preData.contents;
  const totalCount = preData.totalCount;
  const limit = preData.limit;
  return (
    <div>
      <BlogPost articles={articles} />
      <Pagination totalCount={totalCount} limit={limit} />
    </div>
  );
};
export default Page;
