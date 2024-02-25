import { NextApiRequest, NextApiResponse } from "next"
import { BlogData } from "../../blog/getPreArticleData"
import { NextRequest } from "next/server"

const fetcher = async (query: string) => {
    const url = "https://taroblog.microcms.io/api/v1/blog?q=" + query

    const res = await fetch(url, {
        headers: {
          "X-MICROCMS-API-KEY": `${process.env.X_MICROCMS_API_KEY}`,
          "Content-Type": "application/json"
        },
        next: { revalidate: 60 }
      })
      if (!res.ok) {
        throw new Error("Failed to fetch data from microCMS")
      }
      const json = await res.json()
      return json as BlogData
}


export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query')
    if (!query) {
        return { status: 400, body: { message: "query is required" } }
    }
    const data = await fetcher(query)
    return Response.json(data)
}
