function About() {
    return (
        <section className="animate-[fadeIn_0.4s_ease-out_forwards] space-y-6 max-w-none">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                About Me
            </h1>
            
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed text-justify w-full">
                <p>
                    Hello! I'm Phyoe Kyaw Than, a Full Stack Developer based in Myanmar and a final-year computer science student at the University of Computer Studies, Hinthada. I specialize in crafting robust backend architectures using Laravel and Django, paired with dynamic frontends using React and Tailwind CSS.
                </p>
                <p>
                    Beyond web development, I build cross-platform mobile apps with React Native and Expo, and I explore specialized fields like Burmese Natural Language Processing (NLP) and IoT hardware integration with ESP32. I thrive on translating complex, real-world problems into clean, scalable, and high-performance software solutions.
                </p>
            </div>
        </section>
    );
}

export default About;