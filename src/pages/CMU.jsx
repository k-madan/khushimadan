import { Link } from "react-router-dom";

import lofi from "../images/projects/cmu/lofi.png";
import hifi from "../images/projects/cmu/hifi.png";

const prototypeLink =
  "https://www.figma.com/proto/3snXeDpfV544GIwfNC68bg/Postura?node-id=1-2&t=mf3LCXBQDXnU6kBG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2";

function CMU() {
  return (
    <section className="project-page">

      <div className="project-container">

        {/* Back Button */}
        <Link to="/designs" className="back">
          ←
        </Link>

        {/* Header */}
        <div className="project-header">

          <h1>
            CMU VC Product App Prototype
          </h1>

          <div className="project-meta">

            <div>
              <h4>
                Product Description
              </h4>

              <p>
                A simple one-page App Prototype for the CMU venture
                competition. The product is a device that allows users
                to track posture that can be embedded through this app,
                providing data to the user as well.
              </p>
            </div>

            <div>

              <h4>
                Time
              </h4>

              <p>
                ~2 hrs
              </p>

              <h4>
                Team
              </h4>

              <p>
                Me - App + UI
                <br />
                2 Members - App + UX
              </p>

            </div>

          </div>

        </div>


        {/* Low Fidelity */}
        <section className="design-section cmu-section">

          <h2>
            Low-Fidelity WireFrame
          </h2>

          <div className="design-image cmu-lofi-image">

            <img
              src={lofi}
              alt="CMU low-fidelity wireframe"
            />

          </div>

        </section>


        {/* Style Guide */}
        <section className="style-section">

          <div className="style-item">

            <h3>
              Typography
            </h3>

            <p>
              <strong>Family:</strong> Khula
              <br />
              <strong>Heading:</strong> 37px
              <br />
              <strong>Subheading:</strong> 25px
              <br />
              <strong>Body:</strong> 21px
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
                  className="color"
                  style={{ background: "#E7E7E9" }}
                ></span>

                <p>
                  #E7E7E9
                </p>

              </div>

              <div className="color-card">

                <span
                  className="color"
                  style={{ background: "#499A8F" }}
                ></span>

                <p>
                  #499A8F
                </p>

              </div>

              <div className="color-card">

                <span
                  className="color"
                  style={{ background: "#000000" }}
                ></span>

                <p>
                  #000000
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* High Fidelity */}
        <section className="design-section cmu-section">

          <h2>
            High-Fidelity Design
          </h2>

          <div className="design-image cmu-hifi-image">

            <img
              src={hifi}
              alt="CMU high-fidelity design"
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

export default CMU;