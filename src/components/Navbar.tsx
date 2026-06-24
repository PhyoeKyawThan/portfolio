import { useState, useEffect } from 'react';
import { type PageType, PAGES } from '../types/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<PageType>('home');

  useEffect(() => {
    const observers = PAGES.map((page) => {
      const element = document.getElementById(page);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(page);
          }
        },
        { rootMargin: '-15% 0px -75% 0px' }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.element);
      });
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: PageType) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 px-6 py-4 font-sans">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="inline-block text-lg font-black tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text [-webkit-background-clip:text] text-transparent select-none font-mono">
          DEVELOPER.PhyoeKyawThan
        </span>
        <ul className="hidden md:flex gap-2">
          {PAGES.map((page) => (
            <li key={page}>
              <a
                href={`#${page}`}
                onClick={(e) => handleScroll(e, page)}
                className={`px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 rounded-md capitalize block ${activeSection === page
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden animate-fadeIn mt-4 border-t border-slate-800 pt-4">
          <ul className="flex flex-col gap-2">
            {PAGES.map((page) => (
              <li key={page} className="w-full">
                <a
                  href={`#${page}`}
                  onClick={(e) => handleScroll(e, page)}
                  className={`w-full text-left px-4 py-3 text-base font-semibold tracking-wide transition-all rounded-md capitalize block ${activeSection === page
                      ? 'bg-emerald-500/10 text-emerald-400 border-l-4 border-emerald-500'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}