import React from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <span className="tagline">welcome to my portfolio</span>
          <h1>
            {`Hi I'm mukesh`} <span className="wrap">Web developer</span>
          </h1>
          <p>This is basic about web developer!</p>
          <button onClick={() => console.log("connect")}>
            Let's connect <ArrowRightCircle size={25} />
          </button>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImage} alt="Header Img"></img>
        </Col>
      </Row>
    </section>
  );
};
