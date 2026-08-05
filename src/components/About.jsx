import aboutImg from "../images/about.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <h2>Hey, I'm Khushi</h2>

        <div className="about-layout">

          <div className="about-text">

            <h3>Background & Education</h3>

            <p>
              I'm a UI/UX designer and aspiring front-end developer currently
              studying Cognitive Science and Data Science at the University of
              California, Berkeley. I enjoy designing intuitive digital
              experiences that combine creativity, accessibility, and thoughtful
              user-centered design.
            </p>

            <p>
              Through coursework and personal projects, I've developed skills in
              wireframing, prototyping, user research, interaction design, and
              front-end development with HTML, CSS, JavaScript, and React.
            </p>

            <h3>Passions & Extracurriculars</h3>

            <p>
              Outside of academics, I enjoy building portfolio projects,
              exploring new design trends, mentoring students, and continuously
              learning new technologies that help bring ideas to life.
            </p>

          </div>

          <div className="about-image">
            <img src={aboutImg} alt="Khushi" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;