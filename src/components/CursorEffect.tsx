import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [clickCoords, setClickCoords] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateCoords = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".group") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsPointer(!!isInteractive);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setClickCoords({ x: e.clientX, y: e.clientY });
      setIsClicked(false);
      void updateCoords; 
      setTimeout(() => {
        setIsClicked(true);
      }, 10);
    };

    window.addEventListener("mousemove", updateCoords);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", updateCoords);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-30 select-none mix-blend-screen opacity-40 transition-transform duration-75 ease-out hidden md:block"
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) translate(-50%, -50%)`,
          background: `radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(0,0,0,0) 70%)`,
        }}
      />

      <div
        className={`fixed top-0 left-0 w-6 h-6 rounded-full border pointer-events-none z-40 select-none hidden md:block ${
          isPointer 
            ? "border-cyan-400 bg-cyan-500/10" 
            : "border-emerald-400/70"
        }`}
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          transition: "transform 0.15s ease-out, border-color 0.15s ease, background-color 0.15s ease",
        }}
      >
        <div className={`absolute inset-[7px] rounded-full transition-colors duration-150 ${isPointer ? 'bg-cyan-400' : 'bg-emerald-400'}`} />
      </div>

      {isClicked && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-40 hidden md:block"
          style={{
            transform: `translate3d(${clickCoords.x}px, ${clickCoords.y}px, 0) translate(-50%, -50%)`,
          }}
        >
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500 animate-[pulseGlow_0.4s_ease-out_forwards]" />
        </div>
      )}
    </>
  );
}