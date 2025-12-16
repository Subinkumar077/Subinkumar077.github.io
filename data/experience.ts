export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Founder & Full-Stack Developer",
    company: "InfiniteStudioX",
    period: "2023 — Present",
    description:
      "Building MVPs, Web Apps, and DeFi solutions. Founder of InfiniteStudioX, specializing in Web Development, Web3, DeFi, and App Development. Focused on creating MVPs with exceptional design and functionality.",
    type: "experience",
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 — Present",
    description:
      "Developed websites for clients in lifestyle, tech, and design industries.",
    type: "experience",
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Various Companies",
    period: "2021 — 2022",
    description: "Gained experience in front-end and back-end development.",
    type: "experience",
  },
  {
    id: 4,
    role: "Open Source Contributor",
    company: "GitHub",
    period: "2020 — Present",
    description:
      "Contributed to various open-source projects and learned best practices.",
    type: "experience",
  },
];

export const educationData: Experience[] = [
  {
    id: 1,
    role: "Bachelor of Technology in Computer Science",
    company: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
    period: "2020 — 2024",
    description:
      "I am currently doing my Bachelors in computer Science. I enjoy learning about developement technologies and am currently learning Next.js and TypeScript.",
    type: "education",
  },
  {
    id: 2,
    role: "Higher Secondary Certificate",
    company: "Kendriya Vidyalaya No.1, AFS, Tambaram, Chennai",
    period: "2018 — 2020",
    description: "",
    type: "education",
  },
];
