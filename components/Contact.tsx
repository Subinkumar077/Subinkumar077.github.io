import {
  Coffee,
  Github,
  Linkedin,
  Twitter
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
                href="mailto:xharish52@gmail.com"
                className="text-pink-400 hover:text-white transition-colors"
              >
                xharish52@gmail.com
              </a>
            </p>

            <div className="pt-4">
              <p className="text-sm text-white mb-4">Follow me</p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="https://github.com/MohammadHarish521"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mdharish84/"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://x.com/Harish_521"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-black hover:text-white hover:border-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://topmate.io/mohd_harish10"
                  title="Topmate"
                  className="w-10 h-10 rounded border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all duration-300"
                >
                  <Coffee className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-white mb-4">Let's Connect</p>
                 <Link
                  href="https://calendly.com/xharish52/30min"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors w-full md:w-auto"
                >
                  <Coffee className="w-4 h-4 mr-2" /> Book a call
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
