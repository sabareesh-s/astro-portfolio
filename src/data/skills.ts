// Grouped skills / tech stack, surfaced as pills on the landing page.
type SkillGroup = {
  label: string;
  items: string[];
};

const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Astro"],
  },
  {
    label: "Styling & UI",
    items: ["Tailwind CSS", "Material UI", "Headless UI", "Storybook", "GSAP"],
  },
  {
    label: "No-code & Design",
    items: ["Webflow", "Figma", "SEO"],
  },
  {
    label: "Backend & Tools",
    items: ["Node.js", "MongoDB", "Firebase", "Git", "Postman"],
  },
];

export default skills;
