import { PersonalInfo, ExperienceItem, EducationItem, ProjectItem, SkillCategory, AchievementItem } from '../types';
import { UNISELL_SHOWCASE_SVG, HANISH_AVATAR_SVG } from './svgAssets';

export const personalData: PersonalInfo = {
  name: "Hanish Musini",
  title: "AI Engineer & Data Analytics Intern | Founder @ UniSell",
  tagline: "Building scalable digital solutions, AI models, and data-driven platforms for real-world impact.",
  location: "Hyderabad, Telangana & IIIT Surat, India",
  email: "hanish070328@gmail.com",
  secondaryEmail: "hanish20011413012555@gmail.com",
  phone: "+91 7386202172",
  linkedin: "https://www.linkedin.com/in/hanish07",
  github: "https://github.com/shivamxkumar", // or hanish07
  college: "Indian Institute of Information Technology (IIIT) Surat",
  expectedGraduation: "2029",
  bio: "Second-year B.Tech Computer Science student at IIIT Surat with hands-on experience in AI engineering, data analytics, and full-stack software development. Currently Data Analytics Intern at iStudio and former AI Engineer Intern at DecodeLabs. Founder of UniSell, a dedicated e-commerce platform empowering small and medium enterprises (SMEs). Passionate about building high-performance scalable systems and exploring entrepreneurship.",
  summary: "A passionate tech enthusiast focused on transforming complex ideas into functional digital platforms. Experienced in machine learning pipelines, data visualization, robust DBMS architecture, and full-stack web applications.",
  status: "Available for Internships & Projects",
  avatarUrl: HANISH_AVATAR_SVG,
  secondaryPhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
};

export const experienceData: ExperienceItem[] = [
  {
    id: "istudio",
    role: "Data Analytics Intern",
    company: "iStudio (Internship Studio)",
    location: "Pune City, India",
    period: "May 2026 - July 2026",
    type: "Internship",
    description: [
      "Analyzed large structured datasets, developed interactive data visualizations, and created comprehensive executive reports to extract actionable business insights.",
      "Collaborated with cross-functional team members on data-driven decision workflows and predictive modeling pipelines.",
      "Utilized Python (Pandas, Matplotlib) and SQL to clean, filter, and summarize complex transactional data."
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Data Analytics", "Data Visualization"],
    logoText: "iS"
  },
  {
    id: "decodelabs",
    role: "AI Engineer Intern",
    company: "DecodeLabs",
    location: "Greater Lucknow Area, India",
    period: "June 2026 - July 2026",
    type: "Internship",
    description: [
      "Developed AI-based applications and implemented machine learning solutions for real-world production projects.",
      "Executed end-to-end data preprocessing, model development, evaluation workflows, and hyperparameter tuning.",
      "Collaborated via Git/GitHub version control in a fast-paced agile development environment."
    ],
    technologies: ["Python", "Machine Learning", "AI", "Data Preprocessing", "Git/GitHub", "Model Training"],
    logoText: "DL"
  },
  {
    id: "unisell-founder",
    role: "Founder & Lead Developer",
    company: "UniSell - E-Commerce Platform",
    location: "Remote / IIIT Surat",
    period: "2025 - Present",
    type: "Founder",
    description: [
      "Conceived, architected, and built a full-stack e-commerce marketplace deployed on Render tailored for small & medium enterprises (SMEs).",
      "Engineered comprehensive seller inventory management, stock tracking, and user-friendly product listing interfaces.",
      "Designed a robust MySQL relational DBMS schema for seamless transaction processing and data consistency."
    ],
    technologies: ["Full-Stack Web Dev", "React", "Node.js", "Express", "MySQL", "DBMS", "Render"],
    logoText: "US"
  }
];

export const educationData: EducationItem[] = [
  {
    id: "iiit-surat",
    institution: "Indian Institute of Information Technology (IIIT) Surat",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2025 - 2029 (Expected)",
    location: "Surat, Gujarat, India",
    highlights: [
      "Second-year B.Tech CSE Student focusing on Data Structures, Algorithms, DBMS, and AI.",
      "Active Member of Aspiring Ruminate (E-Cell) - participating in entrepreneurship and tech hackathons."
    ]
  },
  {
    id: "narayana",
    institution: "Narayana Junior College",
    degree: "Intermediate / Higher Secondary (MPC)",
    period: "April 2023 - May 2025",
    location: "Hyderabad, Telangana, India",
    highlights: [
      "Focused on Physics, Chemistry, and Advanced Mathematics.",
      "Top academic performer preparing for competitive engineering entrance examinations."
    ]
  },
  {
    id: "st-joseph",
    institution: "St. Joseph's English Medium High School",
    degree: "Secondary School Certificate (10th)",
    period: "June 2015 - April 2023",
    location: "Kurnool, Andhra Pradesh, India",
    highlights: [
      "Strong foundation in Science, Mathematics, and Computer Fundamentals."
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "unisell",
    title: "UniSell – SME E-Commerce Platform",
    subtitle: "Full-Stack Marketplace tailored for Small & Medium Enterprises",
    category: "Full Stack",
    role: "Founder & Lead Developer",
    description: "UniSell is a production-ready e-commerce platform built to bridge the gap between local SME businesses and modern online commerce. Provides local sellers with a digital storefront to showcase, sell, manage stock, and expand their reach.",
    highlights: [
      "Built and deployed full-stack e-commerce architecture on Render.",
      "Integrated product listings, seller stock management, and buyer checkout flows.",
      "Designed a highly optimized MySQL DBMS architecture for fast catalog queries."
    ],
    technologies: ["React", "Node.js", "Express", "MySQL", "DBMS", "Tailwind CSS", "Render"],
    githubUrl: "https://github.com/shivamxkumar/Portfolio-2.0",
    liveUrl: "https://unisell-ecommerce.render.com",
    featured: true,
    image: UNISELL_SHOWCASE_SVG,
    showcaseBadges: ["Live on Render", "SME Marketplace", "MySQL DBMS Engine"]
  },
  {
    id: "decode-ai-projects",
    title: "AI & Machine Learning Solutions Suite",
    subtitle: "End-to-End Predictive Models & Preprocessing Workflows",
    category: "AI & ML",
    role: "AI Engineer Intern @ DecodeLabs",
    description: "A collection of AI and Machine Learning models developed for real-world dataset analytics, feature engineering, predictive tasks, and automated model training pipelines.",
    highlights: [
      "Implemented raw dataset cleaning, outlier handling, and feature selection.",
      "Trained classification and regression models with cross-validation metrics.",
      "Documented workflows and deployment scripts on GitHub."
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "Machine Learning", "Git/GitHub"],
    githubUrl: "https://github.com/shivamxkumar",
    liveUrl: "https://github.com/shivamxkumar",
    featured: true,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "istudio-analytics",
    title: "Data Analytics & Insight Reporting Dashboard",
    subtitle: "Business Intelligence & Statistical Visualization Pipelines",
    category: "Data Analytics",
    role: "Data Analytics Intern @ iStudio",
    description: "An analytical dashboard suite created to transform complex raw datasets into interactive visual reports, trend graphs, and data-driven insights for cross-functional stakeholders.",
    highlights: [
      "Processed multi-source datasets to discover underlying consumer & growth metrics.",
      "Created graphical reports using Matplotlib and Pandas.",
      "Formulated actionable recommendations based on data trends."
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Data Analytics", "Data Visualization"],
    githubUrl: "https://github.com/shivamxkumar",
    liveUrl: "https://github.com/shivamxkumar",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 92 },
      { name: "Java", level: 82 },
      { name: "SQL", level: 88 },
      { name: "JavaScript", level: 86 }
    ]
  },
  {
    category: "Web & Database Technologies",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "React.js", level: 88 },
      { name: "Node.js / Express", level: 82 },
      { name: "MySQL / DBMS", level: 90 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    category: "AI, Data Analytics & Libraries",
    skills: [
      { name: "Data Preprocessing", level: 90 },
      { name: "Pandas", level: 92 },
      { name: "Matplotlib", level: 88 },
      { name: "Machine Learning Concepts", level: 85 },
      { name: "Data Visualization", level: 89 }
    ]
  },
  {
    category: "Tools & Development",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Android Studio", level: 78 },
      { name: "Render Deployment", level: 85 }
    ]
  },
  {
    category: "Core Computer Science Concepts",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", level: 88 },
      { name: "Object-Oriented Programming (OOP)", level: 92 },
      { name: "Database Management Systems (DBMS)", level: 90 },
      { name: "System Architecture & Scalability", level: 84 }
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "kanad-shield",
    title: "National Finalist - KANAD S.H.I.E.L.D. 2026",
    organization: "Ahmedabad City Police",
    period: "2026",
    description: "Selected for the Offline Grand Finale of KANAD S.H.I.E.L.D. 2026, a prestigious national-level cybersecurity hackathon organized by Ahmedabad City Police.",
    tag: "National Finalist",
    iconName: "ShieldCheck"
  },
  {
    id: "unisell-launch",
    title: "Founder of UniSell Platform",
    organization: "E-Commerce for SMEs",
    period: "2025",
    description: "Successfully built, launched, and deployed a production-ready e-commerce platform tailored to small and medium enterprises.",
    tag: "Entrepreneurship",
    iconName: "Store"
  },
  {
    id: "ecell-member",
    title: "Active Member of Aspiring Ruminate (E-Cell)",
    organization: "IIIT Surat",
    period: "2025 - Present",
    description: "Active participant in campus entrepreneurship initiatives, startup hackathons, and technical innovation events.",
    tag: "Leadership",
    iconName: "Rocket"
  },
  {
    id: "dsa-certified",
    title: "Data Structures & Algorithms Certification",
    organization: "Technical Competence",
    period: "2025",
    description: "Certified proficiency in algorithmic problem solving, graph algorithms, dynamic programming, and data structures.",
    tag: "Certification",
    iconName: "Award"
  }
];
