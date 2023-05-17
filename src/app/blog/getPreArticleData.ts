export type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  revisedAt: string;
};
export type BlogData = {
  contents: Article[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const getPreArticleData = async () => {
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
