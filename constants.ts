import { Project, Experience, SkillCategory } from './types';

export const USER_INFO = {
  name: "Ariel D. Agdon",
  username: "Exlite29",
  role: "Front-End Developer",
  bio: "Dynamic Developer adept in React.js & TypeScript. Passionate about UI/UX, performance optimization, and bridging the gap between frontend and backend.",
  location: "Valencia City, Bukidnon",
  email: "arielagdon@yahoo.com",
  phone: "+63 905 076 6199",
  website: "https://ariel-portfolio.dev",
  github: "https://github.com/Exlite29",
  linkedin: "https://www.linkedin.com/in/ariel-agdon-916846160/",
  avatar: "https://github.com/Exlite29.png", // Pulls from GitHub. Change to "/your-image.png" if you add a local file.
  followers: 42,
  following: 15,
};

export const PROJECTS: Project[] = [
  {
    name: "Next-MBA",
    description: "A high-performance, scalable online learning platform (MOOC) similar to Coursera or Udemy using SSR/SSG.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    frontend: "Next.js (SSR/SSG), React, TypeScript, Chakra UI/Tailwind",
    backend: "Node.js (Express), REST API, PostgreSQL/MongoDB, NextAuth.js",
    features: [
      "Server-Side Rendering for SEO",
      "Scalable video streaming (AWS S3/CloudFront)",
      "Secure user sessions with NextAuth"
    ],
    private: false,
    updatedAt: "Updated 2 days ago",
    language: "TypeScript",
    demoUrl: "https://next-mba-demo.vercel.app", // Placeholder
    repoUrl: "https://github.com/Exlite29/next-mba"
  },
  {
    name: "RevScout",
    description: "Data aggregation and analysis tool for e-commerce and Amazon sellers to track trends.",
    tags: ["React", "Data Viz", "Puppeteer", "Redis"],
    frontend: "React, TypeScript, Chart.js/D3.js, Tailwind CSS",
    backend: "Node.js, Puppeteer (Headless Browser), Bull/Redis Queue",
    features: [
      "Complex data visualization dashboards",
      "Robust scraping architecture",
      "Queue system for long-running jobs"
    ],
    private: true,
    updatedAt: "Updated 1 week ago",
    language: "TypeScript",
    demoUrl: "https://revscout-demo.com", 
    repoUrl: "" // Private repo
  },
  {
    name: "OMS-Grocket",
    description: "B2B intelligence and lead generation tool focusing on data density and efficient table rendering.",
    tags: ["React", "Ant Design", "Scraping", "Data Processing"],
    frontend: "React, TypeScript, Ant Design (Tables/Filters)",
    backend: "Node.js, Multi-source scraping, Data deduplication logic",
    features: [
      "Sophisticated data parsing logic",
      "Data cleaning and deduplication pipelines",
      "High-performance data grids"
    ],
    private: true,
    updatedAt: "Updated 2 weeks ago",
    language: "TypeScript",
    demoUrl: "https://oms-grocket-preview.com",
  },
  {
    name: "Dujas",
    description: "Service-based booking platform specifically for home cleaning services with map integration.",
    tags: ["React", "Maps API", "Booking System", "Express"],
    frontend: "React, TypeScript, Tailwind CSS, Google Maps API",
    backend: "Node.js, Express, MongoDB (Users/Schedules)",
    features: [
      "Interactive service area verification maps",
      "Real-time appointment scheduling",
      "Intuitive booking flow"
    ],
    private: false,
    updatedAt: "Updated 1 month ago",
    language: "JavaScript",
    demoUrl: "https://dujas-booking.com",
    repoUrl: "https://github.com/Exlite29/dujas"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Web Catalyst",
    role: "Jr. Front-End Developer",
    period: "Sep 2023 – Jan 2025",
    description: [
      "Built and maintained responsive, user-centric applications with React.js, Next.js, and TypeScript.",
      "Engineered a library of 15+ reusable React components, reducing dev time by 20%.",
      "Optimized critical rendering path resulting in ~40% reduction in page load times (3.2s to 1.9s).",
      "Collaborated with backend teams for seamless API integrations."
    ]
  },
  {
    company: "MJC Products LLC - Amazon",
    role: "Amazon Product Researcher (VA)",
    period: "Jul 2018 - Sep 2019",
    description: [
      "Conducted product research and competitor analysis.",
      "Supported business growth through data-driven insights."
    ]
  },
  {
    company: "Convergys Inc",
    role: "Technical Support Representative",
    period: "Oct 2016 - Feb 2018",
    description: [
      "Provided technical troubleshooting and customer support.",
      "Managed lead databases and client inquiries."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux/Context API"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "RESTful APIs", "MongoDB", "SQL (Postgres)", "SSR/SSG"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git/GitHub", "Jest", "Cypress", "CI/CD Pipelines", "Webpack", "Vite"]
  },
  {
    category: "Performance & UI/UX",
    items: ["Web Vitals", "SEO", "Responsive Design", "Wireframing", "Figma-to-Code"]
  }
];

export const LANG_COLORS: Record<string, string> = {
  "TypeScript": "#3178c6",
  "JavaScript": "#f1e05a",
  "HTML": "#e34c26",
  "CSS": "#563d7c"
};