import { Link } from "react-router-dom";
import profile from "../images/profile.jpeg";
import { useEffect, useState } from "react";

function Hero() {
  const [text, setText] = useState("");

  useEffect(() => {
    const fullText = "I'm Khushi Madan";
    let index = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container">

        <div className="hero-layout">

          <div className="hero-left">

            <h1>
              Hi,
              <br />
              {text}
              <span className="typing-cursor">|</span>
            </h1>

            <p>
              A <span>UI/UX Designer</span> &amp;{" "}
              <span>Web Developer</span> studying{" "}
              <span>Cognitive Science</span>, <span>Design</span> &amp;{" "}
              <span>Data Science</span> at{" "}
              <span>UC Berkeley</span>.
            </p>

            <Link to="/designs" className="primary-btn">
              View Projects
            </Link>

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