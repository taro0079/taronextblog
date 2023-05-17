import "highlight.js/styles/tokyo-night-dark.css";
import { load } from "cheerio";
import hljs from "highlight.js";
import { Article } from "../getPreArticleData";

const CodeBlocked = (article: Article) => {
  const $ = load(article.body, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  article.body = $.html();
  return article;
};

export default CodeBlocked;
