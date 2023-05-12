import ContentComponent from '../components/ContentComponent'
import { Article } from '../page'

const getArticle = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      'X-MICROCMS-API-KEY': `${process.env.X_MICROCMS_API_KEY}`,
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data from microCMS')
  }
  const json = await res.json()
  return json as Article
}
const Page = async (ctx: { params: { article_id: string } }) => {
  const articleId = ctx.params.article_id
  const url = 'https://taroblog.microcms.io/api/v1/blog/' + articleId

  const article = await getArticle(url)
  return <ContentComponent article={article} />
}

export default Page
