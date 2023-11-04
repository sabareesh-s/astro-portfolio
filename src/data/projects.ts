export type Project = {
  title: string;
  techs: string[];
  link?: string;
  isComingSoon?: boolean;
  github?: string;
};

const projects: Project[] = [
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
    link: "https://reactjs-weather-search-app.netlify.app/",
  }
  // {
  //   title: "Portfolio / Template",
  //   techs: ["Astro"],
  //   link: "/",
  //   isComingSoon: true,
  // },
];

export default projects;
