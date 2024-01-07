import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ProjectProvider } from "./context/Projects";
import { IconProvider } from "./context/Icons";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    const app = document.querySelector("#app");
    app.setAttribute("theme", theme);
  }, [theme]);

  return (
    <section id="app">
      <section id="Portfolio">
        <Nav setTheme={setTheme} theme={theme} />
        <Header theme={theme} />
        <About />
        <IconProvider>
          <ProjectProvider>
            <Projects />
          </ProjectProvider>
          <Skills theme={theme} />
        </IconProvider>
        <Contact />
        <Footer />
      </section>
    </section>
  );
}

export default App;
