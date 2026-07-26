type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  phone: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "sabareesh1221@gmail.com",
  phone: "+91 6238756780",
  title: "Hey, I’m Sabareesh.",
  // profile: "./profile.webp",
  description:
    "A web developer based in Bangalore with a keen eye for detail. I build marketing sites end to end in Webflow, from layout to GSAP motion to SEO, and put together fast, polished interfaces in React, Next.js, TypeScript and Tailwind. I build 3D on the web with Three.js and handle the full-stack side too. Currently building the web at Alaan.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sabareesh-s/",
    },
    {
      label: "Github",
      link: "https://github.com/sabareesh-s",
    },
    {
      label: "WhatsApp",
      link: "https://wa.me/916238756780?text=Hi%20Sabareesh!%20Saw%20your%20portfolio.",
    },
  ],
};

export default presentation;
