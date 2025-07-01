import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="OSPI"
              description="An online shopping website that uses machine learning to predict if a visitor is likely to make a purchase, based on how they interact with the site. By analyzing user session data, the system provides store owners with valuable insights to improve sales and customer experience. Even if you're not a tech expert, think of it as a smart assistant that helps businesses understand and serve their customers better."
              ghLink="https://github.com/kaustubh7916/ospi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fake News Detector"
              description="A machine learning-based fake news detection system built with Python. Uses Logistic Regression classifier trained on the LIAR dataset to classify news articles as true or false with probability scores. Features include text preprocessing, TF-IDF vectorization, and web interface for real-time news verification."
              ghLink="https://github.com/kaustubh7916/fake-news-detector.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stock Price Prediction"
              description="A comprehensive time series analysis project for stock price prediction using multiple forecasting models. Implements Moving Average, ARIMA, and SARIMA models on NSE-TATAGLOBAL dataset. Features include data preprocessing, stationarity testing, and automated model parameter selection for accurate financial forecasting."
              ghLink="https://github.com/kaustubh7916/homeds.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
