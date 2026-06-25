import { techStacksData } from "../data/techStacksData";

function About() {
    return (
        <section className="animate-fadeIn space-y-12 max-w-none">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
                    About Me
                </h1>

                <div className="space-y-4 text-slate-400 text-lg leading-relaxed text-justify w-full font-sans">
                    <p>
                        Hello! I'm Phyoe Kyaw Than, a Full Stack Developer based in Myanmar and a final-year computer science student at the University of Computer Studies, Hinthada. I specialize in crafting robust backend architectures using Laravel and Django, paired with dynamic frontends using React and Tailwind CSS.
                    </p>
                    <p>
                        Beyond web development, I build cross-platform mobile apps with React Native and Expo, and I explore specialized fields like Burmese Natural Language Processing (NLP) and IoT hardware integration with ESP32. I thrive on translating complex, real-world problems into clean, scalable, and high-performance software solutions.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-sans">
                        Tech Stack & Tools
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-xl font-sans">
                        A curated toolkit of frameworks, languages, and hardware architectures I use to bring production systems to life.
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-2">
                    {techStacksData.map((tech) => (
                        <div
                            key={tech.name}
                            className="group relative flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 backdrop-blur-sm select-none"
                        >
                            <div className="relative flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-slate-950 border border-slate-800/60 p-1.5 z-10">
                                <img
                                    src={tech.logo}
                                    alt={`${tech.name} logo`}
                                    loading="lazy"
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 rounded-lg border border-emerald-500/40 pointer-events-none opacity-0 group-hover:animate-wave" />
                            </div>
                            
                            <span className="font-bold text-slate-300 text-sm tracking-wide font-sans transition-colors duration-300 group-hover:text-white z-10">
                                {tech.name}
                            </span>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.02] to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;