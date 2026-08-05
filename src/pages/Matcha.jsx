import lowfi from "../images/projects/matcha/lowfi.png";
import hifi from "../images/projects/matcha/hifi.png";

const prototypeLink =
  "https://www.figma.com/proto/9A2qOoJ5cnEeK5ZITIpIz9/MatchaMap?node-id=44-881&t=07PddjAiqP9kD4Wx-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1";


function Matcha() {

  return (
    <section className="project-page">

      <div className="project-container">


        {/* Back Button */}
        <a href="/#projects" className="back">
          ←
        </a>



        {/* Header */}
        <div className="project-header">

          <h1>
            MatchaMap Website Design
          </h1>


          <div className="project-meta">


            <div>

              <h4>
                Project Description
              </h4>

              <p>
                Designed a website experience for MatchaMap,
                combining matcha cafe discovery, reviews,
                and location-based recommendations into one platform.
              </p>

            </div>



            <div>

              <h4>
                Time
              </h4>

              <p>
                1 week
              </p>


              <h4>
                Team
              </h4>

              <p>
                Me - Web UX/UI
              </p>

            </div>


          </div>


        </div>





        {/* Wireframe */}
        <section className="design-section matcha-section">

          <h2>
            Low Fi Wireframe
          </h2>


          <div className="design-image">

            <img
              src={lowfi}
              alt="MatchaMap Wireframes"
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
              <strong>Font:</strong> Poppins
              <br/>

              <strong>Heading:</strong> 37px
              <br/>

              <strong>Subheading:</strong> 28px
              <br/>

              <strong>Body:</strong> 21px
              <br/>

              <strong>Caption:</strong> 16px
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
                  style={{background:"#FFFFFF"}}
                ></span>

                <p>
                  #FFFFFF
                </p>

              </div>




              <div className="color-card">

                <span 
                  className="color"
                  style={{background:"#ACC59A"}}
                ></span>

                <p>
                  #ACC59A
                </p>

              </div>




              <div className="color-card">

                <span 
                  className="color"
                  style={{background:"#000000"}}
                ></span>

                <p>
                  #000000
                </p>

              </div>


            </div>


          </div>


        </section>







        {/* High Fidelity */}
        <section className="design-section matcha-section">


          <h2>
            High Fi Wireframe
          </h2>



          <div className="design-image">

            <img
              src={hifi}
              alt="MatchaMap High Fidelity Design"
            />

          </div>




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


export default Matcha;