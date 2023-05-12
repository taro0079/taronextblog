'use client'
import { Box } from '@/app/blog/components/PageContent'
import { Col, Container, Row, Text } from '@nextui-org/react'
import Link from 'next/link'

const HomeContent = () => {
  return (
    <Container justify="center" alignItems="center" alignContent="center">
      <Col>
        <Row justify="center" align="center">
          <Text h1>Stoichiometric</Text>
        </Row>
        <Row justify="center" align="center">
          <Text>ようこそ！awesometaroのページです！</Text>
        </Row>
        <Row justify="center" align="center" css={{ py: '$8' }}>
          <Row gap={4} css={{ maxWidth: 'max-content' }}>
            <Col>
              <Row justify="center">
                <Link href="https://github.com/taro0079">Github</Link>
              </Row>
            </Col>
            <Col>
              <Row justify="center">
                <Link href="https://twitter.com/jirorian_tele">Twitter</Link>
              </Row>
            </Col>
          </Row>
        </Row>
      </Col>
    </Container>
  )
}

export default HomeContent
