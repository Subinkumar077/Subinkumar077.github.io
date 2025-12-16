import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-end items-center text-sm font-geist font-light z-50 relative">
      <div className="flex gap-8 backdrop-blur-md bg-background/50 px-6 py-2 rounded-full border border-white/5">
        <Link href="#" className="text-white hover:text-pink-400 transition-colors">
          Home
        </Link>
        <Link
          href="#projects"
          className="text-neutral-500 hover:text-white transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#blog"
          className="text-neutral-500 hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link
          href="#contact"
          className="text-neutral-500 hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
