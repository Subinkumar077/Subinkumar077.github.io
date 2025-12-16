import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-10 lg:pl-12">
      {/* Text Content */}
      <div className="lg:col-span-7 flex flex-col gap-8 pt-4">
        <div>
          <h1 className="text-4xl lg:text-6xl font-geist font-normal tracking-tight text-white mb-3">
            Mohammad Harish
          </h1>
          <p className="text-xs font-geist text-neutral-500 uppercase tracking-widest">
            Builder • Agency Owner • Full Stack Developer
          </p>
        </div>

        <div className="flex flex-col gap-6 text-lg font-light text-neutral-300 leading-relaxed">
          <p>
            I&apos;m a self-driven builder from India focused on shipping real
            products and owning my work end to end. I started with frontend and
            full stack development, faced early failures, got fired, and used
            that phase to build resilience instead of quitting.
          </p>
          <p>
            Since then, I&apos;ve moved from small freelance gigs to{" "}
            <span className="text-white font-medium">
              running my own agency
            </span>
            , delivering products for clients and building tools and design
            assets of my own.
          </p>
          <p>
            I build in public, sharing honest lessons from wins, mistakes, and
            pivots while growing an audience along the way. I value{" "}
            <span className="text-pink-400">
              freedom, ownership, and long-term leverage
            </span>
            .
          </p>
          <p>
            Always building, always learning,{" "}
            <span className="text-white border-b border-white/20 pb-0.5">
              open to the right conversations
            </span>
            .{" "}
            <Link
              href="#contact"
              className="text-white hover:text-pink-400 transition-colors underline decoration-neutral-700 underline-offset-4"
            >
              Let&apos;s talk.
            </Link>
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="lg:col-span-5 relative mt-6 lg:mt-0">
        <div className="relative w-full aspect-4/5 lg:aspect-square group">
          <div className="absolute -inset-0.5 rounded-2xl bg-lineaer-to-b from-pink-500/20 to-transparent opacity-50"></div>
          <div className="relative h-full w-full rounded-2xl overflow-hidden bg-surface border border-white/10">
            <img
              src="/assets/harish.jpg"
              alt="Mohammad Harish"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
