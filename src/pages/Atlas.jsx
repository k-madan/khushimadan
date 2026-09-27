import { Link } from "react-router-dom";
import hifi from "../images/projects/atlas/hifi.png";
import midpoint from "../images/projects/atlas/midpoint.png";

const midpointLink =
  "https://www.figma.com/deck/ySarAtqyY3AJ72NmKMQyoA/Atlas-Agent---Midpoint-Presentation?node-id=2-27&t=2Avwz3lZvLLjLHEE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1";

const prototypeLink =
  "https://www.figma.com/proto/Cw3N5ppltxv2Bs22oL6oUz/Untitled?node-id=0-3261&t=DaTRtfO2AkGHXXb3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1";

function Atlas() {
  return (
    <section className="project-page atlas-page">

      <div className="project-container">

        {/* Back Button */}
        <Link to="/designs" className="back">
          ←
        </Link>

        {/* Header */}
        <div className="project-header">

          <h1>
            Atlas Agent Mobile App Design
          </h1>

          <div className="project-meta">

            <div>

              <h4>
                Project Description
              </h4>

              <p>
                Atlas Agent is an AI-powered productivity platform that helps
                real estate professionals work more efficiently with tools for
                CMA report generation, AI chatbot support, and transaction
                management. My team redesigned these complex desktop workflows
                into an intuitive, voice-assisted mobile experience focused on
                usability and accessibility.
              </p>

            </div>

            <div>

              <h4>
                Time
              </h4>

              <p>
                ~3 months
              </p>

              <h4>
                Team
              </h4>

              <p>
                4 people team - App UI & UX
              </p>

            </div>

          </div>

        </div>


        {/* Midpoint Presentation */}
        <section className="design-section atlas-section">

        <h2>
          Midpoint Presentation: Research + WireFrame
        </h2>

        <a
          href={midpointLink}
          target="_blank"
          rel="noopener noreferrer"
          className="midpoint-link"
        >
          <img
            src={midpoint}
            alt="Atlas Agent Midpoint Presentation"
            className="midpoint-image"
          />
        </a>

      </section>


        {/* Style Guide */}
        <section className="style-section">

          <div className="style-item">

            <h3>
              Typography
            </h3>

            <p>
              <strong>Family:</strong> Inter
              <br />

              <strong>Heading:</strong> 32px
              <br />

              <strong>Subheading:</strong> 27px
              <br />

              <strong>Body:</strong> 15px
              <br />

              <strong>Captions:</strong> 12px
            </p>

          </div>


          <div className="style-item">

            <h3>
              Colors
            </h3>

            <div className="colors">

              <div className="color-card">

                <span
                  className="color atlas-white"
                ></span>

                <p>
                  #FFFFFF
                </p>

              </div>


              <div className="color-card">

                <span
                  className="color atlas-purple"
                ></span>

                <p>
                  #39376C
                </p>

              </div>


              <div className="color-card">

                <span
                  className="color atlas-black"
                ></span>

                <p>
                  #000000
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* High Fidelity */}
        <section className="design-section atlas-section">

          <h2>
            High Fidelity Design
          </h2>

          <div className="design-image">

            <img
              src={hifi}
              alt="Atlas Agent High Fidelity Design"
            />

          </div>


          <a
            href={prototypeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="prototype-btn"
          >
            Prototype
          </a>

        </section>

      </div>

    </section>
  );
}

export default Atlas;