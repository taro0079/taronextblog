'use client'
import { Article } from '@/app/blog/page'
import { Card, Grid, Text } from '@nextui-org/react'
import { utcToZonedTime } from 'date-fns-tz'
import Link from 'next/link'

const extractHeader = (text: string) => {
  return text.replace(/(<([^>]+)>)|&nbsp;/gi, '')
}

const BlogPost = ({ articles }: { articles: Article[] }) => {
  return (
    <div>
      {articles.map((article) => {
        return (
          <Link key={article.id} href={`blog/${article.id}`}>
            <Card css={{ my: '$8' }}>
              <Card.Header>
                <Grid.Container>
                  <Grid xs={12}>
                    <Text h3>{article.title}</Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text>
                      投稿日: {utcToZonedTime(new Date(article.publishedAt), 'Asia/Tokyo').toLocaleString('ja-JP')}
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: '$2' }}>
                <Text>{extractHeader(article.body).substring(0, 200) + '...'}</Text>
              </Card.Body>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}

export default BlogPost
