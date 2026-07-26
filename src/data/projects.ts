export type Project = {
  title: string;
  description?: string;
  image?: string;
  techs: string[];
  link?: string;
  isComingSoon?: boolean;
  github?: string;
  note?: string;
};

const projects: Project[] = [
  {
    title: "Rose Island",
    description:
      "Cinematic landing page telling the story of the 1968 micronation.",
    image: "/work/rose-island.jpeg",
    techs: ["Webflow", "GSAP", "Animation"],
    link: "https://rosa-ef.webflow.io/",
    note: "Recreated an existing site from scratch, to learn.",
  },
  {
    title: "Ariane Launcher",
    description:
      "Interactive, space-themed page for a modular rocket launcher.",
    image: "/work/ariane.jpeg",
    techs: ["Webflow", "GSAP", "Interaction"],
    link: "https://ariane-space-ed.webflow.io/",
    note: "Recreated an existing site from scratch, to learn.",
  },
  {
    title: "Kanban Board UI",
    techs: ["ReactJS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/sabareesh-s/kanban-board",
    link: "https://rococo-ganache-5c2d07.netlify.app/",
  },
  {
    title: "JavaScript Crypto Widget",
    techs: ["Vanilla JavaScript","HTML5 + CSS3"],
    github: "https://github.com/sabareesh-s/crypto-widget"
  },
  {
    title: "Tickete payment page UI",
    techs: ["ReactJS (NextJS)", "TypeScript", "Tailwind CSS"],
    link: "https://unrivaled-beijinho-c3171e.netlify.app/",
    github: "https://github.com/sabareesh-s/tickete-payment-page"
  },
  {
    title: "Todo app with authentication",
    techs: ["ReactJS", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://graceful-lebkuchen-e3c284.netlify.app/",
    github: "https://github.com/sabareesh-s/todolist",
  },
  {
    title: "Weather app",
    techs: ["ReactJS", "Styled components 💅"],
    link: "https://reactjs-weather-search-app.netlify.app/",
    github: "https://github.com/sabareesh-s/todolist",
  },
  {
    title: "3D rendering with Three.js",
    techs: ["ReactJS", "Three.js", "React Three Fiber (R3F)"],
    github: "https://github.com/sabareesh-s/threejs-webpack-starter/commits/master",
    link: "https://grand-youtiao-dd3519.netlify.app",
  }
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

export default projects;
