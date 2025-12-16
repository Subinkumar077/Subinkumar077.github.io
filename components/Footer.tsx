import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-geist text-neutral-500 lg:pl-12">
      <div className="flex items-center gap-1">
        <span>© 2025 Developed with</span>
        <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
        <span>by Shydev</span>
      </div>
      <div className="flex gap-4">
        <Link href="#" className="hover:text-pink-400 transition-colors uppercase">
          RSS Feed
        </Link>
        <span className="text-neutral-700">/</span>
        <Link href="#" className="hover:text-pink-400 transition-colors uppercase">
          Site Map
        </Link>
      </div>
    </footer>
  );
}
