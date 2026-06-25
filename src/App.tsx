import Navbar from './components/Navbar';
import FloatingBackground from './components/FloatingBackground';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import SectionDivider from './components/SectionDivider';
import Contact from './sections/Contact';
import CursorEffect from './components/CursorEffect';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-900 overflow-x-hidden">
      <LoadingScreen />
      <FloatingBackground />
      <CursorEffect />
      
      <div className="relative z-10">
        <Navbar /> 
        <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 space-y-12 md:space-y-16">
          <section id="home" className="scroll-mt-90">
            <Home />
          </section>
          <SectionDivider />
          <section id="about" className="scroll-mt-90">
            <About />
          </section>
          <SectionDivider />
          <section id="projects" className="scroll-mt-90">
            <Projects />
          </section>
          <SectionDivider />
          <section id="contact" className="text-slate-400 min-h-[40vh] scroll-mt-90 pb-24">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;