import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Certifications/>
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;