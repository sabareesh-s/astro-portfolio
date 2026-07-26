export type Experience = {
  role: string;
  company: string;
  period: string;
  techs?: string[];
};

const experience: Experience[] = [
  {
    role: "Web Developer",
    company: "Alaan",
    period: "Present", // TODO: confirm start month/year
    techs: ["Webflow", "React", "GSAP", "SEO"],
  },
  {
    role: "Webflow Developer",
    company: "Everything Design",
    period: "Dec 2023 – 2025",
    techs: ["Webflow", "GSAP", "Next.js"],
  },
  {
    role: "Product Engineer",
    company: "OSlash",
    period: "Dec 2022 – Jul 2023",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Storybook"],
  },
  {
    role: "React Developer",
    company: "Recode AI (BelloHire)",
    period: "Jan 2022 – Nov 2022",
    techs: ["React", "Material UI", "Figma"],
  },
];

export default experience;
