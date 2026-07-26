import type { Project } from "@/data/projects";

// Live client sites designed & built in Webflow. First item renders featured.
const clientWork: Project[] = [
  {
    title: "Alaan",
    description: "Marketing site for Alaan, an AI-native corporate spend platform.",
    image: "/work/alaan-supercard.jpeg",
    techs: ["Webflow", "GSAP", "SEO"],
    link: "https://www.alaan.com/supercard",
  },
  {
    title: "SugarStrings.ai",
    description:
      "At-home DNA testing service. Built the Next.js frontend plus the API endpoints and MongoDB integration.",
    image: "/work/sugarstrings.jpeg",
    techs: ["Next.js", "MongoDB", "API Routes"],
    link: "https://www.sugarstrings.ai/",
  },
  {
    title: "Stellaris Venture Partners",
    description:
      "Marketing site for an early-stage VC firm backing Indian founders.",
    image: "/work/stellaris.jpeg",
    techs: ["Webflow", "GSAP", "SEO"],
    link: "https://www.stellarisvp.com/",
  },
  {
    title: "IndigoEdge",
    description: "Website for an investment bank that partners with founders.",
    image: "/work/indigoedge.jpeg",
    techs: ["Webflow", "SEO"],
    link: "https://www.indigoedge.com/",
  },
  {
    title: "TLH Law",
    description:
      "Corporate & commercial law firm site with a clean, credible feel.",
    image: "/work/tlh.jpeg",
    techs: ["Webflow"],
    link: "https://tlh.law/",
  },
  {
    title: "Sickick",
    description: "Bold, animated official site for the dance-music artist.",
    image: "/work/sickick.jpeg",
    techs: ["Webflow", "GSAP"],
    link: "https://www.sickick.com/",
  },
  {
    title: "House of Bindu",
    description: "Vibrant brand site for an Indian snacks & beverages company.",
    image: "/work/bindu.jpeg",
    techs: ["Webflow"],
    link: "https://houseofbindu.com/",
  },
];

export default clientWork;
