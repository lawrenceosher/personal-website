import { Nav, Navbar } from "react-bootstrap";
import { RiContactsLine, RiBriefcase2Line } from "react-icons/ri";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { LuIdCard } from "react-icons/lu";

import "../App.css";

export default function Header() {
  return (
    <header className="d-flex flex-column">
      <Navbar className="flex-fill justify-content-end" sticky="top">
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

      <h1 id="name" className="fw-bold m-2 display-3">
        Lawrence Osher
      </h1>
      <h2 id="title" className="mx-2">
        Full-Stack Software Engineer
      </h2>
    </header>
  );
}
