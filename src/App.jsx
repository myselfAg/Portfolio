import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Education from "./components/Education"

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
