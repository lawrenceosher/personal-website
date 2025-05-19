import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import { RiContactsLine, RiPagesLine } from "react-icons/ri";

import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="d-flex flex-column left-0 right-0 p-3">
      <h2
        id="contact"
        className="display-5 fw-bold section-header d-flex align-items-center justify-content-end"
      >
        <RiContactsLine className="me-3 text-white fw-normal" />
        Contact
      </h2>

      <div className="d-flex flex-column">
        <a
          id="contact-link"
          className="d-flex align-items-center fs-1 text-decoration-none text-white m-0 p-0"
          href="mailto:osher.lawrence@gmail.com"
        >
          <MdOutlineEmail className="me-2 mt-1" />{" "}
          <span>osher.lawrence@gmail.com</span>
        </a>

        <a
          id="contact-link"
          className="d-flex align-items-center fs-1 text-decoration-none text-white m-0 p-0"
          href="https://www.linkedin.com/in/losher/"
          target="_blank"
        >
          <CiLinkedin className="me-2 mt-1" /> <span>losher</span>
        </a>

        <a
          id="contact-link"
          className="d-flex align-items-center fs-1 text-decoration-none text-white m-0 p-0"
          href="https://github.com/lawrenceosher"
          target="_blank"
        >
          <FiGithub className="me-2 mt-1" /> <span>lawrenceosher</span>
        </a>

        <a
          id="contact-link"
          className="d-flex align-items-center fs-1 text-decoration-none text-white m-0 p-0"
          href="https://lawrence-osher-resume.s3.us-east-2.amazonaws.com/Lawrence_Osher_Resume_v2.pdf"
          target="_blank"
        >
          <RiPagesLine className="me-2 mt-1" />
          Resume
        </a>
      </div>

      <a id="top" href="#landing" className="mt-5 text-center text-decoration-none text-white">J.A.R.V.I.S. take me back to the top</a>

      <p className="mt-2 text-center">
        <FaRegCopyright className="me-1 mb-1" /> Lawrence Osher 2025
      </p>
    </div>
  );
}
