"use client"
import { Container, Row, Text } from "@nextui-org/react"
import { styled } from "@nextui-org/react"

const PageContent = () => {
  return (
    <Container>
      <Row justify="center" align="center">
        <Box
          css={{
            mt: "$8"
          }}
        >
          <Text h1>Blog</Text>
        </Box>
      </Row>
    </Container>
  )
}

export const Box = styled("div", {
  boxSizing: "border-box"
})

export default PageContent
