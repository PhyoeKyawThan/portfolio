import Profile from "../components/Profile";

export default function Home() {
  return (
    <section className="animate-fadeIn flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-4 md:py-0">
      <div className="w-full flex-1 space-y-5 text-center md:text-left">
        <header className="space-y-2 flex flex-col items-center md:items-start">
          <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
            Available for Opportunities
          </p>
          <div className="md:hidden my-2">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
              <Profile />
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
          <button onClick={() => {
            const projects_btn = document.getElementById('projects-btn');
            if(projects_btn){
              projects_btn.click();
            }
          }} className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20">
            View My Work
          </button>
          <button onClick={() => {
            const contact_btn = document.getElementById('contact-btn');
            if(contact_btn){
              contact_btn.click();
            }
          }} className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-700 rounded-md hover:text-white hover:bg-slate-900 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-auto items-center justify-center">
        <div className="relative md:w-64 md:h-64 lg:w-72 lg:h-72 flex items-center justify-center">
          <Profile />
        </div>
      </div>
    </section>
  );
}