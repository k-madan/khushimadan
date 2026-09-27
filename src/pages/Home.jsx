import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default Home;