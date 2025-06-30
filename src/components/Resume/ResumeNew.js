import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import resumePdf from "../../resume(1).pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumePdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume" style={{ marginTop: "30px" }}>
          <div style={{ 
            width: "100%", 
            display: "flex", 
            justifyContent: "center",
            padding: "20px"
          }}>
            <iframe
              src={resumePdf}
              width="100%"
              height="600px"
              style={{ 
                border: "2px solid #8a49a8", 
                borderRadius: "10px",
                maxWidth: "900px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
              }}
              title="Resume Preview"
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
