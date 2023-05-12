'use client'
import BlogPost from '@/app/components/BlogPost'
import { Container, Row, Text } from '@nextui-org/react'
import { styled } from '@nextui-org/react'
import { Article } from '../page'

const PageContent = ({ articles }: { articles: Article[] }) => {
  return (
    <Container>
      <Row justify="center" align="center">
        <Box
          css={{
            mt: '$8'
          }}
        >
          <Text h1>Blog</Text>
        </Box>
      </Row>
      <Row>
        <BlogPost articles={articles} />
      </Row>
    </Container>
  )
}

export const Box = styled('div', {
  boxSizing: 'border-box'
})

export default PageContent
