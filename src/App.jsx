import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <section id="Portfolio">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
