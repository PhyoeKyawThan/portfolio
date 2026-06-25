import Profile from "../components/Profile";
import { techStacksData } from "../data/techStacksData";

export default function Home() {
  const floatingTech = techStacksData.filter(tech => 
    ["React", "Laravel", "Django", "Docker", "TypeScript", "MySQL"].includes(tech.name)
  );

  return (
    <section className="animate-fadeIn flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-4 md:py-0">
      <div className="w-full flex-1 space-y-5 text-center md:text-left">
        <header className="space-y-2 flex flex-col items-center md:items-start">
          <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
            Available for Opportunities
          </p>
          <div className="md:hidden my-6">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <Profile />
              <div className="absolute inset-[-24px] rounded-full animate-orbit pointer-events-none">
                {floatingTech.map((tech, index) => {
                  const angle = (index * 360) / floatingTech.length;
                  return (
                    <div
                      key={`mobile-${tech.name}`}
                      className="absolute w-8 h-8 p-1.5 rounded-lg bg-slate-950/90 border border-slate-800 backdrop-blur-sm shadow-md"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${angle}deg) translate(96px) rotate(-${angle}deg)`,
                      }}
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-full h-full object-contain animate-counterOrbit" 
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Hello, I'm <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent [-webkit-background-clip:text]">
              Phyoe Kyaw Than
            </span>
          </h1>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-200">
            Full-Stack Developer from Myanmar
          </h2>
        </header>

        <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mx-auto md:mx-0 text-justify md:text-left">
          Welcome to my personal portfolio website! I am a passionate developer with expertise in building dynamic, high-performance web applications and backend systems. Explore my projects, and let's build something great together.
        </p>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
          <button onClick={() => document.getElementById('projects-btn')?.click()} className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
            View My Work
          </button>
          <button onClick={() => document.getElementById('contact-btn')?.click()} className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-700 rounded-md hover:text-white hover:bg-slate-900 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-auto items-center justify-center pr-8 lg:pr-12">
        <div className="relative md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
          <div className="z-10 relative">
            <Profile />
          </div>
          <div className="absolute inset-0 rounded-full animate-orbit pointer-events-none z-20">
            {floatingTech.map((tech, index) => {
              const angle = (index * 360) / floatingTech.length;
              const radius = window.innerWidth >= 1024 ? 170 : 150; 
              
              return (
                <div
                  key={`desktop-${tech.name}`}
                  className="absolute w-10 h-10 p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:border-emerald-500/50 transition-colors duration-300 pointer-events-auto group cursor-help"
                  title={tech.name}
                  style={{
                    top: "50%",
                    left: "50%",
                    margin: "-20px", 
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} floating`}
                    className="w-full h-full object-contain animate-counterOrbit group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
          <div className="absolute inset-[-20px] rounded-full border border-dashed border-slate-800/40 animate-[spin_80s_linear_infinite] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}