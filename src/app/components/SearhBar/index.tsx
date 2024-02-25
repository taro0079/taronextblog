"use client"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { headers } from "next/dist/client/components/headers"
import { ChangeEvent, useState } from "react"

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

const SearchBar = () => {
  const [searchData, setSearchData] = useState<string | null>(null)
  const onSearch = async () => {
    if (!searchData) {
      return
    }
    const data = await BlogFetcher(searchData)
    return data
  }
  return (
    <div>
      <Input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchData(e.target.value)
        }
      />
      <Button color="primary" onClick={onSearch}>
        検索
      </Button>
    </div>
  )
}

export default SearchBar
