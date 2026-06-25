import { useEffect, useState } from "react";
import { techStacksData } from "../data/techStacksData";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const techInterval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techStacksData.length);
    }, 900);

    const handleLoad = () => {
      setIsVisible(false);
      setTimeout(() => {
        clearInterval(techInterval);
        setShouldRender(false);
      }, 600);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      const fallback = setTimeout(handleLoad, 2500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
        clearInterval(techInterval);
      };
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out select-none ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none scale-105"
      }`}
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-slate-800/60" />
        <div className="absolute inset-0 rounded-full border border-t-emerald-400 border-r-cyan-400 animate-spin" />
        
        <div className="w-12 h-12 flex items-center justify-center p-1 bg-slate-950/80 rounded-full border border-slate-800/40 backdrop-blur-sm shadow-inner z-10">
          <img
            src={techStacksData[currentTechIndex].logo}
            alt={techStacksData[currentTechIndex].name}
            className="w-7 h-7 object-contain animate-[fadeIn_0.15s_ease-out]"
            key={currentTechIndex}
          />
        </div>
      </div>
      
      <span className="mt-5 text-xs font-mono tracking-[0.25em] text-slate-400 uppercase animate-pulse">
        Hold on you'r almost there...
      </span>
    </div>
  );
}