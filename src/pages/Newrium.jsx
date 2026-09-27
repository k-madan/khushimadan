import { Link } from "react-router-dom";
import lofi from "../images/projects/newrium/lofi.png";
import hifi from "../images/projects/newrium/hifi.png";
import system from "../images/projects/newrium/system.png";

const prototypeLink =
  "https://www.figma.com/proto/HpQLbywlp5bxm8U49sAlx8/Untitled?node-id=1-838&t=XLKi56Mr8JEcTPDk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1";

function Newrium() {
  return (
    <section className="project-page">

      <div className="project-container">

        {/* Back Button */}
        <Link to="/designs" className="back">
          ←
        </Link>


        {/* Header */}
        <div className="project-header">

          <h1>Newrium Foundation - Web Interface</h1>

          <div className="project-meta">

            <div>
              <h4>Project Description</h4>

              <p>
                Designed and developed a web interface for Newrium Foundation,
                focusing on creating an accessible and engaging digital
                experience.
              </p>
            </div>


            <div>
              <h4>Time</h4>
              <p>3 months</p>

              <h4>Team</h4>
              <p>5 UI/UX Designers</p>
            </div>

          </div>

        </div>


        {/* Low Fidelity */}
        <section className="design-section newrium-section">

          <h2>Low Fi Design</h2>

          <div className="design-image">
            <img
              src={lofi}
              alt="Newrium Foundation Low Fidelity Designs"
            />
          </div>

        </section>


        {/* Style Guide */}
        <section className="style-section">

          {/* Typography */}
          <div className="style-item">

            <h3>Typography</h3>

            <p>
              <strong>Font:</strong> Poppins <br />
              <strong>Heading:</strong> 64px <br />
              <strong>Subheading:</strong> 48px <br />
              <strong>Body:</strong> 20px <br />
              <strong>Caption:</strong> 16px
            </p>

          </div>


          {/* Colors */}
          <div className="style-item">

            <h3>Colors</h3>

            <div className="colors">

              <div className="color-card">
                <span
                  className="color"
                  style={{ background: "#FEAC71" }}
                ></span>
                <p>#FEAC71</p>
              </div>


              <div className="color-card">
                <span
                  className="color"
                  style={{ background: "#55A5BC" }}
                ></span>
                <p>#55A5BC</p>
              </div>


              <div className="color-card">
                <span
                  className="color"
                  style={{ background: "#C7E2B6" }}
                ></span>
                <p>#C7E2B6</p>
              </div>

            </div>

          </div>

        </section>


        {/* High Fidelity */}
        <section className="design-section newrium-section">

          <h2>High Fi Design</h2>

          <div className="design-image">
            <img
              src={hifi}
              alt="Newrium Foundation High Fidelity Design"
            />
          </div>

        </section>


        {/* Design System */}
        <section className="design-section newrium-section">

          <h2>Design System</h2>

          <div className="design-image">
            <img
              src={system}
              alt="Newrium Foundation Design System"
            />
          </div>


          {/* Prototype Button */}
          <a
            href={prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="prototype-btn"
          >
            View Prototype →
          </a>

        </section>

      </div>

    </section>
  );
}

export default Newrium;