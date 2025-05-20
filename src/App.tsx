import "./App.css";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LuIdCard } from "react-icons/lu";
import { RiBriefcase2Line, RiContactsLine, RiPagesLine } from "react-icons/ri";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="header" sticky="top">
        <Container className="m-0 p-0 d-flex">
          <Navbar.Toggle className="custom-toggler" />
          <Navbar.Collapse>
            <Nav className="fs-3 me-2">
              <Nav.Link
                href="#about"
                className="header-item d-flex align-items-center"
              >
                <LuIdCard className="me-2" />
                About
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className="header-item d-flex align-items-center"
              >
                <RiBriefcase2Line className="me-2" />
                Experience
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className="header-item d-flex align-items-center"
              >
                <LiaProjectDiagramSolid className="me-2" />
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="header-item d-flex align-items-center"
              >
                <RiContactsLine className="me-2" />
                Contact
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto fs-3 me-2">
              <Nav.Link
                href="https://lawrence-osher-resume.s3.us-east-2.amazonaws.com/Lawrence_Osher_Resume_v2.pdf"
                target="_blank"
                className="header-item d-flex align-items-center"
              >
                <RiPagesLine className="me-2" />
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-column">
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
