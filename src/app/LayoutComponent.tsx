"use client";
import { Container, Row } from "@nextui-org/react";
import Nav from "./components/Navbar";
import Footter from "./components/Footter";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <Container>
        <Row>{children}</Row>
        <Row>
          <Footter />
        </Row>
      </Container>
    </div>
  );
};

export default LayoutComponent;
