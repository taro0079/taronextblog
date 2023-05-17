import id from "date-fns/locale/id";
import { BlogData } from "../page";
import BlogPost from "@/app/components/BlogPost";
import Pagination from "@/app/components/Pagination";

const getOffsetBlogData = async (id: number, limit: number) => {
  const offset = (id - 1) * limit;
  const data = await fetch(
    "https://taroblog.microcms.io/api/v1/blog?offset=" + offset,
    {
      headers: {
        "X-MICROCMS-API-KEY": `${process.env.X_MICROCMS_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!data.ok) {
    throw new Error("Failed to fetch data from microCMS");
  }
  const json = await data.json();
  return json as BlogData;
};

const Page = async (ctx: { params: { id: number } }) => {
  const preData = await getOffsetBlogData(ctx.params.id, 10);
  const totalCount = preData.totalCount;
  const limit = preData.limit;
  const articles = preData.contents;
  return (
    <div>
      <BlogPost articles={articles} />
      <Pagination totalCount={totalCount} limit={limit} />
    </div>
  );
};

export default Page;