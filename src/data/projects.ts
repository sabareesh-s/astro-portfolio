export type Project = {
  title: string;
  techs: string[];
  link?: string;
  isComingSoon?: boolean;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Tickete payment page UI",
    techs: ["ReactJS (NextJS)", "TypeScript", "TailwindCSS"],
    link: "https://unrivaled-beijinho-c3171e.netlify.app/",
    github: "https://github.com/sabareesh-s/tickete-payment-page"
  },
  {
    title: "Todo app with authentication",
    techs: ["ReactJS", "TypeScript", "TailwindCSS", "Firebase"],
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
    title: "3D landing page",
    techs: ["ReactJS", "Three.js", "React Three Fiber (R3F)"],
    github: "https://github.com/sabareesh-s/threejs-webpack-starter/commits/master",
  },
  {
    title: "Book search with OpenLibrary API",
    techs: ["HTML", "CSS", "API Integration"],
    github: "https://github.com/sabareesh-s/author-search",
  },
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

export default projects;
