import Navbar from "./Navbar";
import profile from "../images/profile.jpeg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">

        <Navbar />

        <div className="hero-layout">

          <div className="hero-left">
        
          <h1>
  Hi,
  <br />
  I'm Khushi Madan
</h1>

            <p>
              A <span>UI/UX Designer</span> &amp;{" "}
              <span>Web Developer</span> studying{" "}
              <span>Cognitive Science</span> &amp;{" "}
              <span>Data Science</span> at{" "}
              <span>UC Berkeley</span>.
            </p>

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

          </div>

          <div className="hero-right">
            <img src={profile} alt="Khushi Madan" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;