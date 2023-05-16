import { Article } from "@/app/blog/page";
import { utcToZonedTime } from "date-fns-tz";
import Link from "next/link";

const extractHeader = (text: string) => {
  return text.replace(/(<([^>]+)>)|&nbsp;/gi, "");
};

const BlogPost = ({ articles }: { articles: Article[] }) => {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {articles.map((article) => {
          return (
            <Link key={article.id} href={`blog/${article.id}`}>
              <div className="py-8">
                <div>{article.title}</div>
                <div>
                  投稿日:{" "}
                  {utcToZonedTime(
                    new Date(article.publishedAt),
                    "Asia/Tokyo"
                  ).toLocaleString("ja-JP")}
                </div>
                <div>
                  {extractHeader(article.body).substring(0, 200) + "..."}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
