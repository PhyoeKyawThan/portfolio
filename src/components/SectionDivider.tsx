export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center my-8 md:my-12 w-full overflow-hidden select-none">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-slate-800/60 animate-expand" />
      <div className="relative mx-3 flex items-center justify-center">
        <div className="absolute w-6 h-6 rounded-full bg-emerald-500/5 blur-sm animate-pulse" />
        <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-emerald-400 to-cyan-400 bg-[length:200%_auto] animate-shimmer rounded-[2px]" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800/60 to-transparent animate-expand" />
    </div>
  );
}