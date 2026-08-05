import lowfi from "../images/projects/kmjewels/lowfi.png";
import hifi from "../images/projects/kmjewels/hifi.png";

const prototypeLink =
  "https://www.figma.com/proto/pGaAfSC373e8qZ0J0htLHX/km-jewels?type=design&node-id=141-327&t=Om1AykcnjobG9doR-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=141%3A327&show-proto-sidebar=1";


function KMJewels() {
  return (
    <section className="project-page">

      <div className="project-container">

        {/* Back Button */}
        <a href="/#projects" className="back">
          ←
        </a>


        {/* Header */}
        <div className="project-header">

          <h1>KMJewels E-Commerce App Design</h1>


          <div className="project-meta">

            <div>
              <h4>Project Description</h4>
              <p>
                Designed an e-commerce mobile app experience for KMJewels,
                focusing on a clean, luxury-inspired shopping experience.
              </p>
            </div>


            <div>
              <h4>Time</h4>
              <p>1 week</p>

              <h4>Team</h4>
              <p>Me - App UX/UI</p>
            </div>

          </div>

        </div>



        {/* Low Fidelity */}
        <section className="design-section purple">

          <h2>Low Fi Design</h2>

          <div className="design-image">
            <img
              src={lowfi}
              alt="Low Fidelity Wireframes"
            />
          </div>

        </section>




        {/* Style Guide */}
        <section className="style-section">


          <div className="style-item">

            <h3>Typography</h3>

            <p>
              <strong>Font:</strong> DM Serif Display <br/>
              <strong>Heading:</strong> 32px <br/>
              <strong>Subheading:</strong> 27px <br/>
              <strong>Body:</strong> 15px <br/>
              <strong>Caption:</strong> 12px
            </p>

          </div>



          <div className="style-item">

            <h3>Colors</h3>


            <div className="colors">


              <div className="color-card">
                <span className="color color-gray"></span>
                <p>#DDDDDD</p>
              </div>


              <div className="color-card">
                <span className="color color-blue"></span>
                <p>#5C829D</p>
              </div>


              <div className="color-card">
                <span className="color color-black"></span>
                <p>#000000</p>
              </div>


            </div>

          </div>


        </section>





        {/* High Fidelity */}
        <section className="design-section purple">

          <h2>High Fi Design</h2>


          <div className="design-image">
            <img
              src={hifi}
              alt="High Fidelity Screens"
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


export default KMJewels;