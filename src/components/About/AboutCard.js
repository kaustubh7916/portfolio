import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Kaustubh Pukale </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently Studying Btech in (Artificial Intelligence and Data Science)  at VESIT Mumbai University.
            <br />
          </p>
          

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
