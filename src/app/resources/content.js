import { InlineCode } from "@/once-ui/components";
import { display } from "./config";

const person = {
  firstName: "Harshit",
  lastName: "Singhal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/harshitsinghal11",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/harshitsinghal11/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/harshit__1103",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:harshitsinghal.dev@outlook.com",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.com/users/1208756028145926176",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and Developer</>,
  subline: (
    <>
      A Tech Enthusiast Who Builds Amazing Projects, If You Interested to Know about me, My Work Experience Just Dig into in ...
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Harshit is a Faridabad-based computer science engineering student with a passion for turning complex problems into smart, efficient tech solutions. With a strong interest in coding, cybersecurity, and innovative design, his work bridges the gap between logic and creativity—spanning software development, user-focused tools, and the evolving world of technology.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Class 10th",
        description: <>Studied From Aggarwal Public School, Ballabgarh Secured 79.2%</>,
      },
      {
        name: "Class 12th",
        description: <>Studied From Aggarwal Public School, Ballabgarh Secured 86.4%</>,
      },
      {
        name: "Manav Rachna Univerisity",
        description: <>Studing BTech in Computer Science engineering</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Proefficeint in Prototyping Any Website, Application Designs</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Photoshop",
        description: <>Proefficeint in Basic Photoediting</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Able to Build Websites from Scratch Using HTML/CSS/JS</>,
        images: [],
      },
    ],
  },
};
export { person, social, newsletter, home, about };
