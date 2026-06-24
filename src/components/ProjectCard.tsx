import type { Project } from "../sections/Projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    onReadDetails: (project: Project) => void;
}

export default function ProjectCard({ project, index, onReadDetails }: ProjectCardProps) {
    const hasSource = !!project.githubUrl || (project.githubUrls && project.githubUrls.length > 0);

    return (
        <article
            className="group relative flex flex-col justify-between rounded-xl p-[1px] bg-slate-900/40 opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
        >
            <div className="absolute inset-0 -z-10 hidden group-hover:block pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-xl border border-emerald-400/50 bg-emerald-500/5 animate-wave" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-xl border border-cyan-400/40 bg-cyan-500/5 animate-wave [animation-delay:1.5s]" />
            </div>

            <div className="flex-1 flex flex-col justify-between rounded-[11px] bg-slate-950 h-full overflow-hidden backdrop-blur-sm border border-slate-800/80 group-hover:border-emerald-500/30 transition-colors duration-300">
                <div className="aspect-video w-full overflow-hidden bg-slate-950 relative border-b border-slate-800/50 flex items-center justify-center">
                    {project.status === 'in-progress' && (
                        <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-md">
                            In Progress
                        </div>
                    )}

                    {project.image && project.image.trim() !== "" ? (
                        <img
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            loading="lazy"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center gap-2 text-slate-600 group-hover:text-emerald-500/50 transition-colors duration-300">
                            {hasSource ? (
                                <svg className="w-12 h-12 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            ) : (
                                <svg className="w-12 h-12 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0V9m0 0 3 3m-3-3-3 3" />
                                </svg>
                            )}
                            <span className="text-xs font-mono tracking-wider uppercase opacity-60">
                                {project.status === 'in-progress' ? 'Active Dev' : 'Source Available'}
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex-1 flex flex-col justify-between p-5 space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors duration-200">
                            {project.title}
                        </h3>
                        <div>
                            <p className="text-slate-400 text-sm leading-relaxed text-justify line-clamp-3">
                                {project.description}
                            </p>
                            <button
                                onClick={() => onReadDetails(project)}
                                className="mt-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                            >
                                Read Full Details →
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 text-xs font-medium rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 text-sm font-semibold pt-1">
                            {project.githubUrls && project.githubUrls.length > 0 ? (
                                <span className="text-slate-500 cursor-default flex items-center gap-1">
                                    {project.githubUrls.length} Components
                                </span>
                            ) : project.githubUrl ? (
                                <a
                                    href={project.githubUrl}
                                    className="text-slate-400 hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Codebase
                                </a>
                            ) : null}

                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}