import About from "./pages/About"
import Experiences from "./pages/Experiences"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Studies from "./pages/Studies"

const Portfolio = () => {
  return (
    <div>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="studies"><Studies /></section>
      <section id="experiences"><Experiences /></section>
      <section id="projects"><Projects /></section>
    </div>
  )
}

export default Portfolio