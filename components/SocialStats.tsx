export default function SocialStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-cyan-500/20 transition-colors">
        <span className="text-3xl font-figtree font-normal tracking-tight text-white mb-1">10.8M</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium font-figtree">
          Impressions
        </span>
        <span className="text-xs text-green-400 mt-2 font-figtree">↑1M%</span>
      </div>
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-violet-500/20 transition-colors">
        <span className="text-3xl font-figtree font-normal tracking-tight text-white mb-1">6.2%</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium font-figtree">
          Engagement Rate
        </span>
        <span className="text-xs text-green-400 mt-2 font-figtree">↑30%</span>
      </div>
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/20 transition-colors">
        <span className="text-3xl font-figtree font-normal tracking-tight text-white mb-1">113.1K</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium font-figtree">
          Likes
        </span>
        <span className="text-xs text-green-400 mt-2 font-figtree">↑1M%</span>
      </div>
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-pink-500/20 transition-colors">
        <span className="text-3xl font-figtree font-normal tracking-tight text-white mb-1">151.6K</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium font-figtree">
          Profile Visits
        </span>
        <span className="text-xs text-green-400 mt-2 font-figtree">↑964K%</span>
      </div>
    </div>
  );
}
