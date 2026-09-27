import ProjectCard from "./ProjectCard";

import km from "../images/projects/kmjewels.png";
import cmu from "../images/projects/cmu.png";
import atlas from "../images/projects/atlas.png";
import matcha from "../images/projects/matchamap.png";
import esnet from "../images/projects/esnet.png";
import newrium from "../images/projects/newrium.png";
import vera from "../images/projects/vera/landing.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <h2>My Projects</h2>

        <div className="projects-grid">

          {/* Row 1 */}
          <ProjectCard
            className="atlas"
            title="Atlas Agent • Mobile Interface"
            subtitle="Read Design Details →"
            image={atlas}
            color="#E7D8EA"
            link="/atlas"
          />

          <ProjectCard
            className="esnet"
            title="ESnet K–12 Educational Website"
            subtitle="Read Design Details →"
            image={esnet}
            color="#DDEEFF"
            link="/esnet"
          />

          <ProjectCard
            className="vera"
            title="VERA - Social Media User Verification"
            subtitle="Read Design Details →"
            image={vera}
            color="#DDEEFA"
            link="/vera"
          />

          {/* Row 2 */}
          <ProjectCard
            className="matcha"
            title="Matcha Map • Café Locator"
            subtitle="Read Design Details →"
            image={matcha}
            color="#DDF7EF"
            link="/matcha"
          />

          <ProjectCard
            className="newrium"
            title="Newrium Foundation - Web Interface"
            subtitle="Read Design Details →"
            image={newrium}
            color="#FFE9D8"
            link="/newrium"
          />

          <ProjectCard
            className="cmu"
            title="CMU UX • Product App Prototype"
            subtitle="Read Design Details →"
            image={cmu}
            color="#FFEBF2"
            link="/cmu"
          />

          {/* Row 3 */}
          <ProjectCard
            className="km"
            title="KMJewels • E-Commerce App Design"
            subtitle="Read Design Details →"
            image={km}
            color="#FFF1C8"
            link="/kmjewels"
          />

        </div>

      </div>
    </section>
  );
}

export default Projects;
