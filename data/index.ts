import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Student passionate about Web Dev, Programming, and DevOps.",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-xs text-white",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.jpeg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "scroll-container lg:col-span-2 md:col-span-3 md:row-span-2 overflow-y-scroll",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning Spring Boot",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Autonomous Indoor Drone-Based Asset Management System",

    img: "/drone-project.png",

    link: "/drone-asset-management",
  },
  {
    id: 2,
    title:
      "Watermelon Ripeness Detection System Using YOLO, Audio Analysis, and Fusion Learning",

    img: "/watermelon-project.png",

    link: "/watermelon-ripeness-detection",
  },
  {
    id: 3,
    title: "TEMPEST Signal Recovery",

    img: "/tempest-project.png",

    link: "/tempest-signal-recovery",
  },
];

export const Services = [
  {
    id: 1,
    title: "Web Dev",
    desc: "Made Projects using MERN technology enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Programming",
    desc: "Solved 200+ easy to hard Problems on LeetCode",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Use to with Figma and other user interface editors.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/rahikajannatroza",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "www.linkedin.com/in/rahika-roza",
    img: "/link.svg",
  },
];
