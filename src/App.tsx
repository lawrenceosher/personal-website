import "./App.css";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { Navbar, Nav } from "react-bootstrap";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LuIdCard } from "react-icons/lu";
import { RiBriefcase2Line, RiContactsLine } from "react-icons/ri";

function App() {
  return (
    <>
      <Navbar
        id="header"
        className="flex-fill justify-content-end"
        sticky="top"
      >
        <Nav className="fs-3 me-2">
          <Nav.Link
            href="#about"
            className="header-item me-2 d-flex align-items-center"
          >
            <LuIdCard className="me-2" />
            About
          </Nav.Link>
          <Nav.Link
            href="#experience"
            className="header-item me-2 d-flex align-items-center"
          >
            <RiBriefcase2Line className="me-2" />
            Experience
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className="header-item me-2 d-flex align-items-center"
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
      </Navbar>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
