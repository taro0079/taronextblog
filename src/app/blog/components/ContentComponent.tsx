"use client";
import { Article } from "../page";
import parse from "react-html-parser";
import { utcToZonedTime } from "date-fns-tz";

const ContentComponent = ({ article }: { article: Article }) => {
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

export default ContentComponent;
