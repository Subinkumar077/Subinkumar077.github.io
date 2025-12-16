import {
  Atom,
  Box,
  Braces,
  Code2,
  Container,
  Database,
  DatabaseBackup,
  Figma,
  FileCode,
  Globe,
  Package,
  Server,
  Wind,
  Zap,
} from "lucide-react";

export default function ToolsMarquee() {
  return (
    <section className="mt-32 lg:pl-12 overflow-hidden w-full relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

      <h2 className="text-lg font-geist font-light text-white mb-8 px-1">
        Technologies & Tools
      </h2>

      {/* Row 1 */}
      <div className="flex gap-4 w-max animate-scroll hover:[animation-play-state:paused] mb-4">
        <div className="flex gap-4">
          <ToolItem icon={FileCode} label="CSS" groupHoverColor="text-white" />
          <ToolItem
            icon={Wind}
            label="Tailwind"
            groupHoverColor="text-cyan-400"
          />
          <ToolItem
            icon={Braces}
            label="JavaScript"
            groupHoverColor="text-yellow-400"
          />
          <ToolItem icon={Atom} label="React" groupHoverColor="text-blue-400" />
          <ToolItem icon={Zap} label="Next.js" groupHoverColor="text-white" />
          <ToolItem
            icon={Database}
            label="Node.js"
            groupHoverColor="text-green-400"
          />
          <ToolItem
            icon={Code2}
            label="Python"
            groupHoverColor="text-blue-500"
          />
        </div>
        {/* Duplicate */}
        <div className="flex gap-4">
          <ToolItem icon={FileCode} label="CSS" groupHoverColor="text-white" />
          <ToolItem
            icon={Wind}
            label="Tailwind"
            groupHoverColor="text-cyan-400"
          />
          <ToolItem
            icon={Braces}
            label="JavaScript"
            groupHoverColor="text-yellow-400"
          />
          <ToolItem icon={Atom} label="React" groupHoverColor="text-blue-400" />
          <ToolItem icon={Zap} label="Next.js" groupHoverColor="text-white" />
          <ToolItem
            icon={Database}
            label="Node.js"
            groupHoverColor="text-green-400"
          />
          <ToolItem
            icon={Code2}
            label="Python"
            groupHoverColor="text-blue-500"
          />
        </div>
      </div>

      {/* Row 2 (Reverse) */}
      <div className="flex gap-4 w-max animate-scroll-reverse hover:[animation-play-state:paused]">
        {/* Content duplicated for seamless loop */}
        <div className="flex gap-4">
          <ToolItem
            icon={Container}
            label="Docker"
            groupHoverColor="text-blue-600"
          />
          <ToolItem icon={Box} label="Solidity" groupHoverColor="text-white" />
          <ToolItem
            icon={DatabaseBackup}
            label="PostgreSQL"
            groupHoverColor="text-blue-300"
          />
          <ToolItem icon={Server} label="Bun" groupHoverColor="text-white" />
          <ToolItem
            icon={Package}
            label="Rust"
            groupHoverColor="text-orange-400"
          />
          <ToolItem icon={Globe} label="Vercel" groupHoverColor="text-white" />
          <ToolItem
            icon={Figma}
            label="Figma"
            groupHoverColor="text-pink-400"
          />
        </div>
        {/* Duplicate */}
        <div className="flex gap-4">
          <ToolItem
            icon={Container}
            label="Docker"
            groupHoverColor="text-blue-600"
          />
          <ToolItem icon={Box} label="Solidity" groupHoverColor="text-white" />
          <ToolItem
            icon={DatabaseBackup}
            label="PostgreSQL"
            groupHoverColor="text-blue-300"
          />
          <ToolItem icon={Server} label="Bun" groupHoverColor="text-white" />
          <ToolItem
            icon={Package}
            label="Rust"
            groupHoverColor="text-orange-400"
          />
          <ToolItem icon={Globe} label="Vercel" groupHoverColor="text-white" />
          <ToolItem
            icon={Figma}
            label="Figma"
            groupHoverColor="text-pink-400"
          />
        </div>
      </div>
    </section>
  );
}

function ToolItem({
  icon: Icon,
  label,
  groupHoverColor,
}: {
  icon: React.ElementType;
  label: string;
  groupHoverColor: string;
}) {
  return (
    <div className="w-32 h-20 bg-surface border border-white/5 rounded-lg flex flex-col items-center justify-center gap-2 group hover:border-white/20 transition-colors">
      <Icon
        className={`w-5 h-5 text-neutral-400 group-hover:${groupHoverColor} transition-colors`}
      />
      <span className="text-xs font-geist text-neutral-500">{label}</span>
    </div>
  );
}
