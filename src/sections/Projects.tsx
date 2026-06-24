import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData, type Project } from '../data/projectsData';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="space-y-6">
            <header className="space-y-2">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                    Featured Projects
                </h2>
                <p className="text-slate-400 text-sm sm:text-base max-w-xl">
                    A targeted look at full-stack systems, mobile applications, and embedded hardware integrations.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onReadDetails={setSelectedProject}
                    />
                ))}
            </div>

            {selectedProject && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl shadow-black/50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-950 border border-slate-800 relative flex items-center justify-center">
                            {selectedProject.image && selectedProject.image.trim() !== "" ? (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center gap-2 text-slate-600">
                                    <svg className="w-16 h-16 stroke-[1.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className="space-y-5">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                    {selectedProject.title}
                                </h3>
                                {selectedProject.status === 'in-progress' && (
                                    <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                        In Progress
                                    </span>
                                )}
                            </div>

                            <p className="text-slate-300 text-sm md:text-base leading-relaxed text-justify">
                                {selectedProject.description}
                            </p>

                            {selectedProject.githubUrls && selectedProject.githubUrls.length > 0 && (
                                <div className="space-y-2 border-t border-slate-800/60 pt-4">
                                    <h4 className="text-xs font-mono tracking-wider uppercase text-slate-400 font-bold">
                                        Repository Architecture
                                    </h4>
                                    <div className="grid gap-2 sm:grid-cols-2">
                                        {selectedProject.githubUrls.map((repo, rIdx) => (
                                            <a
                                                key={rIdx}
                                                href={repo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-emerald-500/30 transition-colors group/repo"
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <svg className="w-4 h-4 text-slate-500 group-hover/repo:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.608 0 1 .874 1.7 1.3 2.1 1.75 1.57 3.285 1.117 4.084.854.092-.658.355-1.117.646-1.374-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                                    </svg>
                                                    <span className="text-sm font-semibold text-slate-300 group-hover/repo:text-white transition-colors">
                                                        {repo.label}
                                                    </span>
                                                </div>
                                                <span className="text-xs font-mono text-slate-600 group-hover/repo:text-emerald-400 transition-colors">
                                                    →
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2 border-t border-slate-800/60 pt-4">
                                <h4 className="text-xs font-mono tracking-wider uppercase text-slate-400 font-bold">
                                    Team Engine Structure
                                </h4>
                                {selectedProject.collaborators && selectedProject.collaborators.length > 0 ? (
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.collaborators.map((collab, cIdx) => (
                                            <div 
                                                key={cIdx}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-950 border border-slate-800 text-sm"
                                            >
                                                <span className="font-semibold text-slate-200">{collab.name}</span>
                                                {collab.role && (
                                                    <span className="text-xs text-slate-500 font-medium">({collab.role})</span>
                                                )}
                                                {collab.githubUrl && (
                                                    <a 
                                                        href={collab.githubUrl} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="text-slate-600 hover:text-emerald-400 transition-colors"
                                                    >
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.608 0 1 .874 1.7 1.3 2.1 1.75 1.57 3.285 1.117 4.084.854.092-.658.355-1.117.646-1.374-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-xs text-slate-500 italic">Independent production setup.</p>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-800 text-emerald-400 border border-slate-700/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-800/80 text-sm font-semibold">
                            {(!selectedProject.githubUrls || selectedProject.githubUrls.length === 0) && selectedProject.githubUrl && (
                                <a
                                    href={selectedProject.githubUrl}
                                    className="px-4 py-2 text-slate-300 border border-slate-700 hover:text-white hover:bg-slate-800 rounded-md transition-all duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Source
                                </a>
                            )}

                            {selectedProject.liveUrl && (
                                <a
                                    href={selectedProject.liveUrl}
                                    className="px-4 py-2 text-slate-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-90 rounded-md transition-all duration-200 shadow-lg shadow-emerald-500/10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}