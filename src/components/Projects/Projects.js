import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moshop from "../../Assets/Projects/moshop1.png";
import usermanagement from "../../Assets/Projects/usermanagementsystem1.png";
import incentivemanagement from "../../Assets/Projects/incentivemanagement1.png";
import bookbank from "../../Assets/Projects/BookBank1.png";
import coursezilla from "../../Assets/Projects/coursezilla1.png";

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
              imgPath={incentivemanagement}
              isBlog={false}
              title="Incentive Management Module"
              description="The Incentive Management Module is a Java-based project developed for a banking organization. It automates and streamlines the calculation and management of incentives for sales performance, providing transparency and efficiency in the incentive calculation process. The project uses Spring MVC for the web framework, Hibernate for ORM, Lombok for code simplification, and JSP for view templates."
              ghLink="https://github.com/shivdatt23/incentive-management-module"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursezilla}
              isBlog={false}
              title="CourseZilla"
              description="The Course Application is a full-stack web application developed to manage courses. It allows users to perform CRUD (Create, Read, Update, Delete) operations on courses, providing a user-friendly interface for course management.

              The frontend of the application is built using React, a JavaScript library for building user interfaces, while the backend is developed using Spring Boot, a Java-based framework for building robust and scalable applications."
              ghLink="https://github.com/shivdatt23/CoursesApplication_coursezilla"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookbank}
              isBlog={false}
              title="BookBank"
              description="BookBank is a web application which stores the details of all the books. It follows MVC architechture and is based to perform CRUD operation. It is developed using SpringBoot, Spring Data JPA, MySQL and Thymeleaf. Tools used : Intellij IDEA , WorkBench, Google Chrome (web browser)."
              ghLink="https://github.com/shivdatt23/BookBank"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moshop}
              isBlog={false}
              title="MOSHOP"
              description="This Online Shopping Project is a web-based application developed using the Spring MVC framework. It provides a platform for users to browse, search, and purchase products online. The project follows the Model-View-Controller (MVC) architectural pattern, ensuring a modular and organized structure."
              ghLink="https://github.com/shivdatt23/MOSHOP"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usermanagement}
              isBlog={false}
              title="User Management System"
              description="This RESTful API provides endpoints for basic CRUD operations on a user management system. It allows you to perform operations like creating, reading, updating, and deleting user information. "
              ghLink="https://github.com/shivdatt23/user-management-system"
              demoLink="#"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
