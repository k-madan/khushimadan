import ProjectCard from "./ProjectCard";

import km from "../images/projects/kmjewels.png";
import cmu from "../images/projects/cmu.png";
import atlas from "../images/projects/atlas.png";
import matcha from "../images/projects/matchamap.png";
import esnet from "../images/projects/esnet.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2>My Projects</h2>

        <div className="projects-grid">

        <ProjectCard
  className="km"
  title="KMJewels • E-Commerce App Design"
  subtitle="Read Design Details →"
  image={km}
  color="#F7E9FA"
  link="/kmjewels"
/>

<ProjectCard
  className="cmu"
  title="CMU UX • Product App Prototype"
  subtitle="Read Design Details →"
  image={cmu}
  color="#FFE8E2"
  link="/cmu"
/>

<ProjectCard
  className="atlas"
  title="Atlas Agent • Mobile Interface"
  subtitle="Read Design Details →"
  image={atlas}
  color="#FFF1C8"
  link="/atlas"
/>

<ProjectCard
  className="matcha"
  title="Matcha Map • Café Locator"
  subtitle="Read Design Details →"
  image={matcha}
  color="#DDF7EF"
  link="/matcha"
/>

<ProjectCard
  className="esnet"
  title="ESnet K–12 Educational Website"
  subtitle="Special Design & Development Project"
  image={esnet}
  color="#DDEEFF"
  link="/esnet"
/>

        </div>

      </div>
    </section>
  );
}

export default Projects;