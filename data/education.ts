export type EducationEntry = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  field?: string;
  highlights?: string[];
};

export const educationHistory: EducationEntry[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "NIST University",
    location: "Berhampur, Odisha",
    period: "Sep 2023 – Sep 2027",
    score: "9.34 / 10",
    scoreLabel: "CGPA",
    field: "Computer Science & Engineering",
    highlights: [
      "Rigorous coursework in Data Structures, Database Systems, Computer Networks, and Operating Systems.",
      "Hands-on project work in Full-Stack Web Development, Generative AI, and RAG architectures.",
      "Consistently maintained exemplary academic standing (9.34 CGPA).",
    ],
  },
  {
    degree: "Intermediate / 12th Standard",
    institution: "Khallikote Higher Secondary School",
    location: "Berhampur, Odisha",
    period: "Aug 2021 – Feb 2023",
    score: "79.6%",
    scoreLabel: "Score",
    field: "Science Stream",
    highlights: [
      "Core focus on Mathematics, Physics, and Chemistry.",
      "Strong analytical foundation and mathematical problem-solving training.",
    ],
  },
  {
    degree: "Matriculation / 10th Standard",
    institution: "Maa Saraswati Sishu Vidya Mandir",
    location: "Berhampur, Odisha",
    period: "2009 – 2021",
    score: "84%",
    scoreLabel: "Score",
    field: "General Academics",
    highlights: [
      "Comprehensive secondary schooling with academic distinction.",
      "Active participation in science olympiads and scholastic competitions.",
    ],
  },
];

// Maintained for backward-compatibility with existing views until component overhaul
export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  branch: "Computer Science & Engineering",
  institution: "NIST University",
  period: "Sep 2023 – Sep 2027",
  cgpa: "9.34 / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Generative AI & RAG",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
  ],
  achievement: "Maintained a 9.34 CGPA while building scalable full-stack applications and AI-driven platforms.",
};
