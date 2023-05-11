import PageContent from "./components/PageContent"

const getArticles = async () => {
  const data = await fetch("https://taroblog.microcms.io/api/v1/blog", {
    headers: {
      "X-MICROCMS-API-KEY": `{process.env.X-MICROCMS-API-KEY}`,
      "Content-Type": "application/json"
    }
  })
}
const Page = () => {
  return <PageContent />
}
export default Page
