import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivdatt Bibhar </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am a Java developer.
            <br />
            I have completed B.Tech in Computer Science & Engineering from GCEK, Bhawanipatna.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Live Love Learn!"{" "}
          </p>
          <footer className="blockquote-footer">Shivdatt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
