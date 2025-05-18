import { Tab, Tabs } from "react-bootstrap";
import "../App.css";

export default function Experience() {
  return (
    <div className="d-flex flex-column left-0 right-0 p-3">
      <h2 id="experience" className="display-5 fw-bold section-header text-end">
        Experience
      </h2>

      <Tabs defaultActiveKey="Chewy" className="mb-3">
        <Tab eventKey="Chewy" title="Chewy">
          <div className="d-flex align-items-center mb-3">
            <h1 className="flex-fill">Software Engineer Co-op</h1>
            <div className="fs-3">
              <span>June 2024 - December 2024</span>
              <span className="mx-2"> | </span>
              <span className="">Boston, MA</span>
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
          Tab content for Profile
        </Tab>
        <Tab eventKey="Generate" title="Generate">
          Tab content for Contact
        </Tab>
      </Tabs>
    </div>
  );
}
