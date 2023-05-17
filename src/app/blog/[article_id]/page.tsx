import { utcToZonedTime } from "date-fns-tz";
import parse from "react-html-parser";
import { Article } from "../page";
import CodeBlocked from "../components/CodeBlocked";

const getArticle = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": `${process.env.X_MICROCMS_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data from microCMS");
  }
  const json = await res.json();
  return json as Article;
};
const Page = async (ctx: { params: { article_id: string } }) => {
  const articleId = ctx.params.article_id;
  const url = "https://taroblog.microcms.io/api/v1/blog/" + articleId;

  const prearticle = await getArticle(url);
  const article = CodeBlocked(prearticle);
  return (
    <div className="justify-center">
      <h2 className="md:hidden">{article.title}</h2>
      <h1 className="hidden md:flex">{article.title}</h1>
      <p>
        投稿日:{" "}
        {utcToZonedTime(
          new Date(article.publishedAt),
          "Asia/Tokyo"
        ).toLocaleString("ja-JP")}
      </p>
      <div className="justify-center">
        <div>{parse(article.body)}</div>
      </div>
    </div>
  );
};

export default Page;
