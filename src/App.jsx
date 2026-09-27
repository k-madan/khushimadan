import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import AboutPage from "./pages/AboutPage";
import Designs from "./pages/Designs";

import KMJewels from "./pages/KMJewels";
import Matcha from "./pages/Matcha";
import Atlas from "./pages/Atlas";
import Esnet from "./pages/ESNet";
import CMU from "./pages/CMU";
import Graphics from "./pages/Graphics";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Newrium from "./pages/Newrium";
import VERA from "./pages/VERA";

function App() {
  return (
    <HashRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Hero />}
        />

        {/* About Me */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* Interface Designs */}
        <Route
          path="/designs"
          element={<Designs />}
        />

        {/* Individual Projects */}
        <Route
          path="/kmjewels"
          element={<KMJewels />}
        />

        <Route
          path="/matcha"
          element={<Matcha />}
        />

        <Route
          path="/atlas"
          element={<Atlas />}
        />

        <Route
          path="/esnet"
          element={<Esnet />}
        />

        <Route
          path="/cmu"
          element={<CMU />}
        />

        <Route
          path="/graphics"
          element={<Graphics />}
        />

        <Route
          path="/resume"
          element={<Resume />}
        />

        <Route
          path="/newrium"
          element={<Newrium />}
        />

        <Route
          path="/vera"
          element={<VERA />}
        />

      </Routes>

      <Footer />

    </HashRouter>
  );
}

export default App;