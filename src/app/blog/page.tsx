import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";
import { getPreArticleData } from "./getPreArticleData";

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
