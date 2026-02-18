const navLinks = [
  {
    name: "About",
    link: "#about",
  },

  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact me",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];
export const skillCategories = [
  {
    title: "Backend",
    skills: ["C#", ".NET Core", "ASP.NET Core", "Node.js", "Java", "Python"],
  },
  {
    title: "Frontend",
    skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "AWS", "CI/CD", "Jira", "Agile"],
  },
  {
    title: "AI Assisted Dev",
    skills: ["Claude", "GPT-4", "Gemini", "Copilot"],
  },
];
const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

 const expCards = [
  {
    title: "Full Stack Developer | BSD",
    date: "2025 - Present",
    subTitle: "ERP System for Bookkeeping & Tax Firms (Freelance)",
    responsibilities: [
      "Architected and developed a robust office management system using .NET Core and C# following Clean Architecture principles.",
      "Built a high-performance, responsive frontend with Angular, ensuring a seamless user experience.",
      "Designed and optimized complex database schemas, queries, and procedures using PostgreSQL.",
      "Implemented advanced Design Patterns including Dependency Injection (DI), Mediator, and CQRS for scalable and maintainable code.",
      "Engineered a comprehensive security layer featuring OAuth (Google), JWT-based authorization, and Bcrypt encryption.",
      "Developed automated reporting mechanisms and background tasks using Hangfire to streamline business operations.",
      "Led end-to-end feature development, from initial characterization to cloud deployment and technical decision-making."
    ],

  },
  {
    title: "Full Stack Developer | Bpreven",
    date: "2025",
    subTitle: "AI-Driven Medical Information System (Practicum)",
    responsibilities: [
      "Developed and integrated RESTful APIs using .NET Core and C# with SQL Server as the primary data store.",
      "Engineered a dynamic client-side interface using React and TypeScript, focusing on robust error handling and optimized loading states.",
      "Integrated OpenAI API to generate automated medical reports via data-driven dynamic prompting, significantly reducing manual workload.",
      "Built a custom Content Management System (CMS) for administrators, empowering non-technical staff to manage platform content independently.",
      "Collaborated within an Agile team environment, utilizing Git for version control and ensuring high code quality through rigorous debugging."
    ],
        logoPath: "images/logos/bpreven.png", 

  }
];
const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
