type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "sabareesh1221@gmail.com",
  title: "Hi, I’m Sabareesh 👋",
  // profile: "./profile.webp",
  description:
    "Welcome to my portfolio! I'm Sabareesh S, a passionate *Front-end developer* with a keen eye for design. My journey in web development has allowed me to craft visually stunning and user-friendly web pages using *HTML*. I am skilled in using tools like *TypeScript*, *React*, *Next.js*, *Tailwind CSS*, *Material UI*, and other frontend libraries. Additionally, I have experience with *Storybook* and *Three.js*, which allow me to design interactive and visually appealing user interfaces. Explore my work to see how I blend creativity and code, utilizing these technologies, to bring ideas to life. Let's connect and collaborate on your next project!",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sabareesh-s/",
    },
    {
      label: "Github",
      link: "https://github.com/sabareesh-s",
    },
  ],
};

export default presentation;
