import instockLandingPage from "@/assets/images/instock.png";
import brainflixLandingPage from "@/assets/images/brainflix.png";
import giftlyHome from "@/assets/images/giftlyHomePage.png";
import aureliaImage from "@/assets/images/aurelia.jpeg";
import allyImage from "@/assets/images/allyv.jpeg"
import brainstationImage from "@/assets/images/brainstation.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NextIcon from "@/assets/icons/next.svg";
import NodeIcon from "@/assets/icons/node.svg";
import MySqlIcon from "@/assets/icons/mysql.svg";
import cIcon from "@/assets/icons/c3.svg"
import knexIcon from "@/assets/icons/knex.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import pythonIcon from "@/assets/icons/python.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import EmailIcon from "@/assets/icons/email.svg";
import drake from "@/assets/images/drake.png";
import loverBoy from "@/assets/images/loverboy.jpg";
import folklore from "@/assets/images/folklore.png";
import midnights from "@/assets/images/midnights.png";
import astro from "@/assets/images/astroworld.png";
import ariana from "@/assets/images/ariana.png";



export const portfolioProjects = [
  {
    company: "Brainstation",
    year: "2024",
    title: "Giftly",
    results: [
      {
        title: "Front End: React, JavaScript, SASS, Axios",
      },
      { title: "Back End: Node.js, Express, Knex, MySQL" },
      {
        title: "Allow users to post and share visual wish lists with friends",
      },
    ],
    link: "https://github.com/cscrim/giftly",
    image: giftlyHome,
    isDeployed: false,
  },
  {
    company: "Brainstation",
    year: "2024",
    title: "Instock",
    results: [
      { title: "Tech Stack: React, JavaScript, Express, Axios, Knex, MySQL" },
      { title: "Developed collaboratively in a team" },
      { title: "Agile Development, GitFlow, Jira" },
    ],
    link: "https://github.com/cscrim/instock_client",
    image: instockLandingPage,
    isDeployed: false,
  },
  {
    company: "Brainstation",
    year: "2024",
    title: "Brainflix",
    results: [
      { title: "Tech Stack: React, Express, REST API, JavaScript"},
      { title: "Video sharing web app" },
      { title: "Used file system to manage data with persistent storage" },
    ],
    link: "https://github.com/cscrim/Courtney-scrimshaw-brainflix-api",
    image: brainflixLandingPage,
    isDeployed: false,
  },
];

export const testimonials = [
  {
    name: "Allison VanNest",
    position: "Content Marketing Manager @ Skillsoft",
    text: "I had the pleasure of working with Courtney on a cross-functional project at Skillsoft, and even though we were on different teams, her impact was undeniably positive. She consistently demonstrated a forward-thinking approach, always eager to explore new ideas and solutions that would benefit the entire group. Her responsiveness was a breath of fresh air – she never missed a beat in communication, ensuring that all queries and concerns were addressed promptly. What truly stood out to me was her collaborative spirit. I highly recommend Courtney for any role that requires dedication, innovation, and exceptional teamwork.",
    avatar: allyImage,
  },
  {
    name: "Aurelia Rao",
    position: "Senior Product Manager @ Bespoke Metrics",
    text: "Courtney consistently demonstrates strong technical understanding and problem-solving skills. She played a key role in product demos, gathering feedback, and translating business requirements into clear user stories and feature requests. Her communication, attention to detail, and ability to collaborate across teams made her an invaluable asset.",
    avatar: aureliaImage,
  },
  {
    name: "Former Teacher",
    position: "Educator @ Brainstation",
    text: "Courtney is a skilled and confident developer who consistently delivers clean, efficient, and maintainable code. She excels in whiteboarding sessions, breaking down complex problems and quickly devising effective solutions. Her ability to tackle new challenges with a methodical approach ensures high-quality results. Courtney’s strong technical foundation and problem-solving mindset make her an asset to any development team.",
    avatar: brainstationImage,
  },
  {
    name: "Former TA",
    position: "Teaching Assistant @ Brainstation",
    text: "Courtney's leadership in the inStock project at BrainStation was exemplary. As team lead, she ensured the team stayed on track by effectively managing milestones in Jira and promoting seamless collaboration on pull requests. Her ability to guide the team while maintaining focus on delivering high-quality, well-tested features highlighted her strong technical leadership and commitment to best practices",
    avatar: brainstationImage,
  },
];

export const toolbox = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "Python",
    iconType: pythonIcon,
  },
  {
    title: "C",
    iconType: cIcon,

  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS",
    iconType: Css3Icon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "TypeScript",
    iconType: typescriptIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "MySQL",
    iconType: MySqlIcon,
  },
  {
    title: "Knex",
    iconType: knexIcon,

  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  

];

export const hobbies = [
  {
    title: "Golden Retrievers",
    emoji: "🐶 🐾",
    left: "5%",
    top: "5%",
  },
  {
    title: "Motorsports",
    emoji: "🏎️💨",
    left: "50%",
    top: "5%",
  },
  {
    title: "Travel",
    emoji: "✈️ 🗺️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Golf",
    emoji: "⛳️ 🏌🏼‍♀️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Vlogging",
    emoji: "📷 💻",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "👟 🎧",
    left: "5%",
    top: "65%",
  },
  {
    title: "Pokémon",
    emoji: "⭐️",
    left: "45%",
    top: "70%",
  },
];

export const footerLinks = [
  {
    title: "LinkedIn",
    icon: <LinkedinIcon />,
    href: "https://www.linkedin.com/in/courtneyscrimshaw/",
  },
  {
    title: "GitHub",
    icon: <GitHubIcon />,
    href: "https://github.com/cscrim",
  },
  {
    title: "Email",
    icon: <EmailIcon />,
    href: "mailto:courtneyscrimshaw@gmail.com",
  },
];

export const albums = [
  midnights,
  ariana,
  loverBoy,
  folklore,
  astro,
  drake,
];

