import aboutImg from "../images/about.jpeg";
import ScrollReveal from "../components/ScrollReveal";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <ScrollReveal>
          <h2>Hey, I'm Khushi</h2>
        </ScrollReveal>

        <div className="about-layout">

          <ScrollReveal className="about-text-reveal">
            <div className="about-text">

              <h3>Background & Education</h3>

              <p>
                I’m a UC Berkeley student studying Cognitive Science, Data Science & Design, where I combine my interests in technology,
                design, and human behavior. Through coursework in computer
                science, data science, cognitive science, and design, I’m building
                a strong foundation in software development, problem-solving, and human computer
                interaction. I have experience programming in Python, Java, SQL, and JavaScript,
                along with HTML and CSS, and I used React for the frontend development of this site!
                Most of my experience is with Figma, UI/UX design,
                user research, and building responsive and thoughtful applications.
              </p>

              <h3>Extracurriculars</h3>

              <p>
                Outside the classroom, I’m involved with UX @ Berkeley, Web
                Development @ Berkeley and Blockchain @ Berkeley, where I work on UI/UX design and explore
                frontend development. I also enjoy building personal projects
                that combine design and technology, exploring Figma and new tools. Through these activities, I
                continue developing my skills in collaboration, design,
                and development.</p>

            </div>
          </ScrollReveal>

          <ScrollReveal className="about-image-reveal">
            <div className="about-image">
              <img src={aboutImg} alt="Khushi" />
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

export default About;