import { projectsData } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="mt-32 lg:pl-12 relative">
      <h2 className="text-3xl font-geist font-light tracking-tight text-white mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projectsData.map((project) => (
          <div key={project.id} className="group flex flex-col gap-5">
            <div className="relative w-full aspect-video bg-neutral-900 border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all duration-300">
              {/* Image */}
              <div className="absolute inset-0 bg-neutral-900">
                <img
                  src={project.bgimage}
                  alt={project.Name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-normal text-white mb-1">
                {project.Name}
              </h3>
              {project.Technologies && (
                <p className="text-xs text-pink-500 font-geist mb-3">
                  {project.Technologies.join(" / ")}
                </p>
              )}
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-4">
                {project.Description}
              </p>
              <div className="flex gap-4 text-xs font-medium">
                <Link
                  href={project.LinkGit}
                  className="flex items-center gap-1.5 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                </Link>
                {/* 
                  Note: The source data only had 'LinkGit' which seemed to be the live link.
                  There was no separate repo link in the data provided.
                  Disabling this for now or pointing to #
                */}
                <Link
                  href="#"
                  className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-500 transition-colors cursor-not-allowed"
                >
                  <Github className="w-3.5 h-3.5" /> Repo Url
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
