import { Card, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="blue-section"
      className="d-flex flex-column left-0 right-0 p-3"
    >
      <h2
        id="projects"
        className="display-5 fw-bold section-header m-0 p-0 d-flex align-items-center"
      >
        <LiaProjectDiagramSolid className="me-3 text-white fw-normal" />
        Projects
      </h2>

      <Container className="p-0 m-0">
        <Row className="p-0 mt-3 d-flex gy-4">
          {projects.map((proj, index) => {
            return (
              <Col key={index} lg>
                <Card className="bg-black border border-2">
                  <Card.Img variant="top" src={proj.image} />
                  <Card.Body className="text-white">
                    <Card.Title>{proj.name}</Card.Title>
                    <Card.Text>{proj.description}</Card.Text>
                    <div className="d-flex">
                      <a
                        className="btn btn-outline-light me-2"
                        href={proj.sourceCodeLink}
                        target="_blank"
                      >
                        Source Code
                      </a>
                      {proj.deployedSiteLink && (
                        <a
                          className="btn btn-outline-light me-2"
                          href={proj.deployedSiteLink}
                          target="_blank"
                        >
                          Deployed Site
                        </a>
                      )}
                      {proj.demoLink && (
                        <a
                          className="btn btn-outline-light"
                          href={proj.demoLink}
                          target="_blank"
                        >
                          Video Demo
                        </a>
                      )}
                    </div>

                    <Container className="d-flex mt-3 p-0 flex-wrap">
                      {proj.technologies.map((tech, index) => {
                        return (
                          <span
                            key={index}
                            className="border border-2 p-2 rounded light-blue-border me-2 my-2"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
