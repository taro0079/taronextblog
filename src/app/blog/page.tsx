import PageContent from './components/PageContent'

export type Article = {
  id: string
  title: string
  body: string
  publishedAt: string
  revisedAt: string
}

const getArticles = async () => {
  const data = await fetch('https://taroblog.microcms.io/api/v1/blog', {
    headers: {
      'X-MICROCMS-API-KEY': `${process.env.X_MICROCMS_API_KEY}`,
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  })
  if (!data.ok) {
    throw new Error('Failed to fetch data from microCMS')
  }
  const json = await data.json()
  return json['contents'] as Article[]
}

const Page = async () => {
  const articles = await getArticles()
  return <PageContent articles={articles} />
}
export default Page
