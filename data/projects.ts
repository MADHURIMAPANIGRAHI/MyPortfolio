export type Project = { title: string; description: string; stack: string[]; github: string; live: string; image: string; featured?: boolean };

export const projects: Project[] = [
  { title: "Cohortly", description: "A collaborative learning hub with role-aware workspaces, real-time progress updates, and focused study plans.", stack: ["Next.js", "TypeScript", "MongoDB", "Auth.js"], github: "https://github.com/your-github/cohortly", live: "https://cohortly.example.com", image: "/projects/cohortly.svg", featured: true },
  { title: "ShipSmart API", description: "REST API for a local delivery network that reduced manual dispatch updates with tracked delivery states.", stack: ["Node.js", "Express", "MongoDB", "JWT"], github: "https://github.com/your-github/shipsmart-api", live: "https://shipsmart-api.example.com", image: "/projects/shipsmart.svg", featured: true },
  { title: "LedgerLine", description: "Java expense manager with clean data modelling, CSV exports, and monthly category insights.", stack: ["Java", "Spring Boot", "PostgreSQL", "REST API"], github: "https://github.com/your-github/ledgerline", live: "https://ledgerline.example.com", image: "/projects/ledgerline.svg" },
  { title: "CampusCart", description: "Marketplace for student-to-student listings with image uploads, search, and protected seller actions.", stack: ["React", "Node.js", "Cloudinary", "MongoDB"], github: "https://github.com/your-github/campuscart", live: "https://campuscart.example.com", image: "/projects/campuscart.svg" },
];
