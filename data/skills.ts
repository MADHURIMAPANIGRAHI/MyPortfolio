export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    description: "Core programming and scripting languages for systems & applications",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    description: "Modern component-driven web frameworks and UI tooling",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    category: "Backend & Databases",
    description: "Scalable server architectures, authentication, and data layers",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "NextAuth.js", "JWT", "Redis", "Supabase", "Prisma"],
  },
  {
    category: "AI & Data Engineering",
    description: "Generative AI, retrieval pipelines, and exploratory data analytics",
    skills: ["Generative AI", "RAG Pipelines", "AI/ML", "Data Analysis", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools & Platforms",
    description: "Developer workflows, version control, and cloud ecosystems",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  },
  {
    category: "Core Competencies",
    description: "Engineering methodologies and computer science fundamentals",
    skills: ["Full-Stack Development", "Authentication & RBAC", "Responsive Web Design", "DSA (50+ Solved)", "System Architecture"],
  },
];
