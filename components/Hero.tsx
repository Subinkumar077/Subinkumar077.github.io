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
            I build <span className="text-pink-400">innovative digital solutions</span> and teach others to amplify their{" "}
            <span className="text-pink-400">digital presence</span> through{" "}
            <span className="text-pink-400">code, design, and content</span>.
          </p>
          
          <div className="flex flex-col gap-1 text-base">
            <p>
              <span className="text-pink-400 font-medium">Founder</span> @{" "}
              <Link
                href="https://www.infinitestudiox.art/"
                target="_blank"
                className="hover:text-pink-400 transition-colors"
              >
                InfiniteStudioX
              </Link>
            </p>
            <a
              href="mailto:xharish52@gmail.com"
              className="text-neutral-400 hover:text-pink-400 transition-colors w-fit"
            >
              xharish52@gmail.com
            </a>
          </div>

          <p>
            <Link
              href="https://calendly.com/xharish52/30min"
              target="_blank"
              className="text-pink-400 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-4"
            >
              Book a Call
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
