import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple"> Huda  Hamid   </span>
            from <span className="purple"> Sulymaniah, Iraq.</span>
            <br />I am a junior Frontend web developer 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn new technologies that make my code more efficent"{" "}
          </p>
          <footer className="blockquote-footer">Huda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
