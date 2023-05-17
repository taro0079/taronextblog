import { utcToZonedTime } from "date-fns-tz";
import parse from "react-html-parser";
import CodeBlocked from "../components/CodeBlocked";
import { Article, getPreArticleData } from "../getPreArticleData";
import "./blog.css";

export async function generateStaticParams() {
  const data = await getPreArticleData();
  const articles = data.contents;
  const paths = articles.map((article) => {
    return {
      article_id: article.id,
    };
  });
  return [...paths];
}

const getArticle = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": `${process.env.X_MICROCMS_API_KEY}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
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
    <div className="w-full md:w-2/3">
      <div className="mb-8 pb-2" style={{ borderBottomWidth: "1px" }}>
        <h2 className="md:hidden">{article.title}</h2>
        <h1 className="hidden md:flex text-3xl">{article.title}</h1>
        <p>
          投稿日:{" "}
          {utcToZonedTime(
            new Date(article.publishedAt),
            "Asia/Tokyo"
          ).toLocaleString("ja-JP")}
        </p>
      </div>
      <div className="justify-center blog-content">
        <div>{parse(article.body)}</div>
      </div>
    </div>
  );
};

export default Page;
