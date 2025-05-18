import { Tab, Tabs } from "react-bootstrap";
import "../App.css";

export default function Experience() {
  return (
    <section className="d-flex flex-column p-3">
      <h2 id="experience" className="display-5 fw-bold section-header text-end">
        Experience
      </h2>

      <Tabs id="experience" defaultActiveKey="Chewy" className="mb-3">
        <Tab eventKey="Chewy" title="Chewy">
          <div className="d-flex align-items-center mb-3">
            <h1 className="flex-fill">Software Engineer Co-op</h1>
            <div className="fs-3">
              <span>June 2024 - December 2024</span>
              <span className="mx-2"> | </span>
              <span>Boston, MA</span>
            </div>
          </div>

          <p>
            I was part of the Fulfillment Process Automation (FPA) team working
            on the Fulfillment Virtual Labor Board and Slotting Automation
            System.
          </p>

          <ul>
            <li>
              Implemented SOLID engineering principles to make DRY, extensible
              Spring Boot code for distributed workflow that imports and exports
              CSV files to S3 Bucket, enabling batch functions to execute linear
              programming optimizer
            </li>
            <li>
              Enabled users to input different values to the workflow solver
              without relying on manual developer intervention through ownership
              of the “Workflow Configurations” feature. Designed a REST API,
              crafted full-coverage automated unit/integration tests, managed
              flyway migrations, and styled user-friendly inputs on the UI
            </li>
            <li>
              Created API specifications using Swagger and technical knowledge
              transfers in Confluence to accelerate future team member
              onboarding
            </li>
            <li>
              Utilized Amazon Q Developer and AWS Bedrock as resources to write
              unit tests, debug code, and explain code to decrease development
              time by 50%
            </li>
            <li>
              Averaged 5.5 story points (1 story point = 2 business days) per
              sprint to deliver 40 tickets over 6 months while building the UI
              (Next.js), API (Spring Boot), AWS infrastructure, and database
              (PostgreSQL) from the ”ground-up” for fulfillment center
              application that increased slotting automation by 90%
            </li>
          </ul>
        </Tab>
        <Tab eventKey="HealthStream" title="HealthStream">
          <div className="d-flex align-items-center mb-3">
            <h1 className="flex-fill">Software Developer Intern</h1>
            <div className="fs-3">
              <span>September 2023 - December 2023</span>
              <span className="mx-2"> | </span>
              <span>Remote</span>
            </div>
          </div>

          <p>
            I was part of the Cloud CME team working on the 'Activity Editor' so
            any institutions using the LMS could manage any activity or event
            they set up for their medical professionals.
          </p>

          <ul>
            <li>
              Overhauled 10 frontend pages using React.js to update CloudCME's
              learning product for a more “modern” feel for medical
              professionals
            </li>
            <li>
              Learned about the workflow of making a frontend page from mock-up
              to page layout to adding functionality to adding styling
            </li>
            <li>
              Gained experience with key React patterns such as state management
              for conditional rendering, outputting lists, and working with user
              input through forms
            </li>
            <li>Styled all pages with Tailwind CSS framework</li>
            <li>
              Implemented 15 CRUD endpoints with the Entity Framework for users
              to dynamically retrieve and update data
            </li>
            <li>
              Participated in Agile ceremonies such as sprint reviews and
              retrospectives for full-stack development and UI/UX design
            </li>
          </ul>
        </Tab>
        <Tab eventKey="Generate" title="Generate">
          <div className="d-flex align-items-center mb-3">
            <h1 className="flex-fill">Software Engineer</h1>
            <div className="fs-3">
              <span>January 2023 - April 2023</span>
              <span className="mx-2"> | </span>
              <span>Boston, MA</span>
            </div>
          </div>

          <p>
            Generate is Northeastern's Student-Led Product Development Studio,
            and I was part of the 'FindHer' team.
          </p>

          <ul>
            <li>
              Participated in code reviews and team meetings for 'FindHer' web
              application that provides women in India with a platform for job
              searches
            </li>
            <li>Utilized Python for backend development of endpoints</li>
            <li>
              Developed React components, such as a drag and drop ranking system
              and a file uploader, for the frontend of a REST API
            </li>
          </ul>
        </Tab>
      </Tabs>
    </section>
  );
}
