import graphic1 from "../images/graphics/graphic1.png";
import graphic2 from "../images/graphics/graphic2.png";
import graphic3 from "../images/graphics/graphic3.png";

const graphic1Link =
  "https://www.canva.com/design/DAGCtli-0lQ/0dzeDWksJ4PKHDbFPJ8tMg/view?utm_content=DAGCtli-0lQ&utm_campaign=designshare&utm_medium=link&utm_source=viewer";

const graphic2Link =
  "https://drive.google.com/file/d/1CP7cVJFoFFUt4MAbyljSEWwfjvmaFdZn/view?usp=sharing";

const graphic3Link =
  "https://drive.google.com/file/d/15JT8KKL_c8sxREogSYPM7v3_LdXp385E/view?usp=sharing";

function Graphics() {
  return (
    <section className="graphics-page">
      <div className="graphics-container">

        {/* Page Title */}
        <h1>My Graphic Designs</h1>


        {/* =================================
            GRAPHIC 1
        ================================= */}

        <div className="graphic-project">

          <div className="graphic-image-column graphic-one">

            <a
              href={graphic1Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={graphic1}
                alt="Aveti Learning Quarterly Newsletter"
              />
            </a>

            <a
              href={graphic1Link}
              target="_blank"
              rel="noopener noreferrer"
              className="graphic-button"
            >
              View Full Design!
            </a>

          </div>


          <div className="graphic-info">

            <h2 className="graphic-info-heading">
              Aveti Learning Quarterly
              <br />
              Newsletter
            </h2>

            <p className="graphic-info-description">
              January to April 2024 edition of Aveti
              <br />
              Learning’s Quarterly Newsletters
            </p>

            <h3 className="graphic-info-heading">
              Software Used
            </h3>

            <p className="graphic-info-description">
              Canva
            </p>

            <h3 className="graphic-info-heading">
              Time
            </h3>

            <p className="graphic-info-description">
              ~1 week
            </p>

            <h3 className="graphic-info-heading">
              Team
            </h3>

            <p className="graphic-info-description">
              Designer (me)
            </p>

          </div>

        </div>


        {/* =================================
            GRAPHIC 2
            TEXT LEFT / IMAGE RIGHT
            WHOLE CARD COLORED
        ================================= */}

        <div className="graphic-project graphic-card-reverse">

          <div className="graphic-info">

            <h2 className="graphic-info-heading">
              Aveti Learning Annual
              <br />
              Newsletter
            </h2>

            <p className="graphic-info-description">
              2023 annual edition of Aveti Learning’s
              <br />
              Newsletters
            </p>

            <h3 className="graphic-info-heading">
              Software Used
            </h3>

            <p className="graphic-info-description">
              Canva
            </p>

            <h3 className="graphic-info-heading">
              Time
            </h3>

            <p className="graphic-info-description">
              ~2 week
            </p>

            <h3 className="graphic-info-heading">
              Team
            </h3>

            <p className="graphic-info-description">
              Designer (me)
            </p>

          </div>


          <div className="graphic-image-container">

            <a
              href={graphic2Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={graphic2}
                alt="Aveti Learning Annual Newsletter"
                className="graphic-image"
              />
            </a>

            <a
              href={graphic2Link}
              target="_blank"
              rel="noopener noreferrer"
              className="graphic-button"
            >
              View Full Design!
            </a>

          </div>

        </div>


        {/* =================================
            GRAPHIC 3
        ================================= */}

        <div className="graphic-project">

          <div className="graphic-image-column graphic-three">

            <a
              href={graphic3Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={graphic3}
                alt="Aveti Learning Quarterly Newsletter"
              />
            </a>

            <a
              href={graphic3Link}
              target="_blank"
              rel="noopener noreferrer"
              className="graphic-button"
            >
              View Full Design!
            </a>

          </div>


          <div className="graphic-info">

            <h2 className="graphic-info-heading">
              Aveti Learning Quarterly
              <br />
              Newsletter
            </h2>

            <p className="graphic-info-description">
              July to September 2023 edition of Aveti
              <br />
              Learning’s Quarterly Newsletters
            </p>

            <h3 className="graphic-info-heading">
              Software Used
            </h3>

            <p className="graphic-info-description">
              Canva
            </p>

            <h3 className="graphic-info-heading">
              Time
            </h3>

            <p className="graphic-info-description">
              ~1 week
            </p>

            <h3 className="graphic-info-heading">
              Team
            </h3>

            <p className="graphic-info-description">
              Designer (me)
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Graphics;