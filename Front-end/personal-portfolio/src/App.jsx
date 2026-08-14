import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Starfield from "./Components/Starfield";
import ScrollOrbit from "./Components/ScrollOrbit";
import Hero from "./Sections/Hero";
import MissionLog from "./Components/MissionLog";
import Profile from "./Sections/Profile";
import Education from "./Sections/Education";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Preparation from "./Sections/Preparation";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";

function App() {
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      h.style.setProperty("--progress", p.toFixed(4));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-text">
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <div className="pt-[60px]">
          <MissionLog />
          <Hero />
          <Profile />
          <Education />
          <Projects />
          <Skills />
          <Preparation />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollOrbit />
    </div>
  );
}

export default App;
