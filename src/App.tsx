import { About } from './components/About';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import Skills from './components/Skill';
import Testimonials from './components/Testimonials';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications/>
        <Testimonials/>
        <SpeedInsights />
      </main>
      <Footer />
    </div>
  );
}

export default App;