export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  stack: string[];
  category: "Industry" | "Research & Internship";
};

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Protionix Technology PVT. LTD.",
    location: "NIST TBI, Berhampur",
    period: "May 2026 – July 2026",
    highlights: [
      "Built scalable enterprise web applications using Next.js, React.js, Node.js, and MongoDB.",
      "Integrated secure authentication and role-based access control (RBAC) to support multi-user workflows at production scale.",
      "Collaborated closely with the core startup engineering team to architect and ship production-ready, resilient features.",
    ],
    stack: ["Next.js", "React.js", "Node.js", "MongoDB", "RBAC", "REST APIs"],
    category: "Industry",
  },
  {
    role: "Data Science & Data Analysis Intern",
    company: "NIST University",
    location: "Berhampur, Odisha",
    period: "May 2025 – June 2025",
    highlights: [
      "Conducted end-to-end data engineering and exploratory data analysis (EDA) on complex structured datasets using Python.",
      "Produced actionable visual insights and reports using Matplotlib and Seaborn to back data-driven decision making.",
      "Engineered automated data preprocessing routines, validating distribution consistency and data integrity.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Analysis"],
    category: "Research & Internship",
  },
  {
    role: "Advanced Programming & Competitive Coding Intern",
    company: "NIST University",
    location: "Berhampur, Odisha",
    period: "July 2024 – August 2024",
    highlights: [
      "Strengthened core algorithmic problem-solving and space-time optimization skills through intensive competitive programming.",
      "Solved 50+ challenging Data Structures & Algorithms problems under rigorous time and memory constraints.",
      "Mastered graph traversals, dynamic programming, tree manipulations, and asymptotic complexity optimization.",
    ],
    stack: ["Java", "C++", "DSA", "Dynamic Programming", "Graph Theory", "Algorithms"],
    category: "Research & Internship",
  },
];
