import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Projects/e-commerce .png";
import Solutioncom from "../../Assets/Projects/Solutioncom.png";
import blogs from "../../Assets/Projects/blogs.png";

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
        <div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Solutioncom}
                isBlog={false}
                title="Solution.com"
                description="Boost your team’s alignment, efficiency, and productivity by customizing any workflow to fit your needs."
                ghLink="https://github.com/lokeshchoudharyprogrammer/superficial-point-8316"
                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
              />
            </Col>

          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Ecommerce}
                isBlog={false}
                title="Zimika E-commerce "
                description="E-commerce is the buying and selling of goods and services online.."
                ghLink="https://github.com/lokeshchoudharyprogrammer/ecommerce-app"
                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
              />
            </Col>

          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={blogs}
                isBlog={false}
                title="Blog Application"
                description="A blog app is a application designed to facilitate the creation, publication, and management of blog content."
                ghLink="https://github.com/lokeshchoudharyprogrammer/ecommerce-app"
                demoLink="https://unrivaled-tulumba-195798.netlify.app/"
              />
            </Col>

          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
