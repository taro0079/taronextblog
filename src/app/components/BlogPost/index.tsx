import { Article } from "@/app/blog/getPreArticleData";
import { utcToZonedTime } from "date-fns-tz";
import Link from "next/link";

const extractHeader = (text: string) => {
  return text.replace(/(<([^>]+)>)|&nbsp;/gi, "");
};

const BlogPost = ({ articles }: { articles: Article[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-10 font-bold">Blog</h1>
      <div className="flex flex-col gap-4">
        {articles.map((article) => {
          return (
            <Link key={article.id} href={`blog/${article.id}`}>
              <div className="border shadow p-4 rounded-lg">
                <div style={{ borderBottomWidth: "1px" }} className="py-2">
                  <h1 className="text-xl font-bold">{article.title}</h1>
                  <div className="text-sm">
                    投稿日:{" "}
                    {utcToZonedTime(
                      new Date(article.publishedAt),
                      "Asia/Tokyo"
                    ).toLocaleString("ja-JP")}
                  </div>
                </div>
                <p className="text-sm mt-4 break-all">
                  {extractHeader(article.body).substring(0, 200) + "..."}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
