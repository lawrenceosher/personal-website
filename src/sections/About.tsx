import { LuIdCard } from "react-icons/lu";
import "../App.css";

export default function About() {
  return (
    <section id="blurb" className="d-flex left-0 right-0 flex-column p-3">
      <h2 id="about" className="display-5 fw-bold section-header d-flex align-items-center">
        <LuIdCard className="me-3 text-white fw-normal" />
        About Me
      </h2>

      <div className="d-flex mb-0">
        <p className="w-50 fs-4 mt-2 me-5 mb-0">
          Hey! I'm Lawrence Osher! I'm an engineer focused on creating
          applications and products with users at the forefront of every
          decision. I care about making peoples' lives easier through code,
          accomplishing this through versatility across the stack.

          <p className="mt-3">
            I'm interested in full-stack development, with a preference for
            frontend as I love seeing how design decisions impact the user
            experience. As a recent college graduate, I am looking for software
            engineering roles, and I am available to start immediately.
          </p>
        </p>
        <p className="w-50 fs-4 mt-2">
          I graduated from Northeastern University in May 2025 with a Bachelor's
          Degreee in Computer Science and a Human-Centered Computing
          Concentration. I'm based in Long Island, New York, and I have previous
          experience as a Software Development Intern with HealthStream and a
          Software Engineer Co-op with Chewy. 
          
          <p className="mt-3">In my free time, I love reading
          comics, rooting for my favorite sports teams, collecting jerseys, and
          watching documentaries.</p>
          
          
        </p>
      </div>

      <hr className="mt-0" />

      <h5 className="mt-0">
        While I enjoy learning new technologies, the ones I'm currently most
        comfortable with are:
      </h5>
      <div className="d-flex">
        <ul id="technology-list" className="w-50 fs-5 mt-2 me-5">
          <li>React</li>
          <li>Java</li>
          <li>JavaScript/TypeScript</li>
          <li>Node.js</li>
        </ul>

        <ul id="technology-list" className="w-50 fs-5 mt-2 me-5">
          <li>Spring Framework</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Bootstrap CSS</li>
        </ul>
      </div>
    </section>
  );
}
