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
  // Fix scroll issue on mobile layout
  // when the navbar is collapsed and the user clicks on a link
  const handleNavClick = (id: string) => {
    // Close navbar
    const toggleButton = document.querySelector(
      ".navbar-toggler"
    ) as HTMLElement;
    if (toggleButton && getComputedStyle(toggleButton).display !== "none") {
      toggleButton.click(); // Triggers collapse
    }

    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300); // Wait for collapse animation to finish before scrolling
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="header" sticky="top">
        <Container className="m-0 p-0 d-flex">
          <Navbar.Toggle className="custom-toggler" />
          <Navbar.Collapse>
            <Nav className="fs-3 me-2">
              <Nav.Link
                onClick={() => handleNavClick("about")}
                className="header-item d-flex align-items-center"
              >
                <LuIdCard className="me-2" />
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("experience")}
                className="header-item d-flex align-items-center"
              >
                <RiBriefcase2Line className="me-2" />
                Experience
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("projects")}
                className="header-item d-flex align-items-center"
              >
                <LiaProjectDiagramSolid className="me-2" />
                Projects
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavClick("contact")}
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
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
