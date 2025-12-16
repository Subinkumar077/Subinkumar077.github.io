import { Experience } from "@/data/experience";

interface ExperienceItemProps {
  item: Experience;
}

export default function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-white/10 pl-8 pb-12 relative last:pb-0">
      <div className="absolute top-0 -left-[9px] w-4 h-4 bg-background border-2 border-pink-500 rounded-full"></div>
      <div className="md:w-1/3">
        <span className="text-sm font-geist font-medium text-pink-500 mb-2 block">
          {item.period}
        </span>
        <h3 className="text-lg font-normal text-white">{item.company}</h3>
      </div>
      <div className="md:w-2/3">
        <h4 className="text-xl font-medium text-neutral-200 mb-2">
          {item.role}
        </h4>
        <p className="text-neutral-400 font-light leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
