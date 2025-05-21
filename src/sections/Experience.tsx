import { Container, Tab, Tabs } from "react-bootstrap";
import "../App.css";
import "../styles/Experience.css";
import { RiBriefcase2Line } from "react-icons/ri";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="d-flex flex-column p-3">
      <Container className="m-0 p-0">
        <h2
          id="experience"
          className="display-5 fw-bold section-header d-flex align-items-center justify-content-end"
        >
          <RiBriefcase2Line className="me-3 text-white fw-normal" />
          Experience
        </h2>

        <Tabs defaultActiveKey="Chewy" className="mb-3">
          {experience.map((exp, index) => {
            return (
              <Tab key={index} eventKey={exp.company} title={exp.company}>
                <div className="d-lg-flex align-items-center mb-3">
                  <h1 className="fw-bold">{exp.company}</h1>
                  <div className="ms-auto fs-3">
                    <span>
                      {exp.start} - {exp.end}
                    </span>
                    <span className="mx-2"> | </span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="fs-4">{exp.description}</p>

                <ul id="experience-list" className="fs-5">
                  {exp.points.map((item, indexPoints) => {
                    return <li key={indexPoints}>{item}</li>;
                  })}
                </ul>
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </section>
  );
}
