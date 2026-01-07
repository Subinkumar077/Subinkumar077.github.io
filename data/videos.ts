import { LucideIcon, Youtube } from "lucide-react";

export interface WorkshopVideo {
  title: string;
  link: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  image: string;
  duration?: string;
  views?: string;
}

export const workshopVideos: WorkshopVideo[] = [
  {
    title: "GitBash End to End Workshop",
    link: "https://youtu.be/LAgteV10_38?si=UmKVHwW_Fd5McVPR",
    description: "A complete workshop covering GitBash from start to finish.",
    icon: Youtube,
    tags: ["#git", "#workflow", "#terminal"],
    image: "/assets/gitbash.png",
    duration: "45 min",
    views: "1.2K",
  },
  {
    title: "HTML Workshop | Part 1",
    link: "https://youtu.be/1l9ceJZvkGo",
    description: "My first Workshop video covering the fundamentals of HTML.",
    icon: Youtube,
    tags: ["#html", "#web-dev", "#basics"],
    image: "/assets/html.png",
    duration: "32 min",
    views: "850",
  },
  {
    title: "HTML Workshop | Part 2",
    link: "https://youtu.be/b5ttIP84QpI",
    description: "Continuing with the rest of the HTML concepts.",
    icon: Youtube,
    tags: ["#html", "#frontend", "#tutorial"],
    image: "/assets/html2.png",
    duration: "28 min",
    views: "620",
  },
];
