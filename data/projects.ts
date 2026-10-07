export type Project = {
  title: string;
  tagline?: string;
  description: string;
  highlights?: string[];
  stack: string[];
  github: string;
  live: string;
  image: string;
  featured?: boolean;
  metrics?: string;
};

export const projects: Project[] = [
  {
    title: "SlotSmart",
    tagline: "Intelligent Academic & Exam Scheduling Engine",
    description:
      "Architected an intelligent scheduling platform using conflict-free optimization algorithms, enabling automated timetable and examination management for schools and institutions.",
    highlights: [
      "Reduced manual scheduling effort by ~70% across 5+ institutions via rule-based automation.",
      "Implemented conflict-free scheduling engine for classes, faculty, lecture halls, and examinations.",
      "Built multi-organization support with role-based dashboards and academic asset management.",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "NextAuth.js", "JWT", "Redis"],
    github: "https://github.com/MADHURIMAPANIGRAHI",
    live: "https://github.com/MADHURIMAPANIGRAHI",
    image: "/projects/slotsmart.svg",
    featured: true,
    metrics: "~70% Manual Effort Reduction • 5+ Inst.",
  },
  {
    title: "LocalLoop",
    tagline: "QR-Based SaaS Referral & Growth Engine",
    description:
      "A multi-tenant SaaS referral platform built for local businesses (cafes, gyms, salons) to track customer referrals via QR codes, reward brand ambassadors, and measure ROI with real-time analytics.",
    highlights: [
      "Engineered multi-tenant data isolation using Supabase and Prisma to support 100+ businesses, 10K+ monthly referrals, and 5K+ ambassadors.",
      "Implemented robust backend rate limiting (100 req/min per IP) to prevent fraudulent scans and abuse.",
      "Built real-time merchant analytics, role-based dashboards, and JWT session handling.",
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Prisma", "Supabase", "Cloudinary", "JWT", "Redis"],
    github: "https://github.com/MADHURIMAPANIGRAHI",
    live: "https://github.com/MADHURIMAPANIGRAHI",
    image: "/projects/localloop.svg",
    featured: true,
    metrics: "100+ Businesses • 10K+ Monthly Referrals",
  },
  {
    title: "AI Codebase Visualization & RAG Assistant",
    tagline: "Semantic Code Intelligence & Graph Explorer",
    description:
      "A GenAI-powered developer productivity system providing semantic codebase search, repository structure analysis, and AI-synthesized code explanations via Retrieval-Augmented Generation.",
    highlights: [
      "Engineered RAG pipelines for semantic search across multi-file repositories with contextual vector retrieval.",
      "Implemented AST dependency graph visualization and natural language querying for rapid developer onboarding.",
      "Accelerated codebase comprehension and debugging cycles through automated architecture explanations.",
    ],
    stack: ["Python", "FastAPI", "Generative AI", "RAG", "Vector Search", "React.js", "TypeScript"],
    github: "https://github.com/MADHURIMAPANIGRAHI",
    live: "https://github.com/MADHURIMAPANIGRAHI",
    image: "/projects/rag-assistant.svg",
    featured: true,
    metrics: "Contextual RAG • AST Dependency Graphs",
  },
];
