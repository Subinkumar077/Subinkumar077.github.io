import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 mt-10 lg:pl-12">
      {/* Image */}
      <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-neutral-800">
        <Image
          src="/assets/face.jpg"
          alt="Mohammad Harish"
          fill
          className="object-cover"
        />
      </div>

      {/* Name and Title */}
      <div>
        <h1 className="text-4xl lg:text-7xl font-geist font-normal tracking-tight text-white mb-4">
          Mohammad Harish
        </h1>
        <p className="text-sm font-geist text-neutral-500 uppercase tracking-widest">
          Builder • Agency Owner • Full Stack Developer
        </p>
      </div>

      {/* Description Content */}
      <div className="max-w-3xl flex flex-col gap-6 text-lg font-light text-neutral-300 leading-relaxed">
        <p>
          I build <span className="text-pink-400">innovative digital solutions</span>{" "}
          and teach others to amplify their{" "}
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
    </section>
  );
}
