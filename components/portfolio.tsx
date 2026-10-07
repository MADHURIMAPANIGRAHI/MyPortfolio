"use client";

import Image from "next/image";
import { FormEvent, ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Terminal,
  Wrench,
  X,
} from "lucide-react";
import { certifications } from "@/data/certifications";
import { educationHistory } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

const navigationItems = ["About", "Experience", "Projects", "Skills", "Education", "Contact"];

const profile = {
  name: "Madhurima Panigrahi",
  role: "Full-Stack Developer",
  email: "madhurimapanigrahi192@gmail.com",
  phone: "+919337188123",
  github: "https://github.com/MADHURIMAPANIGRAHI",
  linkedin: "https://www.linkedin.com/in/madhurima-panigrahi",
  batch: "Class of 2027",
  cgpa: "9.34 / 10",
  location: "Berhampur, Odisha, India",
  resumePath: "/resume.pdf",
};

const formEndpoint = "https://formspree.io/f/mvebrnkr";
const pageFade = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-name") ?? "About");
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );

    document.querySelectorAll("section[data-name]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Unable to send form");
      event.currentTarget.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <SiteHeader
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((prev) => !prev)}
        onNavClick={() => setIsMenuOpen(false)}
      />

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <Section
          id="about"
          name="About"
          eyebrow="01 // Profile & Overview"
          title="Engineering intelligent, scalable systems from first principles."
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              <p>
                I am a Computer Science undergraduate (Batch 2027) with a deep passion for full-stack engineering,
                scalable architectures, and data-driven systems. My focus centers on building reliable web applications,
                Generative AI integrations, and Retrieval-Augmented Generation (RAG) pipelines that solve real-world problems.
              </p>
              <p>
                From architecting conflict-free scheduling algorithms for multi-institute academic management to engineering
                multi-tenant referral SaaS platforms handling 10K+ monthly referrals, I pride myself on resilient backend logic,
                strict type safety, and polished, responsive interfaces.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <StatCard label="Academic CGPA" value={profile.cgpa} note="NIST University" />
              <StatCard label="Monthly Referrals" value="10K+" note="LocalLoop SaaS" />
              <StatCard label="Effort Reduction" value="~70%" note="SlotSmart Solver" />
              <StatCard label="DSA Problems" value="50+" note="Algorithmic Speed" />
            </div>
          </div>
        </Section>

        {/* WORK EXPERIENCE SECTION */}
        <Section
          id="experience"
          name="Experience"
          eyebrow="02 // Work Experience"
          title="Practical industry & research journey."
        >
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${index}`} exp={exp} />
            ))}
          </div>
        </Section>

        {/* FEATURED PROJECTS SECTION */}
        <Section
          id="projects"
          name="Projects"
          eyebrow="03 // Featured Engineering"
          title="Production-grade platforms and intelligent tools."
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* SKILLS SECTION */}
        <Section
          id="skills"
          name="Skills"
          eyebrow="04 // Technical Stack"
          title="Technologies, toolsets & core competencies."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <SkillGroupCard key={group.category} group={group} />
            ))}
          </div>
        </Section>

        {/* EDUCATION & CERTIFICATIONS */}
        <Section
          id="education"
          name="Education"
          eyebrow="05 // Education & Credentials"
          title="Academic milestones and verified certifications."
        >
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {educationHistory.map((edu) => (
                <EducationCard key={edu.institution} edu={edu} />
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-200">
                <Sparkles size={18} className="text-indigo-400" />
                Professional Certifications
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {certifications.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-lg border border-white/5 bg-slate-950/60 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-slate-900/80 focus-visible:outline-indigo-500"
                  >
                    <p className="font-medium text-slate-200 group-hover:text-indigo-300">{cert.name}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      {cert.issuer} · {cert.year}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
                      View Credential <ArrowUpRight size={13} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT SECTION */}
        <Section
          id="contact"
          name="Contact"
          eyebrow="06 // Let's Connect"
          title="Get in touch for roles, projects, or collaboration."
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-slate-300">
                I am actively seeking Software Engineering internships, full-stack opportunities, and collaborative AI
                initiatives. Reach out directly or send a message via the form.
              </p>

              <div className="space-y-3">
                <ContactInfoCard
                  icon={<Mail size={18} className="text-indigo-400" />}
                  label="Email"
                  value={profile.email}
                  href={`mailto:${profile.email}`}
                />
                <ContactInfoCard
                  icon={<Phone size={18} className="text-cyan-400" />}
                  label="Phone"
                  value={profile.phone}
                  href={`tel:${profile.phone}`}
                />
                <ContactInfoCard
                  icon={<MapPin size={18} className="text-emerald-400" />}
                  label="Location"
                  value={profile.location}
                />
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Profiles</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400 hover:text-white"
                  >
                    GitHub <ExternalLink size={14} />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-indigo-400 hover:text-white"
                  >
                    LinkedIn <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <ContactForm status={formStatus} onSubmit={handleContactSubmit} />
          </div>
        </Section>
      </main>

      <footer className="mt-20 border-t border-white/10 bg-[#060910] py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-4">
          <p>
            Designed &amp; built by <span className="font-medium text-slate-200">{profile.name}</span> · {new Date().getFullYear()}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Next.js 16 • React 19 • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SITE HEADER                                  */
/* -------------------------------------------------------------------------- */
function SiteHeader({
  activeSection,
  isMenuOpen,
  onMenuToggle,
  onNavClick,
}: {
  activeSection: string;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavClick: () => void;
}) {
  return (
    <header className="glass-header sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-slate-100 focus-visible:outline-indigo-500"
        >
          <span className="hidden sm:inline-block font-sans font-medium text-slate-300">Madhurima Panigrahi</span>
        </a>

        <div className="hidden items-center gap-1 sm:gap-2 md:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection.toLowerCase() === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-150 ${
                  isActive
                    ? "bg-indigo-600/20 text-indigo-300 ring-1 ring-indigo-500/30"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onMenuToggle}
          className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 focus-visible:outline-indigo-500 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="border-b border-white/10 bg-[#090d16]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item}
                onClick={onNavClick}
                href={`#${item.toLowerCase()}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                               HERO SECTION                                 */
/* -------------------------------------------------------------------------- */
function Hero() {
  return (
    <motion.section
      {...pageFade}
      transition={{ duration: 0.45 }}
      className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_.8fr]"
    >
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          Available for Engineering Roles &amp; Internships
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Madhurima Panigrahi
          <span className="mt-2 block bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 bg-clip-text text-2xl font-semibold tracking-normal text-transparent sm:text-3xl lg:text-4xl">
            Full-Stack Developer &amp; AI Systems Engineer
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Computer Science undergraduate (Batch 2027) building scalable enterprise web platforms, intelligent automation
          workflows, and Generative AI / RAG pipelines.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30 focus-visible:outline-indigo-500"
          >
            Explore Projects <ArrowUpRight size={16} />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-indigo-500"
          >
            Experience
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white focus-visible:outline-indigo-500"
          >
            <ArrowDownToLine size={16} /> Resume
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-400 transition hover:text-indigo-400 focus-visible:outline-indigo-500"
          >
            <Code2 size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="text-slate-400 transition hover:text-indigo-400 focus-visible:outline-indigo-500"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send Email"
            className="text-slate-400 transition hover:text-indigo-400 focus-visible:outline-indigo-500"
          >
            <Mail size={20} />
          </a>
          <a
            href={`tel:${profile.phone}`}
            aria-label="Phone Number"
            className="text-slate-400 transition hover:text-indigo-400 focus-visible:outline-indigo-500"
          >
            <Phone size={19} />
          </a>
          <span className="text-xs text-slate-500">| NIST University • CSE &apos;27</span>
        </div>
      </div>

      <ProfilePhoto />
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PROFILE PHOTO                                */
/* -------------------------------------------------------------------------- */
function ProfilePhoto() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
      {/* Glow rings */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500/20 via-cyan-500/10 to-indigo-600/20 blur-2xl" />
      <div className="absolute inset-0 rounded-full border border-indigo-500/20" />
      <div className="absolute -inset-6 rounded-full border border-indigo-500/10" />

      {/* Portrait container */}
      <div className="relative aspect-square w-[82%] overflow-hidden rounded-full border-2 border-indigo-400/40 bg-slate-900 shadow-2xl shadow-indigo-950/60 ring-4 ring-indigo-500/10">
        <Image
          src="/Prof_pic.png"
          alt="Portrait of Madhurima Panigrahi"
          fill
          priority
          sizes="(max-width: 1024px) 60vw, 340px"
          className="rounded-full object-cover object-[center_20%]"
        />
      </div>

      {/* Badge */}
      <div className="absolute -bottom-3 rounded-full border border-indigo-500/30 bg-[#0c1220] px-4 py-1 shadow-lg backdrop-blur-md">
        <p className="text-xs font-mono font-medium tracking-wider text-indigo-300">NIST CSE // 9.34 CGPA</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              EXPERIENCE CARD                               */
/* -------------------------------------------------------------------------- */
function ExperienceCard({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="rounded-xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-slate-900/60"
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-baseline">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
              {exp.category}
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-300">
            <span className="font-medium text-indigo-400">{exp.company}</span> · {exp.location}
          </p>
        </div>
        <p className="font-mono text-xs font-medium text-slate-400 sm:text-right">{exp.period}</p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {exp.highlights.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/5 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-400 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PROJECT CARD                                 */
/* -------------------------------------------------------------------------- */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 shadow-xl backdrop-blur-sm transition-all duration-200 hover:border-indigo-500/40 hover:bg-slate-900/80"
    >
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#090e18]">
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
          />
          {project.metrics && (
            <span className="absolute bottom-3 left-3 rounded-md border border-indigo-400/30 bg-[#0c1220]/90 px-2.5 py-1 text-[11px] font-medium text-cyan-300 backdrop-blur-md">
              {project.metrics}
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition">
                {project.title}
              </h3>
              {project.tagline && (
                <p className="mt-0.5 text-xs font-mono text-indigo-400">{project.tagline}</p>
              )}
            </div>
            <Code2 size={18} className="shrink-0 text-slate-500 group-hover:text-indigo-400 transition" />
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-300">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-3 space-y-1.5 border-t border-white/5 pt-3">
              {project.highlights.slice(0, 2).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 size={13} className="shrink-0 text-emerald-400 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/5 bg-slate-950/70 px-2 py-0.5 text-[11px] font-mono text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/40 px-5 py-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition hover:text-indigo-300 focus-visible:outline-indigo-500"
        >
          <Code2 size={14} /> Repository
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 transition hover:text-indigo-300 focus-visible:outline-indigo-500"
        >
          Overview <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SKILL GROUP CARD                              */
/* -------------------------------------------------------------------------- */
function SkillGroupCard({ group }: { group: (typeof skillGroups)[number] }) {
  const getIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Terminal size={17} className="text-cyan-400" />;
      case "Frontend":
        return <Layers size={17} className="text-indigo-400" />;
      case "Backend & Databases":
        return <Database size={17} className="text-emerald-400" />;
      case "AI & Data Engineering":
        return <BrainCircuit size={17} className="text-cyan-300" />;
      case "Tools & Platforms":
        return <Wrench size={17} className="text-amber-400" />;
      default:
        return <Sparkles size={17} className="text-indigo-400" />;
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-indigo-500/30 hover:bg-slate-900/60">
      <div className="flex items-center gap-2">
        {getIcon(group.category)}
        <h3 className="font-semibold text-slate-200">{group.category}</h3>
      </div>
      <p className="mt-1 text-xs text-slate-400">{group.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/5 bg-slate-950/70 px-2.5 py-1 text-xs font-medium text-slate-300 transition hover:border-indigo-500/30 hover:text-indigo-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               EDUCATION CARD                               */
/* -------------------------------------------------------------------------- */
function EducationCard({ edu }: { edu: (typeof educationHistory)[number] }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-white/10 bg-slate-900/40 p-5 backdrop-blur-sm transition hover:border-indigo-500/30">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 font-mono text-xs font-semibold text-indigo-300">
            {edu.scoreLabel}: {edu.score}
          </span>
          <span className="font-mono text-xs text-slate-400">{edu.period}</span>
        </div>

        <h3 className="mt-3 text-base font-semibold text-white">{edu.degree}</h3>
        <p className="mt-1 text-xs font-medium text-indigo-400">{edu.institution}</p>
        <p className="text-xs text-slate-400">{edu.location}</p>

        {edu.highlights && (
          <ul className="mt-4 space-y-1.5 border-t border-white/5 pt-3 text-xs text-slate-300">
            {edu.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                              CONTACT FORM                                  */
/* -------------------------------------------------------------------------- */
function ContactForm({
  status,
  onSubmit,
}: {
  status: FormStatus;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm"
      aria-label="Direct contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
          Name
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Your name"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
          Email
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="you@domain.com"
          />
        </label>
      </div>

      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
        Subject
        <input
          name="subject"
          type="text"
          className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          placeholder="Internship / Full-Stack Project Collaboration"
        />
      </label>

      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
        Message
        <textarea
          required
          name="message"
          rows={4}
          className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-slate-950/70 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          placeholder="Tell me about your project, team, or opportunity..."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 disabled:opacity-50 focus-visible:outline-indigo-500"
      >
        {status === "sending" ? "Transmitting..." : "Send Message"}
        <Send size={15} />
      </button>

      {status === "sent" && (
        <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
          Thank you! Your message has been sent successfully. I will get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
          An error occurred. Please feel free to reach out directly via email at {profile.email}.
        </p>
      )}
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/*                              HELPER UI PIECES                              */
/* -------------------------------------------------------------------------- */
function Section({
  id,
  name,
  eyebrow,
  title,
  children,
}: {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      {...pageFade}
      transition={{ duration: 0.4 }}
      id={id}
      data-name={name}
      className="section-anchor py-16 sm:py-20"
    >
      <div className="mb-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur-sm">
      <p className="text-2xl font-bold text-white sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-medium text-indigo-300">{label}</p>
      <p className="mt-0.5 text-[11px] text-slate-500">{note}</p>
    </div>
  );
}

function ContactInfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-slate-900/40 p-3 transition hover:border-indigo-500/30">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950/80">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase text-slate-400">{label}</p>
        <p className="text-sm font-medium text-slate-200">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition focus-visible:outline-indigo-500">
      {content}
    </a>
  ) : (
    content
  );
}
