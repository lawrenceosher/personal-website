import "../App.css";

export default function About() {
  return (
    <div id="blurb" className="d-flex flex-column left-0 right-0 p-3">
      <h2 id="about" className="display-5 fw-bold section-header">
        About Me
      </h2>

      <div className="d-flex">
        <p className="w-50 fs-5 mt-2 me-5">
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
        <p className="w-50 fs-5 mt-2">
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

      <hr />

      <h5>
        While, I enjoy learning new technologies, the ones I'm currently most
        comfortable with are:
      </h5>
      <div className="d-flex">
        <ul className="w-50 fs-5 mt-2 me-5">
          <li>React</li>
          <li>Java</li>
          <li>JavaScript/TypeScript</li>
          <li>Node.js</li>
        </ul>

        <ul className="w-50 fs-5 mt-2 me-5">
          <li>Spring Framework</li>
          <li>MongoDB</li>
          <li>SQL</li>
          <li>Bootstrap CSS</li>
        </ul>
      </div>
    </div>
  );
}
