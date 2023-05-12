"use client";
import { Article } from "../page";
import parse from "react-html-parser";
import { Text, Row, Col, Container } from "@nextui-org/react";
import { utcToZonedTime } from "date-fns-tz";

const ContentComponent = ({ article }: { article: Article }) => {
  return (
    <Container justify="center">
      <Col>
        <Row justify="center">
          <Text h2 className="md:hidden">
            {article.title}
          </Text>
          <Text h1 className="hidden md:flex">
            {article.title}
          </Text>
        </Row>
        <Row justify="center">
          <Text>
            投稿日:{" "}
            {utcToZonedTime(
              new Date(article.publishedAt),
              "Asia/Tokyo"
            ).toLocaleString("ja-JP")}
          </Text>
        </Row>
        <Row justify="center" css={{ py: "$8" }}>
          <div>{parse(article.body)}</div>
        </Row>
      </Col>
    </Container>
  );
};

export default ContentComponent;
