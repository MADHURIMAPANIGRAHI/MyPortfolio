"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, Code2, ContactRound, GitFork, Mail, Menu, Send, X } from "lucide-react";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

const navItems = ["About", "Education", "Projects", "Certifications", "Contact"];
const profile = { email: "[EMAIL_ADDRESS]", github: "https://github.com/your-github", linkedin: "https://linkedin.com/in/your-linkedin" };
const formEndpoint = "https://formspree.io/f/your-form-id"; // Replace with your Formspree form ID.
const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("About");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.getAttribute("data-name") ?? "About")), { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("section[data-name]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending");
    try { const response = await fetch(formEndpoint, { method: "POST", body: new FormData(event.currentTarget), headers: { Accept: "application/json" } }); if (!response.ok) throw new Error(); event.currentTarget.reset(); setStatus("sent"); }
    catch { setStatus("error"); }
  }

  return <main className="overflow-x-hidden bg-[#24100c] text-orange-50">
    <header className="sticky top-0 z-50 border-b border-orange-100/15 bg-[#24100c]/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main navigation">
        <a href="#top" className="font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">AM<span className="text-blue-500">.</span></a>
        <div className="hidden items-center gap-6 text-sm text-stone-400 md:flex">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={`transition hover:text-stone-100 ${active === item ? "text-blue-400" : ""}`}>{item}</a>)}</div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded p-2 text-stone-300 focus-visible:outline-2 focus-visible:outline-blue-500 md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {menuOpen && <div className="border-t border-white/10 bg-[#0a0a0a] px-5 py-3 md:hidden">{navItems.map((item) => <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="block py-2 text-sm text-stone-300">{item}</a>)}</div>}
    </header>
    <div id="top" className="mx-auto max-w-6xl px-5">
      <motion.section {...fade} transition={{ duration: .45 }} className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
        <div>
        <p className="mb-5 flex items-center gap-2 text-sm font-medium text-blue-400"><span className="h-2 w-2 rounded-full bg-blue-500" /> Available for internships & collaborations</p>
        <h1 className="text-4xl font-semibold tracking-[-.055em] text-stone-50 sm:text-6xl">Madhurima Panigrahi <span className="block text-stone-500">Full Stack Developer.</span></h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-stone-400 sm:text-lg">I build modern web apps with JavaScript, TypeScript, Next.js, MERN, and Java — shaped by a hands-on four-year B.Tech journey.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">View Projects <ArrowUpRight size={16} /></a><a href="#contact" className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium transition hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Let&apos;s Connect</a><a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md px-2 py-2.5 text-sm text-stone-400 transition hover:text-stone-100"><ArrowDownToLine size={16} /> Resume</a></div>
        <SocialLinks className="mt-9" />
        </div>
        <div className="relative mx-auto w-full max-w-sm"><div className="absolute -inset-4 rounded-[2rem] border border-amber-300/40 [transform:rotate(5deg)]" /><div className="absolute -inset-3 rounded-[2rem] border border-orange-300/25 [transform:rotate(-3deg)]" /><div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-amber-200/50 bg-[#6b2a12] p-2 shadow-2xl shadow-amber-950/60"><Image src="/profile-placeholder.svg" alt="Madhurima Panigrahi profile photo placeholder" fill priority sizes="(max-width: 1024px) 80vw, 400px" className="rounded-[1.25rem] object-cover" /></div><p className="mt-5 text-center text-xs tracking-[.2em] text-amber-200/70">YOUR PHOTO, YOUR STORY</p></div>
      </motion.section>
      <Section id="about" name="About" eyebrow="01 / About" title="Curious by default. Practical by design."><div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]"><p className="max-w-xl text-base leading-7 text-stone-400">I&apos;m a Computer Science student who enjoys turning fuzzy ideas into useful, well-structured products. My work spans responsive Next.js interfaces, RESTful Node APIs, and Java services — always with an eye on the details that make software dependable.</p><div className="flex flex-wrap content-start gap-2">{["MERN Stack", "Next.js", "TypeScript", "Java", "REST APIs", "Problem Solving"].map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-sm text-stone-300">{tag}</span>)}</div></div></Section>
      <Section id="education" name="Education" eyebrow="02 / Education" title="The foundations."><article className="rounded-lg border border-white/10 bg-[#111111] p-5 shadow-2xl shadow-black/20 sm:p-6"><div className="flex flex-col justify-between gap-4 sm:flex-row"><div><p className="text-lg font-medium">{education.degree}</p><p className="mt-1 text-stone-400">{education.branch} · {education.institution}</p></div><p className="text-sm text-blue-400">{education.period}</p></div><div className="mt-6 grid gap-5 border-t border-white/10 pt-5 sm:grid-cols-3"><Detail label="CGPA" value={education.cgpa} /><Detail label="Coursework" value={education.coursework.join(" · ")} /><Detail label="Growth" value={education.achievement} /></div></article></Section>
      <Section id="projects" name="Projects" eyebrow="03 / Selected Work" title="Things I&apos;ve built."><div className="grid gap-4 md:grid-cols-2">{projects.map((project) => <motion.article whileHover={{ y: -4 }} transition={{ duration: .18 }} key={project.title} className="group overflow-hidden rounded-lg border border-white/10 bg-[#111111] shadow-xl shadow-black/20"><div className="relative aspect-[16/8] overflow-hidden border-b border-white/10 bg-[#0d1525]"><Image src={project.image} alt={`${project.title} interface preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />{project.featured && <span className="absolute left-4 top-4 rounded bg-blue-600 px-2 py-1 text-xs font-medium">Featured</span>}</div><div className="p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="font-medium text-stone-100">{project.title}</h3><p className="mt-2 text-sm leading-6 text-stone-400">{project.description}</p></div><Code2 className="shrink-0 text-blue-400" size={19} /></div><div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-500">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="mt-5 flex gap-4 text-sm"><External href={project.github} label="GitHub" icon={<GitFork size={15} />} /><External href={project.live} label="Live demo" icon={<ArrowUpRight size={15} />} /></div></div></motion.article>)}</div></Section>
      <Section id="certifications" name="Certifications" eyebrow="04 / Certifications" title="Continuing the practice."><div className="grid gap-3 sm:grid-cols-3">{certifications.map((cert) => <a key={cert.name} href={cert.url} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-[#111111] p-4 transition hover:-translate-y-0.5 hover:border-blue-500/50 focus-visible:outline-2 focus-visible:outline-blue-500"><p className="font-medium">{cert.name}</p><p className="mt-2 text-sm text-stone-400">{cert.issuer} · {cert.year}</p><span className="mt-4 inline-flex items-center gap-1 text-xs text-blue-400">Credential <ArrowUpRight size={13} /></span></a>)}</div></Section>
      <Section id="contact" name="Contact" eyebrow="05 / Contact" title="Let&apos;s connect."><div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]"><div><p className="leading-7 text-stone-400">I&apos;m open to internships, freelance work, and conversations with people building useful things. Send a note — I&apos;ll get back to you soon.</p><SocialLinks className="mt-6" /></div><form onSubmit={submitForm} className="space-y-4" aria-label="Contact form"><Field label="Name" name="name" type="text" /><Field label="Email" name="email" type="email" /><label className="block text-sm text-stone-300">Message<textarea required name="message" rows={4} className="mt-2 w-full resize-none rounded-md border border-white/10 bg-white/[.03] px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-600 focus:border-blue-500" placeholder="What would you like to build?" /></label><button disabled={status === "sending"} className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium transition hover:bg-blue-500 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">{status === "sending" ? "Sending…" : "Send message"}<Send size={15} /></button>{status === "sent" && <p className="text-sm text-blue-400">Thanks — your message has been sent.</p>}{status === "error" && <p className="text-sm text-red-400">Please add your Formspree form ID in components/portfolio.tsx, then try again.</p>}</form></div></Section>
    </div><footer className="border-t border-white/10 py-7 text-center text-sm text-stone-500">Designed & built by Madhurima Panigrahi · {new Date().getFullYear()}</footer>
  </main>;
}

function Section({ id, name, eyebrow, title, children }: { id: string; name: string; eyebrow: string; title: string; children: React.ReactNode }) { return <motion.section {...fade} transition={{ duration: .4 }} id={id} data-name={name} className="section-anchor py-16 sm:py-20"><p className="text-sm font-medium text-blue-400">{eyebrow}</p><h2 className="mt-3 text-2xl font-semibold tracking-[-.04em] sm:text-3xl">{title}</h2><div className="mt-8">{children}</div></motion.section>; }
function Detail({ label, value }: { label: string; value: string }) { return <div><p className="text-xs font-medium uppercase tracking-wider text-stone-500">{label}</p><p className="mt-1.5 text-sm leading-6 text-stone-300">{value}</p></div>; }
function External({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) { return <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-stone-300 transition hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500">{icon}{label}</a>; }
function Field({ label, name, type }: { label: string; name: string; type: string }) { return <label className="block text-sm text-stone-300">{label}<input required name={name} type={type} className="mt-2 w-full rounded-md border border-white/10 bg-white/[.03] px-3 py-2.5 text-sm outline-none transition placeholder:text-stone-600 focus:border-blue-500" placeholder={label === "Name" ? "Your name" : "you@example.com"} /></label>; }
function SocialLinks({ className }: { className?: string }) { return <div className={`flex items-center gap-4 ${className ?? ""}`}><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-stone-400 transition hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500"><GitFork size={19} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-stone-400 transition hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500"><ContactRound size={19} /></a><a href={`mailto:${profile.email}`} aria-label="Email" className="text-stone-400 transition hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500"><Mail size={19} /></a></div>; }
