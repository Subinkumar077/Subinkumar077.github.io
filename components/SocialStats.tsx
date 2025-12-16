export default function SocialStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-pink-500/20 transition-colors">
        <span className="text-3xl font-bold text-white mb-1">9M</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
          Impressions
        </span>
        <span className="text-xs text-green-500 mt-2">↑1M%</span>
      </div>
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-pink-500/20 transition-colors">
        <span className="text-3xl font-bold text-white mb-1">6.2%</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
          Engagement Rate
        </span>
        <span className="text-xs text-green-500 mt-2">↑30%</span>
      </div>
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-pink-500/20 transition-colors">
        <span className="text-3xl font-bold text-white mb-1">113.1K</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
          Likes
        </span>
        <span className="text-xs text-green-500 mt-2">↑1M%</span>
      </div>
      <div className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-pink-500/20 transition-colors">
        <span className="text-3xl font-bold text-white mb-1">115.6K</span>
        <span className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
          Profile Visits
        </span>
        <span className="text-xs text-green-500 mt-2">↑964K%</span>
      </div>
    </div>
  );
}
