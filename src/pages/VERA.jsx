import { Link } from "react-router-dom";
import deliverable from "../images/projects/vera/Vera.png";
import hifi from "../images/projects/vera/hifi.png";
import prototype from "../images/projects/vera/prototype.png";

function VERA() {
  return (
    <section className="project-page">

      <div className="project-container">

        {/* Back Button */}
        <Link to="/designs" className="back">
          ←
        </Link>

        {/* Header */}
        <div className="project-header">

          <h1>VERA Mobile App Design</h1>

          <div className="project-meta">

            <div>

              <h4>Product Description</h4>

              <p>
                VERA is a mobile social platform built around verified,
                real-world credentials. Users can connect employment,
                education, and certification records to their profile,
                request verification through documentation or employer
                confirmation, and share the resulting badges and posts with a
                community that prioritizes trustworthy content over
                anonymous claims.
              </p>

            </div>

            <div>

              <h4>Time</h4>
              <p>~1 Week</p>

              <h4>Team</h4>
              <p>Me - App UI & UX + Vibe Coded Development</p>

            </div>

          </div>

        </div>

        {/* Final Deliverable */}
        <section className="design-section vera-section">

          <h2>Final Deliverable: Design Process</h2>

          <div className="design-image">
            <a
              href="https://canva.link/uhkb7z8cz432ec3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={deliverable}
                alt="VERA Final Deliverable Design Process"
              />
            </a>
          </div>

        </section>

        {/* Fonts & Colors */}
        <section className="style-section">

          <div className="style-item">

            <h3>Fonts</h3>

            <p>
              <strong>Family:</strong> Poppins <br />
              <strong>Heading:</strong> 32px <br />
              <strong>Subheading:</strong> 27px <br />
              <strong>Body:</strong> 15px <br />
              <strong>Captions:</strong> 12px
            </p>

          </div>

          <div className="style-item">

            <h3>Colors</h3>

            <div className="colors">

              <div className="color-card">
                <span className="color" style={{ background: "#FFFFFF" }}></span>
                <p>#FFFFFF</p>
              </div>

              <div className="color-card">
                <span className="color" style={{ background: "#90BCD8" }}></span>
                <p>#90BCD8</p>
              </div>

              <div className="color-card">
                <span className="color" style={{ background: "#166495" }}></span>
                <p>#166495</p>
              </div>

            </div>

          </div>

        </section>

        {/* High Fidelity Design */}
        <section className="design-section vera-section">

          <h2>High Fidelity Design</h2>

          <div className="design-image">
            <img
              src={hifi}
              alt="VERA High Fidelity Design"
            />
          </div>

          <a
            href="https://www.figma.com/proto/jiABrxY4OzFSJqTB7r9sfj/B-B?node-id=164-48&p=f&t=EwezgG7AeAwHxCG8-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=164%3A48"
            target="_blank"
            rel="noopener noreferrer"
            className="prototype-btn"
          >
            Prototype
          </a>

        </section>

        {/* Vibe Coded Prototype */}
        <section className="design-section vera-white-section">

          <h2>Vibe Coded Prototype</h2>

          <p>
            <strong>Tools:</strong> Claude Code & VSCode <br />
            <strong>Language:</strong> React <br />
            <strong>Test On Your Phone:</strong>{" "}
            <a
              href="https://tinyurl.com/VeraProto"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tinyurl.com/VeraProto
            </a>
          </p>

          <div className="design-image vera-prototype-image">
            <img
              src={prototype}
              alt="VERA Vibe Coded Prototype"
            />
          </div>

        </section>

      </div>

    </section>
  );
}

export default VERA;
