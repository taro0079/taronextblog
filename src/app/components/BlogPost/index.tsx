"use client"
import { Article } from "@/app/blog/getPreArticleData"
import { utcToZonedTime } from "date-fns-tz"
import Link from "next/link"
import SearchBar from "../SearhBar"
import { ChangeEvent, useEffect, useState } from "react"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"

const extractHeader = (text: string) => {
  return text.replace(/(<([^>]+)>)|&nbsp;/gi, "")
}
const BlogFetcher = async (searchData: string) => {
  const url = "/api/search?query=" + searchData

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data from microCMS")
  }
  const json = await res.json()
  return json
}

const BlogPost = ({ articles }: { articles: Article[] }) => {
  const [searchData, setSearchData] = useState<string | null>(null)
  const [artclieData, setArticleData] = useState<Article[] | null>(null)
  const onSearch = async () => {
    if (!searchData) {
      return
    }
    const data = await BlogFetcher(searchData)
    setArticleData(data.contents)
    return data
  }
  useEffect(() => {
    setArticleData(articles)
  }, [])

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl py-8 font-bold flex-col flex text-center">
        Blog
      </h1>

      <div className="flex gap-4 items-center py-8">
        <Input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchData(e.target.value)
          }
        />
        <Button color="primary" onClick={onSearch}>
          SEARCH
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {artclieData?.map((article) => {
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
          )
        })}
      </div>
    </div>
  )
}

export default BlogPost
