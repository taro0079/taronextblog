import { load } from "cheerio";
import { Article } from "../page";
import hljs from "highlight.js";

const CodeBlocked = (article: Article) => {
  const $ = load(article.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  article.body = $.html();
  return article;
};

export default CodeBlocked;
