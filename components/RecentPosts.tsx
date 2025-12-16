import { Calendar, Clock, Database, Linkedin, ScanLine } from "lucide-react";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <section id="blog" className="mt-32 lg:pl-12 relative">
      <h2 className="text-3xl font-geist font-light tracking-tight text-white mb-12">
        Most recent posts
      </h2>

      <div className="flex flex-col gap-10">
        {/* Post 1 */}
        <Link
          href="#"
          className="group flex flex-col md:flex-row gap-6 items-start hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors"
        >
          <div className="w-full md:w-48 aspect-video bg-neutral-900 border border-white/10 rounded-lg overflow-hidden shrink-0 relative">
            {/* Thumb */}
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
              <Database className="text-neutral-700 w-8 h-8" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
              My Journey Building Apps with Coinbase SDK and Daytona
            </h3>
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-geist">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> December 27, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 3 min read
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-light line-clamp-2 mt-1">
              I decided to attempt the 023: Take Daytona for a spin challenge
              and in this blog, I will be sharing my experience with Daytona.
            </p>
            <div className="flex gap-2 text-xs text-pink-600 mt-1">
              <span>#webdev</span> <span>#coinbase</span> <span>#daytona</span>
            </div>
          </div>
        </Link>

        {/* Post 2 */}
        <Link
          href="#"
          className="group flex flex-col md:flex-row gap-6 items-start hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors"
        >
          <div className="w-full md:w-48 aspect-video bg-neutral-900 border border-white/10 rounded-lg overflow-hidden shrink-0 relative">
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2">
                <div className="w-8 h-6 bg-neutral-800 rounded-sm"></div>
                <div className="w-8 h-6 bg-neutral-800 rounded-sm"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
              How To Craft a Winning Hackathon PPT in 25 Minutes
            </h3>
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-geist">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> November 17, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 2 min read
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-light line-clamp-2 mt-1">
              Learn how to create winning hackathon presentations in just 25
              minutes. Follow these steps to make a great impact with your next
              hackathon project.
            </p>
            <div className="flex gap-2 text-xs text-pink-600 mt-1">
              <span>#ai</span> <span>#hackathon</span>
            </div>
          </div>
        </Link>

        {/* Post 3 */}
        <Link
          href="#"
          className="group flex flex-col md:flex-row gap-6 items-start hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors"
        >
          <div className="w-full md:w-48 aspect-video bg-neutral-900 border border-white/10 rounded-lg overflow-hidden shrink-0 relative">
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
              <ScanLine className="text-neutral-700 w-8 h-8" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
              The Ultimate AI for Segmenting Anything, Anywhere
            </h3>
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-geist">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> September 30, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 5 min read
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-light line-clamp-2 mt-1">
              Discover META's revolutionary Segment Anything Model (SAM), an AI
              model capable of identifying and outlining any object in an image
              effortlessly.
            </p>
            <div className="flex gap-2 text-xs text-pink-600 mt-1">
              <span>#ml</span> <span>#image-segmentation</span>
            </div>
          </div>
        </Link>

        {/* Post 4 */}
        <Link
          href="#"
          className="group flex flex-col md:flex-row gap-6 items-start hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors"
        >
          <div className="w-full md:w-48 aspect-video bg-neutral-900 border border-white/10 rounded-lg overflow-hidden shrink-0 relative">
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
              <Linkedin className="text-neutral-700 w-8 h-8" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-white group-hover:text-pink-400 transition-colors">
              LinkedIn Scraping with Python and Proxycurl API
            </h3>
            <div className="flex items-center gap-3 text-xs text-neutral-500 font-geist">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> August 21, 2024
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 3 min read
              </span>
            </div>
            <p className="text-sm text-neutral-400 font-light line-clamp-2 mt-1">
              Learn how to scrape LinkedIn profiles using Python and Proxycurl
              API, including setup, API configuration, and handling responses.
            </p>
            <div className="flex gap-2 text-xs text-pink-600 mt-1">
              <span>#web-scraping</span> <span>#python</span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
