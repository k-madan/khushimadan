import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import KMJewels from "./pages/KMJewels";
import Matcha from "./pages/Matcha";


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
            </>
          }
        />


        <Route
          path="/kmjewels"
          element={<KMJewels />}
        />


        <Route
          path="/matcha"
          element={<Matcha />}
        />


      </Routes>

    </BrowserRouter>
  );
}

export default App;