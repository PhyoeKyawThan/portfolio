import { socialsData } from '../data/socialsData';

export default function Contact() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
          Connect Matrix
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Open endpoints for architectural collaborations, full-stack pipelines, or developer inquiries.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 pt-2">
        {socialsData.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-emerald-500/30 hover:bg-slate-800/40 transition-all duration-300 group"
          >
            <div className="p-3 rounded-lg bg-slate-950 text-slate-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/5 transition-colors border border-slate-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.iconPath} />
              </svg>
            </div>
            <div className="space-y-0.5">
              <h3 className="text-sm font-mono tracking-wider uppercase text-slate-500 font-bold group-hover:text-slate-400 transition-colors">
                {social.platform}
              </h3>
              <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors break-all">
                {social.username}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}