// import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Studies from "./components/pages/Studies";
import Experiences from "./components/pages/Experiences";
// import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto">
      <Nav />
      {/* Vertical Scroll */}
      <main className="space-y-20">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="studies">
          <Studies />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
