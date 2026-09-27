import { Link } from "react-router-dom";

import finalpres from "../images/projects/esnet/finalpres.png";
import hifi from "../images/projects/esnet/hifi.png";
import esnetsite from "../images/projects/esnet/esnetsite.png";

const presentationLink =
  "https://docs.google.com/presentation/d/1fyyv0zd-mLafF8y3Um4m9ZQ23HFxwj0qV3ieRDNk7Eg/edit?usp=sharing";

const websiteLink =
  "https://education.es.net/";

function Esnet() {
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
            LBNL ESNet K-12 Website
          </h1>

          <div className="project-meta">

            <div>

              <h4>
                Product Description
              </h4>

              <p>
                At Lawrence Berkeley National Laboratory, I worked on
                educational outreach project for the ESNet K-12
                program by developing a responsive website. Through
                user research, prototyping, and front-end development
                with HTML and CSS, I helped create an accessible digital
                experience for educators and students from
                underrepresented communities.
              </p>

            </div>

            <div>

              <h4>
                Time
              </h4>

              <p>
                ~6 Weeks
              </p>

              <h4>
                Team
              </h4>

              <p>
                3 people team
        
              </p>
              <p>
              Me - led design and helped develop
              </p>

            </div>

          </div>

        </div>


        {/* Final Presentation */}
        <section className="design-section esnet-section">

          <h2>
            Final Presentation
          </h2>

          <a
            href={presentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="presentation-link"
          >
            <img
              src={finalpres}
              alt="ESNet Final Presentation"
              className="presentation-image"
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
              <strong>Family:</strong> Montserrat & Open Sans
              <br />

              <strong>Heading:</strong> 72px
              <br />

              <strong>Subheading:</strong> 25px
              <br />

              <strong>Body:</strong> 18px
              <br />

              <strong>Captions:</strong> 14px
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
                  style={{ background: "#FF3600" }}
                ></span>

                <p>
                  #FF3600
                </p>

              </div>


              <div className="color-card">

                <span
                  className="color"
                  style={{ background: "#43C3D0" }}
                ></span>

                <p>
                  #43C3D0
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
        <section className="design-section esnet-section">

          <h2>
            High Fidelity Design
          </h2>

          <div className="design-image">

            <img
              src={hifi}
              alt="ESNet High Fidelity Design"
            />

          </div>

        </section>


        {/* Developed Site */}
        <section className="developed-site">

          <h2>
            Developed Site
          </h2>

          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="site-image-link"
          >
            <img
              src={esnetsite}
              alt="ESNet K-12 Developed Website"
              className="site-image"
            />
          </a>

          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="prototype-btn website-btn"
          >
            Website
          </a>

        </section>

      </div>

    </section>
  );
}

export default Esnet;