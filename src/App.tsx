// import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Experiences from "./components/pages/Experiences";
import { Skills } from "./components/pages/Skills";
import { Toaster } from "react-hot-toast";
import Contacts from "./components/pages/Contacts";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl 2xl:max-w-5xl mx-auto">
      <Toaster position="top-center" />
      <Nav />
      {/* Vertical Scroll */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experiences">
          <Experiences />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contacts />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
