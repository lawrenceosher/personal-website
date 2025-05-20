import "../App.css";
import "../styles/Landing.css"

export default function Landing() {
  return (
    <section id="landing" className="d-flex flex-column align-items-center justify-content-center text-center">
      <h1 id="name" className="fw-bold m-2 display-3 z-1">
        Lawrence Osher
      </h1>
      <h2 id="title" className="mx-2 z-1">
        Full-Stack Software Engineer
      </h2>

      <div className="arc-reactor"></div>
    </section>
  );
}
