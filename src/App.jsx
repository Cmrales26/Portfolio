import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { IconProvider } from './context/Icons';
import { useEffect, useState } from 'react';
import { ContactProvider } from './context/ContactContex';
import ProfesionalExperience from './components/Experience';
import Research from './components/Research';
function App() {
  const [theme, setTheme] = useState('');
  const [colorScheme, setColorScheme] = useState('system');

  useEffect(() => {
    const app = document.querySelector('#app');
    app.setAttribute('theme', theme);
  }, [theme]);

  return (
    <section id='app'>
      <section id='Portfolio'>
        <Nav
          setTheme={setTheme}
          theme={theme}
          colorScheme={colorScheme}
          setColorScheme={setColorScheme}
        />
        <Header theme={theme} />
        <About />
        <ProfesionalExperience />
        <Projects />
        <Research />
        <IconProvider>
          <Skills theme={theme} />
        </IconProvider>
        <ContactProvider>
          <Contact theme={theme} />
        </ContactProvider>
        <Footer />
      </section>
    </section>
  );
}

export default App;
