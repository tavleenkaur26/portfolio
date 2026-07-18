"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.42.36.78 1.08.78 2.18 0 1.57-.02 2.84-.02 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-amber mb-4">
      {children}
    </p>
  );
}

function SectionWrap({
  id,
  children,
  className = "",
  compact = false,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 md:px-10 max-w-7xl mx-auto ${compact ? "py-14 md:py-16" : "py-24 md:py-32"} ${className}`}
    >
      {children}
    </section>
  );
}

const stack = [
  { label: "Languages", items: "Python, C++, Kotlin, JavaScript, TypeScript, SQL, R" },
  { label: "Machine learning", items: "PyTorch, scikit-learn, SHAP, time-series forecasting, explainable AI" },
  { label: "Frameworks", items: "React, Next.js, FastAPI, Android SDK, Tailwind CSS" },
  { label: "Databases", items: "PostgreSQL, Supabase, MongoDB" },
  { label: "Tools", items: "Git, GitHub, GCP, Vercel" },
];

const experience = [
  {
    role: "Research intern",
    org: "Indian Institute of Management, Lucknow",
    time: "Jul 2026 — Present · Noida, on-site",
    desc: "Faculty-led research on Mergers & Acquisitions at IIM Lucknow. I worked on collecting & cleaning data from financial databases like Bloomberg, building Python pipelines to automate the process, and running statistical analysis to uncover patterns in acquisition outcomes.",
  },
  {
    role: "Technical coordinator",
    org: "Protégé, IGDTUW",
    time: "Nov 2025 — Present",
    desc: "Frontend development for Protégé's 2025 website and for Protex Hackathon — built key UI components and pages as part of a team.",
  },
  {
    role: "Mentee",
    org: "XSEED",
    time: "Jan 2026 — Apr 2026",
    desc: "Recognised as a top mentee for excellence in DSA preparation and consistent performance.",
  },
  {
    role: "Scholar",
    org: "SheFi, Season 16",
    time: "Mar 2026 — May 2026",
    desc: "Selected for a global Web3 / DeFi scholarship program — completed coursework on Ethereum, smart contracts, and tokenomics, and collaborated with an international cohort through project-based learning.",
  },
];

const achievements = [
  "Top 20 teams — TechSeva Ideathon, Eli Lilly x BITS Pilani Hyderabad",
  "Finalist — Composit Ideathon, IIT Kharagpur",
  "Selected Scholar — SheFi Season 16 Global Web3 Education Program",
];

export default function Home() {
  return (
    <main className="bg-bg text-text">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-bg/70 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center gap-10">
          <a href="#top" className="font-display italic text-lg tracking-tight shrink-0">
            &lt;tk/&gt;
          </a>
          <nav className="hidden md:flex gap-8 font-mono text-[11px] tracking-[0.2em] uppercase text-text-dim mr-auto">
            <a href="#work" className="hover:text-amber transition-colors">Work</a>
            <a href="#experience" className="hover:text-violet transition-colors">Experience</a>
            <a href="#stack" className="hover:text-teal transition-colors">Stack</a>
            <a href="#contact" className="hover:text-amber transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4 ml-auto md:ml-0">
            <a href="https://github.com/tavleenkaur26" target="_blank" aria-label="GitHub" className="text-text-dim hover:text-violet transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tavleen-kaur-906554374/" target="_blank" aria-label="LinkedIn" className="text-text-dim hover:text-teal transition-colors">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:tavleen.0809@gmail.com" aria-label="Email" className="text-text-dim hover:text-amber transition-colors">
              <MailIcon size={18} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="font-mono text-[11px] tracking-[0.2em] uppercase border border-line px-3 py-1.5 rounded-full hover:border-amber hover:text-amber transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative px-6 md:px-10 max-w-7xl mx-auto pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="blob absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber pointer-events-none" />
        <div className="blob absolute top-40 -right-10 w-72 h-72 rounded-full bg-violet pointer-events-none" style={{ animationDelay: "3s" }} />

        <div className="relative grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 border border-line rounded-full px-3 py-1 mb-6 bg-bg-raised/60 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-dim">
                Open to opportunities
              </p>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 gradient-text">
              Tavleen Kaur
            </h1>
            <p className="font-display italic text-2xl md:text-3xl text-text-dim max-w-2xl leading-snug mb-6">
              I learn by building, breaking, and occasionally diving too deep into how things work.
            </p>
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-text-dim mb-8">
              New Delhi, India · CS sophomore, IGDTUW
            </p>

            <div className="flex flex-wrap gap-2 mb-9">
              {[
                { t: "Python", c: "amber" },
                { t: "PyTorch", c: "violet" },
                { t: "SHAP", c: "teal" },
                { t: "Next.js", c: "amber" },
                { t: "FastAPI", c: "violet" },
                { t: "Explainable AI", c: "teal" },
              ].map(({ t, c }) => (
                <span
                  key={t}
                  className={`font-mono text-[11px] tracking-[0.05em] rounded-full px-3 py-1 border ${
                    c === "amber"
                      ? "text-amber border-amber-dim/40 bg-amber/10"
                      : c === "violet"
                      ? "text-violet border-violet/40 bg-violet/10"
                      : "text-teal border-teal/40 bg-teal/10"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="font-mono text-[12px] tracking-[0.1em] uppercase bg-amber text-bg px-5 py-2.5 rounded-full hover:shadow-[0_0_24px_rgba(240,168,78,0.5)] transition-shadow"
              >
                View my work
              </a>
              <a
                href="https://github.com/tavleenkaur26"
                target="_blank"
                className="font-mono text-[12px] tracking-[0.1em] uppercase border border-line px-5 py-2.5 rounded-full hover:border-violet hover:text-violet transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/tavleen-kaur-906554374/"
                target="_blank"
                className="font-mono text-[12px] tracking-[0.1em] uppercase border border-line px-5 py-2.5 rounded-full hover:border-teal hover:text-teal transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="justify-self-center md:justify-self-end"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="glow-ring absolute -inset-1.5 rounded-full" />
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-bg">
                <Image
                  src="/assets/pfp.png"
                  alt="Tavleen Kaur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrap id="about" className="border-t border-line">
        <Reveal>
          <Eyebrow>About</Eyebrow>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* LEFT: About */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="rounded-2xl border border-amber/25 bg-amber/5 p-8 h-full hover:border-amber/50 transition-colors">
                <p className="font-display text-2xl leading-relaxed">
                  I&apos;m a second-year CS student who learns best by building — full-stack apps,
                  mobile tools, applied ML systems, whatever the problem needs. I like going past
                  the surface: understanding <span className="text-amber italic">why</span> a
                  system works, not just shipping the feature.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-6">
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-violet/25 bg-violet/5 p-6 h-full hover:border-violet/50 transition-colors">
                  <p className="font-display text-3xl text-violet mb-1">2</p>
                  <p className="text-text-dim text-sm leading-snug">
                    ML systems shipped end-to-end — an explainable intrusion detector and a
                    glucose forecasting copilot.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-teal/25 bg-teal/5 p-6 h-full hover:border-teal/50 transition-colors">
                  <p className="font-display text-3xl text-teal mb-1">250+</p>
                  <p className="text-text-dim text-sm leading-snug">
                    DSA problems solved on LeetCode, with Codeforces slowly climbing alongside.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* RIGHT: Education */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <div className="group rounded-2xl border border-line hover:border-amber/60 bg-bg-raised/40 p-6 transition-all hover:shadow-[0_0_30px_rgba(240,168,78,0.12)] h-full">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber mb-3">2025 — 2029</p>
                <p className="font-display text-xl mb-1">Indira Gandhi Delhi Technical University for Women</p>
                <p className="text-text-dim mt-1 mb-4">B.Tech, Computer Science Engineering</p>
                <span className="font-mono text-[12px] text-amber border border-amber/30 rounded-full px-3 py-1.5 bg-amber/5">CGPA: 9.115 (1st year)</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="group rounded-2xl border border-line hover:border-teal/60 bg-bg-raised/40 p-6 transition-all hover:shadow-[0_0_30px_rgba(94,234,212,0.12)] h-full">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-3">2011 — 2025</p>
                <p className="font-display text-xl mb-1">Bal Bharati Public School, Pitampura</p>
                <p className="text-text-dim mt-1 mb-4">CBSE</p>
                <div className="flex gap-2">
                  <span className="font-mono text-[12px] text-teal border border-teal/30 rounded-full px-3 py-1.5 bg-teal/5">Class X: 97%</span>
                  <span className="font-mono text-[12px] text-teal border border-teal/30 rounded-full px-3 py-1.5 bg-teal/5">Class XII: 95%</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrap>

      <SectionWrap id="work" className="border-t border-line">
        <Reveal>
          <Eyebrow>Selected work</Eyebrow>
        </Reveal>

        <Reveal className="mt-10">
          <div className="group rounded-2xl border border-line hover:border-amber/60 transition-all p-6 md:p-8 bg-bg-raised/40 hover:shadow-[0_0_40px_rgba(240,168,78,0.15)]">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-amber mb-3">01 · T1D forecasting copilot</p>
                <h3 className="font-display text-3xl mb-4">DiaBloom</h3>
                <p className="text-text-dim leading-relaxed mb-5">
                  A glucose forecasting copilot for Type 1 diabetes. A LSTM model forecasts hypoglycemic events 30 minutes ahead, with SHAP explaining every prediction and an LLM layer reading meals from text or photos.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="border border-amber/30 bg-amber/5 rounded-lg px-3 py-2.5">
                    <p className="font-display text-xl text-amber">21.27</p>
                    <p className="font-mono text-[10px] text-text-dim uppercase tracking-[0.1em]">MAE mg/dL</p>
                  </div>
                  <div className="border border-amber/30 bg-amber/5 rounded-lg px-3 py-2.5">
                    <p className="font-display text-xl text-amber">97.5%</p>
                    <p className="font-mono text-[10px] text-text-dim uppercase tracking-[0.1em]">Hypo accuracy</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["PyTorch", "FastAPI", "Next.js", "Supabase", "SHAP"].map((t) => (
                    <span key={t} className="font-mono text-[10px] text-amber border border-amber/30 rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
                <a href="https://github.com/tavleenkaur26/diabloom" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase text-amber hover:opacity-70 transition-opacity">Code ↗</a>
              </div>
              <div className="md:col-span-3 rounded-lg overflow-hidden border border-line group-hover:border-amber/40 transition-colors">
                <Image src="/assets/diabloom-1.png" alt="DiabLoom dashboard" width={1200} height={800} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="group rounded-2xl border border-line hover:border-violet/60 transition-all p-6 md:p-8 bg-bg-raised/40 hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2 md:order-2">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-violet mb-3">02 · Explainable intrusion detection</p>
                <h3 className="font-display text-3xl mb-4">TrustSOC AI</h3>
                <p className="text-text-dim leading-relaxed mb-5">
                  An intrusion detection system that explains its own verdicts. An XGBoost
                  classifier flags network threats, SHAP grounds every incident in the exact
                  evidence the model used, and an LLM layer narrates it — restricted to
                  pre-verified facts only, so it can&apos;t invent an IP or a verdict.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="border border-violet/30 bg-violet/5 rounded-lg px-3 py-2.5">
                    <p className="font-display text-xl text-violet">0.96</p>
                    <p className="font-mono text-[10px] text-text-dim uppercase tracking-[0.1em]">Macro F1</p>
                  </div>
                  <div className="border border-violet/30 bg-violet/5 rounded-lg px-3 py-2.5">
                    <p className="font-display text-xl text-violet">11</p>
                    <p className="font-mono text-[10px] text-text-dim uppercase tracking-[0.1em]">Threat classes</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["XGBoost", "SHAP", "Streamlit", "CICIDS2017"].map((t) => (
                    <span key={t} className="font-mono text-[10px] text-violet border border-violet/30 rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href="https://github.com/tavleenkaur26/trustsoc-ai" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase text-violet hover:opacity-70 transition-opacity">Code ↗</a>
                  <a href="https://trustsoc-ai.streamlit.app/" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase text-violet hover:opacity-70 transition-opacity">Live ↗</a>
                </div>
              </div>
              <div className="md:col-span-3 md:order-1 rounded-lg overflow-hidden border border-line group-hover:border-violet/40 transition-colors">
                <Image src="/assets/trustsoc-1.png" alt="TrustSOC AI dashboard" width={1400} height={900} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="group rounded-2xl border border-line hover:border-teal/60 transition-all p-6 md:p-8 bg-bg-raised/40 hover:shadow-[0_0_40px_rgba(94,234,212,0.15)]">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal mb-3">03 · Android file cleaner</p>
                <h3 className="font-display text-3xl mb-4">TrashData</h3>
                <p className="text-text-dim leading-relaxed mb-5">
                  An Android app that scans device storage for junk — old files, large files, and
                  duplicates via MD5 hashing — and clears it safely with user confirmation. Runs
                  background scans through WorkManager and uses Groq-based AI tagging for smarter
                  file categorization.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5 max-w-xs">
                  <div className="border border-teal/30 bg-teal/5 rounded-lg px-3 py-2.5">
                    <p className="font-display text-xl text-teal">11</p>
                    <p className="font-mono text-[10px] text-text-dim uppercase tracking-[0.1em]">Junk files found</p>
                  </div>
                  <div className="border border-teal/30 bg-teal/5 rounded-lg px-3 py-2.5">
                    <p className="font-display text-xl text-teal">27.5</p>
                    <p className="font-mono text-[10px] text-text-dim uppercase tracking-[0.1em]">MB reclaimed</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Kotlin", "Android SDK", "WorkManager", "MPAndroidChart"].map((t) => (
                    <span key={t} className="font-mono text-[10px] text-teal border border-teal/30 rounded-full px-2.5 py-1">{t}</span>
                  ))}
                </div>
                <a href="https://github.com/tavleenkaur26" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase text-teal hover:opacity-70 transition-opacity">Code ↗</a>
              </div>
              <div className="md:col-span-2 rounded-lg overflow-hidden border border-line group-hover:border-teal/40 transition-colors max-w-[220px] mx-auto">
                <Image src="/assets/trashdata-1.png" alt="TrashData home screen" width={700} height={1200} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </SectionWrap>

      <SectionWrap id="experience" className="border-t border-line">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
        </Reveal>
        <div className="mt-8 space-y-3">
          {experience.map((e, i) => {
            const colors = ["amber", "violet", "teal", "amber"];
            const c = colors[i % colors.length];
            return (
              <Reveal key={e.role} delay={i * 0.05}>
                <div
                  className={`grid md:grid-cols-4 gap-4 p-6 rounded-xl border bg-bg-raised/20 transition-all ${
                    c === "amber"
                      ? "border-line hover:border-amber/50 hover:bg-amber/5"
                      : c === "violet"
                      ? "border-line hover:border-violet/50 hover:bg-violet/5"
                      : "border-line hover:border-teal/50 hover:bg-teal/5"
                  }`}
                >
                  <div className="md:col-span-1">
                    <p className="font-display text-xl">{e.role}</p>
                    <p className={`text-sm mt-1 ${c === "amber" ? "text-amber" : c === "violet" ? "text-violet" : "text-teal"}`}>{e.org}</p>
                    <p className="font-mono text-[11px] text-text-dim mt-2 uppercase tracking-[0.1em]">{e.time}</p>
                  </div>
                  <p className="md:col-span-3 text-text-dim leading-relaxed">{e.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrap>

      <SectionWrap id="achievements" className="border-t border-line" compact>
        <Reveal>
          <Eyebrow>Achievements</Eyebrow>
          <div className="grid md:grid-cols-3 gap-3">
            {achievements.map((a, i) => {
              const colors = ["amber", "violet", "teal"];
              const c = colors[i % 3];
              return (
                <div
                  key={a}
                  className={`border rounded-xl p-5 transition-all hover:shadow-lg ${
                    c === "amber"
                      ? "border-amber/30 bg-amber/5 hover:border-amber/60 hover:shadow-[0_0_30px_rgba(240,168,78,0.15)]"
                      : c === "violet"
                      ? "border-violet/30 bg-violet/5 hover:border-violet/60 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]"
                      : "border-teal/30 bg-teal/5 hover:border-teal/60 hover:shadow-[0_0_30px_rgba(94,234,212,0.15)]"
                  }`}
                >
                  <p className={`text-2xl mb-2 font-display ${c === "amber" ? "text-amber" : c === "violet" ? "text-violet" : "text-teal"}`}>★</p>
                  <p className="text-text-dim leading-snug">{a}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </SectionWrap>

      <SectionWrap id="stack" className="border-t border-line">
        <Reveal>
          <Eyebrow>Stack</Eyebrow>
          <div className="grid md:grid-cols-2 gap-4">
            {stack.map((s, i) => {
              const colors = ["amber", "violet", "teal", "amber", "violet"];
              const c = colors[i % colors.length];
              return (
                <div
                  key={s.label}
                  className={`rounded-2xl border p-6 transition-all ${i === stack.length - 1 ? "md:col-span-2" : ""} ${
                    c === "amber"
                      ? "border-amber/25 bg-amber/5 hover:border-amber/50 hover:shadow-[0_0_30px_rgba(240,168,78,0.1)]"
                      : c === "violet"
                      ? "border-violet/25 bg-violet/5 hover:border-violet/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.1)]"
                      : "border-teal/25 bg-teal/5 hover:border-teal/50 hover:shadow-[0_0_30px_rgba(94,234,212,0.1)]"
                  }`}
                >
                  <p className={`font-mono text-[11px] tracking-[0.2em] uppercase mb-4 ${c === "amber" ? "text-amber" : c === "violet" ? "text-violet" : "text-teal"}`}>{s.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.split(", ").map((item) => (
                      <span
                        key={item}
                        className={`font-mono text-[12px] rounded-full px-3 py-1.5 border transition-colors ${
                          c === "amber"
                            ? "text-amber border-amber/30 bg-bg/40 hover:bg-amber/15"
                            : c === "violet"
                            ? "text-violet border-violet/30 bg-bg/40 hover:bg-violet/15"
                            : "text-teal border-teal/30 bg-bg/40 hover:bg-teal/15"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </SectionWrap>

      <SectionWrap id="contact" className="border-t border-line relative overflow-hidden">
        <div className="blob absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-teal pointer-events-none" />
        <Reveal className="relative">
          <Eyebrow>Get in touch</Eyebrow>
          <p className="font-display text-3xl md:text-5xl max-w-2xl leading-tight mb-4 gradient-text">
            Always happy to talk about what I&apos;m building, or what you are.
          </p>
          <p className="text-text-dim text-sm md:text-base mb-10 max-w-xl">
            Open to interesting ideas, projects, research, collaborations, or just a good conversation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:tavleen.0809@gmail.com" className="font-mono text-[12px] tracking-[0.1em] uppercase bg-amber text-bg px-5 py-2.5 rounded-full hover:shadow-[0_0_24px_rgba(240,168,78,0.5)] transition-shadow">
              tavleen.0809@gmail.com
            </a>
            <a href="https://github.com/tavleenkaur26" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase border border-violet/40 text-violet px-5 py-2.5 rounded-full hover:bg-violet/10 transition-colors">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/tavleen-kaur-906554374/" target="_blank" className="font-mono text-[12px] tracking-[0.1em] uppercase border border-teal/40 text-teal px-5 py-2.5 rounded-full hover:bg-teal/10 transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </SectionWrap>

      <footer className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#top" className="font-display italic text-lg tracking-tight text-text-dim hover:text-amber transition-colors">
            &lt;/tk&gt;
          </a>
          <div className="flex items-center gap-5">
            <a href="https://github.com/tavleenkaur26" target="_blank" aria-label="GitHub" className="text-text-dim hover:text-violet transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tavleen-kaur-906554374/" target="_blank" aria-label="LinkedIn" className="text-text-dim hover:text-teal transition-colors">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:tavleen.0809@gmail.com" aria-label="Email" className="text-text-dim hover:text-amber transition-colors">
              <MailIcon size={18} />
            </a>
          </div>
          <p className="font-mono text-[11px] text-text-dim">© 2026 Tavleen Kaur · Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
