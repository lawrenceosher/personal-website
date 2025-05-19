import { Card, Container } from "react-bootstrap";
import "../App.css";
import { LiaProjectDiagramSolid } from "react-icons/lia";

export default function Projects() {
  return (
    <section id="blurb" className="d-flex flex-column left-0 right-0 p-3">
      <h2
        id="projects"
        className="display-5 fw-bold section-header m-0 p-0 d-flex align-items-center"
      >
        <LiaProjectDiagramSolid className="me-3 text-white fw-normal" />
        Projects
      </h2>

      <div className="p-0 m-0">
        <div className="p-0 mt-3 d-flex">
          <Card
            style={{ width: "22rem" }}
            className="bg-black border border-2 me-4"
          >
            <Card.Img variant="top" src="/queuePage.png" />
            <Card.Body className="text-white">
              <Card.Title>UpNext</Card.Title>
              <Card.Text>
                UpNext is an all-inclusive media consumption app that allows
                users to create queues/watch lists for Movies, TV Shows, Albums,
                Books, Podcasts, and Video Games.
              </Card.Text>
              <div className="d-flex">
                <a
                  className="btn btn-outline-light me-2"
                  href="https://github.com/lawrenceosher/UpNext-web-app"
                  target="_blank"
                >
                  Source Code
                </a>
                <a
                  className="btn btn-outline-light"
                  href="https://upnextqueue.netlify.app/"
                  target="_blank"
                >
                  Deployed Site
                </a>
              </div>

              <Container className="d-flex mt-3 p-0 flex-wrap">
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  MERN
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  Bootstrap
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  TypeScript
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  JavaScript
                </span>
              </Container>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "22rem" }}
            className="bg-black border border-2 me-4"
          >
            <Card.Img variant="top" src="/nuBoard.png" />
            <Card.Body className="text-white">
              <Card.Title>NU Board</Card.Title>
              <Card.Text>
                Agile project planning tool that includes a Kanban Board, Sprint
                Planning Page, and Task Roadmap. Integrated within a 'Stack
                Overflow' clone. All project work done in the 'Project Planning'
                tab.
              </Card.Text>
              <div className="d-flex ">
                <a
                  className="btn btn-outline-light me-2"
                  href="https://github.com/lawrenceosher/spring25-team-project-spring25-project-group-309"
                  target="_blank"
                >
                  Source Code
                </a>
                <a
                  className="btn btn-outline-light"
                  href="https://cs4530-s25-309.onrender.com/"
                  target="_blank"
                >
                  Deployed Site
                </a>
              </div>

              <Container className="d-flex mt-3 p-0 flex-wrap">
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  React
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  Bootstrap
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  TypeScript
                </span>
              </Container>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "22rem" }}
            className="bg-black border border-2 me-4"
          >
            <Card.Img variant="top" src="/timeSync.png" />
            <Card.Body className="text-white">
              <Card.Title>TimeSync</Card.Title>
              <Card.Text>
                Interface that makes it easier to find available times to hang
                out through visualizing and voting upon different times. Users
                can then ask generative AI for plans based on time restrictions.
              </Card.Text>
              <a
                className="btn btn-outline-light me-2"
                href="https://github.com/lawrenceosher/TimeSync"
                target="_blank"
              >
                Source Code
              </a>

              <Container className="d-flex mt-3 p-0 flex-wrap">
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  React
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  JavaScript
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  CSS
                </span>
              </Container>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "22rem" }}
            className="bg-black border border-2 me-4"
          >
            <Card.Img variant="top" src="/imageProcessor.png" />
            <Card.Body className="text-white">
              <Card.Title>Image Processor</Card.Title>
              <Card.Text>
                Created GUI Application in Java that enabled users to load,
                blur, sharpen, filter, flip and save pictures. Visualized a
                histogram of the pixels present in the picture using Java Swing
                library.
              </Card.Text>
              <a
                className="btn btn-outline-light me-2"
                href="https://github.com/lawrenceosher/personal-projects/tree/main/ImageProcessor"
                target="_blank"
              >
                Source Code
              </a>

              <Container className="d-flex mt-3 p-0 flex-wrap">
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  Java
                </span>
                <span className="border border-2 p-2 rounded light-blue-border me-2 my-2">
                  JUnit Testing
                </span>
              </Container>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
