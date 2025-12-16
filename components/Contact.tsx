import {
    Coffee,
    Gamepad2,
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="mt-32 lg:pl-12 mb-10 relative">
      <h2 className="text-3xl font-geist font-light tracking-tight text-white mb-10">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <p className="text-base text-neutral-400 font-light leading-relaxed">
              If you have any inquiries, please feel free to reach out. You can
              contact me via email at <br />
              <a
                href="mailto:hi@ayushworks.com"
                className="text-pink-400 hover:text-white transition-colors"
              >
                hi@ayushworks.com
              </a>
            </p>

            <div className="pt-4">
              <p className="text-sm text-white mb-4">Follow me</p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2] transition-all duration-300"
                >
                  <Gamepad2 className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                >
                  <Youtube className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white hover:border-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                >
                  <Coffee className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500/50 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Phone No"
                className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500/50 transition-colors"
              />
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500/50 transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-pink-500/50 transition-colors resize-none"
            ></textarea>
          </div>
          <button
            type="button"
            className="bg-neutral-100 hover:bg-white text-black font-medium py-3 rounded text-sm transition-colors mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
