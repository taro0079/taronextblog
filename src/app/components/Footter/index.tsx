"use client";

import { Container, Row, Text } from "@nextui-org/react";

const Footter = () => {
  const date = new Date();
  return (
    <Container>
      <Row justify="center">
        <Text color="grayfooter">created by T. M. at {date.getFullYear()}</Text>
      </Row>
    </Container>
  );
};
export default Footter;
