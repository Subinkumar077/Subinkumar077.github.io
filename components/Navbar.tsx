import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center text-sm font-geist font-light z-50 relative">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </Link>
      <div className="flex gap-8 backdrop-blur-md bg-background/50 px-6 py-2 rounded-full border border-white/5">
        <Link href="/" className="text-white hover:text-pink-400 transition-colors">
          Home
        </Link>
        <Link
          href="/about"
          className="text-neutral-500 hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-neutral-500 hover:text-white transition-colors"
        >
          Projects
        </Link>
       
      </div>
    </nav>
  );
}

