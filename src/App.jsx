import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Shield,
  Cpu,
  BrainCircuit,
  Radio,
  Lock,
  GraduationCap,
  Gamepad,
  BriefcaseBusiness,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Code2,
  Languages,
  Award,
  Users,
  Heart,
  ChevronDown,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/* ─── animation variants ─────────────────────────────────────── */
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

/* ─── accent palette — one colour per project domain ─────────── */
const ACCENTS = {
  green:  { tag: "rgba(74,222,128,0.12)",  tagBorder: "rgba(74,222,128,0.25)",  tagText: "#4ade80",  cardBorder: "rgba(34,197,94,0.22)",  glow: "rgba(34,197,94,0.18)",  iconBg: "rgba(34,197,94,0.12)"  },
  purple: { tag: "rgba(167,139,250,0.10)", tagBorder: "rgba(167,139,250,0.22)", tagText: "#a78bfa",  cardBorder: "rgba(167,139,250,0.22)", glow: "rgba(167,139,250,0.15)", iconBg: "rgba(167,139,250,0.12)" },
  teal:   { tag: "rgba(45,212,191,0.10)",  tagBorder: "rgba(45,212,191,0.22)",  tagText: "#2dd4bf",  cardBorder: "rgba(20,184,166,0.22)",  glow: "rgba(20,184,166,0.15)",  iconBg: "rgba(20,184,166,0.12)"  },
  amber:  { tag: "rgba(251,191,36,0.10)",  tagBorder: "rgba(251,191,36,0.22)",  tagText: "#fbbf24",  cardBorder: "rgba(251,191,36,0.22)",  glow: "rgba(251,191,36,0.13)",  iconBg: "rgba(251,191,36,0.10)"  },
  lime:   { tag: "rgba(163,230,53,0.10)",  tagBorder: "rgba(163,230,53,0.22)",  tagText: "#a3e635",  cardBorder: "rgba(163,230,53,0.22)",  glow: "rgba(163,230,53,0.12)",  iconBg: "rgba(163,230,53,0.10)"  },
  sky:    { tag: "rgba(56,189,248,0.10)",  tagBorder: "rgba(56,189,248,0.22)",  tagText: "#38bdf8",  cardBorder: "rgba(56,189,248,0.22)",  glow: "rgba(56,189,248,0.13)",  iconBg: "rgba(56,189,248,0.10)"  },
};

/* ─── project data ────────────────────────────────────────────── */
const projects = [
  {
    title: "Secure Embedded Wireless Vehicle Architecture",
    type: "Embedded Security",
    accent: "green",
    icon: Shield,
    summary:
      "Built a secure BLE communication layer between an embedded Linux board (Xilinx ZCU102) and ESP32 microcontroller using authenticated pairing, encrypted transport, and TLS.",
    highlights: [
      "Implemented authenticated BLE pairing and encrypted GATT transport",
      "Deployed wolfSSL TLS 1.2 over BLE connection with SPIFFS certificate storage",
      "Used AES-GCM for real-time encryption of movement packets",
    ],
    tags: ["BLE", "ESP32", "wolfSSL", "AES-GCM-256", "C"],
  },
  {
    title: "Security-Relevant Hallucinations in Frontier LVLMs",
    type: "AI Security Research",
    accent: "purple",
    icon: BrainCircuit,
    summary:
      "Evaluated how frontier large vision-language models handle visual information from a security perspective, including prompt injection and hallucination classification.",
    highlights: [
      "Built a 100-case adversarial benchmark evaluating frontier LVLMs for prompt injection and hallucination.",
      "Quantified hallucination rates of 55% (Gemini), 35% (Opus), and 25% (o3) across visual prompt injection attacks.",
      "Demonstrated system prompt leakage and adversarial image misclassification across all three frontier models.",
    ],
    tags: ["LVLMs", "Prompt Injection", "AI Security", "Evaluation"],
  },
  {
    title: "Acoustic Detection of Adversarial UAVs",
    type: "Machine Learning",
    accent: "teal",
    icon: Cpu,
    summary:
      "Engineered a TensorFlow CNN for acoustic UAV detection with strong drone-present and no-drone validation performance.",
    highlights: [
      "Achieved 93.6% true positive rate",
      "Achieved 98.6% true negative rate",
      "Projected under $1M implementation versus a $40M system",
    ],
    tags: ["TensorFlow", "CNN", "Signal Processing", "Acoustics"],
  },
  {
    title: "Secure Password Manager & Generator",
    type: "Cryptography Tool",
    accent: "amber",
    icon: Lock,
    summary:
      "Created a password manager and generator focused on high-entropy credential creation and encrypted local storage.",
    highlights: [
      "Generated passwords with 128 bits of entropy",
      "Used secure storage to preserve credential integrity",
      "Encrypted sensitive data with AES",
    ],
    tags: ["C++", "Cryptography", "AES", "Secure Coding Practices"],
  },
  {
    title: "Laser Audio Communication System",
    type: "Hardware + Signals",
    accent: "lime",
    icon: Radio,
    summary:
      "Transmitted audio roughly 200 feet by modulating a laser with microphone and auxiliary input, then demodulating it with a solar-cell receiver.",
    highlights: [
      "Mixed mic and aux signals for transmission",
      "Amplified recovered audio to a speaker",
      "Built LED signal-strength feedback",
    ],
    tags: ["Circuits", "Signals", "Hardware", "Audio"],
  },
  {
    title: "Wordle Best Guesser",
    type: "Algorithms",
    accent: "sky",
    icon: Gamepad,
    summary:
      "Designed an algorithm that suggests the best next guess for the New York Times Wordle.",
    highlights: [
      "Validated on 100,000 simulations — 99.5% win rate, avg 3.602 guesses using RAISE as first guess",
      "Suggests next best guess based on current word feedback",
      "Returns words with highest information gain to minimise guesses per game",
    ],
    tags: ["Python", "Algorithms", "Information Gain"],
  },
  {
    title: "Rubik's Cube Solver",
    type: "Computer Vision",
    accent: "teal",
    icon: Box,
    summary:
      "Using OpenCV, creates a program to snapshot a scrambled Rubik's Cube and solve it in the fewest moves.",
    highlights: [
      "Detects face colours from webcam snapshots using HSV segmentation",
      "Integrated Kociemba two-phase algorithm to generate optimal solve sequences from the reconstructed cube state.",
      "Implemented fallback manual entry and multi-camera support to handle poor lighting and hardware variability.",
      "Packaged as a Python CLI with pytest test suite and orientation validation to catch impossible cube states.",
    ],
    tags: ["Python", "OpenCV", "Computer Vision", "Algorithms"],
  },
];

/* ─── experience data ─────────────────────────────────────────── */
const experiences = [
  {
    org: "RTX Pratt & Whitney",
    role: "Cybersecurity & Embedded Systems Research Intern",
    period: "Aug 2025 – May 2026",
    location: "Storrs, CT",
    bullets: [
      "Implemented AES-256-GCM real-time encryption in WebAssembly and on ESP32 to secure commands traffic.",
      "Built a shared wolfSSL AES-256-GCM C library to standardize encryption across Linux and ESP32.",
      "Engineered an Ubertooth One BLE attack suite to validate command injection and session hijacking mitigations.",
      "Validated wolfSSL TLS 1.2, mutual authentication, and AES-256-GCM defeated all attacks in secure mode.",
    ],
  },
  {
    org: "Synchrony Financial",
    role: "Cybersecurity Intern",
    period: "May 2024 – Aug 2025",
    location: "Stamford, CT",
    bullets: [
      "Automated weekly SLA tracking across 10,000+ risk profiles using VBA, eliminating missed deadlines.",
      "Resolved 300+ data mismatches across 1,300+ risk profiles via cross-validation, improving accuracy by 25%.",
      "Redesigned the company-wide Security Information Request Form, formally adopted across the organization.",
      "Deployed a Microsoft agentic AI to review Security Information Request Forms, cutting processing time by 90%.",
      "Researched industry breaches and CVEs to produce executive cybersecurity briefings for manager meetings.",
    ],
  },
  {
    org: "United States Department of State",
    role: "Machine Learning Research Intern",
    period: "Aug 2024 – Dec 2024",
    location: "Storrs, CT",
    bullets: [
      "Built a TensorFlow CNN using multi-taper spectrograms to detect RF-silent adversarial UA Vs for the U.S. Department of State, achieving 93.6% TPR and 98.6% TNR across a custom field-collected audio dataset.",
      "Tripled training data by recording consumer drone audio and applying multi-taper spectrogram preprocessing.",
      "Deployed Raspberry Pi with cheap microphones, replicating a $40M government system at 97% cost reduction.",
    ],
  },
  {
    org: "University of Connecticut",
    role: "Teaching Assistant",
    period: "Aug 2024 – May 2026",
    location: "Storrs, CT",
    bullets: [
      "Led cybersecurity lab sections and office hours covering red-team and blue-team programming fundamentals in Python and C.",
      "Covered cybersecurity (CSE 3140), computer security (CSE 4400/5400), and digital logic design (CSE 2301)"
    ],
  },
];

/* ─── skill groups ────────────────────────────────────────────── */
const skillGroups = [
  { title: "Languages",      icon: Code2,      accent: "green",  items: ["Python", "C", "C++", "R"] },
  { title: "Security + ML",  icon: Shield,     accent: "purple", items: ["PyCryptoDome", "Scapy", "OpenSSL", "PyTorch", "scikit-learn", "Hugging Face", "NumPy"] },
  { title: "Tools",          icon: Cpu,        accent: "teal",   items: ["Wireshark", "Nmap", "Docker", "Git", "VSCode", "PlatformIO", "ESP-IDF", "UART", "LTSpice"] },
  { title: "Spoken Languages", icon: Languages, accent: "lime",  items: ["English", "Spanish", "French"] },
];


/* ─── about data ──────────────────────────────────────────────── */
const aboutInterests = ["Interest 1", "Interest 2", "Interest 3", "Interest 4"];

const aboutFacts = [
  { value: "Fact value",   label: "fact label",   accent: "green"  },
  { value: "Fact value",   label: "fact label",   accent: "teal"   },
  { value: "Fact value",   label: "fact label",   accent: "lime"   },
];




/* ─── small reusable components ───────────────────────────────── */
function Tag({ children, accent }) {
  const a = ACCENTS[accent] ?? ACCENTS.green;
  return (
    <span
      style={{ background: a.tag, border: `1px solid ${a.tagBorder}`, color: a.tagText }}
      className="rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide"
    >
      {children}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400/60">
        {children}
      </p>
      <div className="h-px flex-1 bg-emerald-300/10" />
    </div>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400/60">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-sm leading-7 text-zinc-400">{children}</p>}
    </div>
  );
}

/* ─── accordion project row ───────────────────────────────────── */
function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const a = ACCENTS[project.accent] ?? ACCENTS.green;
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      style={{ borderColor: open ? a.cardBorder : "rgba(255,255,255,0.07)" }}
      className="rounded-2xl border bg-white/[0.03] transition-colors duration-300"
    >
      {/* ── collapsed row ── */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        {/* icon */}
        <div
          style={{ background: a.iconBg, border: `1px solid ${a.tagBorder}` }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
        >
          <Icon className="h-4 w-4" style={{ color: a.tagText }} />
        </div>

        {/* title + type */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-sm font-semibold text-white truncate">{project.title}</span>
            <span className="text-[10px] font-medium uppercase tracking-wide" style={{ color: a.tagText }}>
              {project.type}
            </span>
          </div>
          {/* tags — always visible */}
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Tag key={tag} accent={project.accent}>{tag}</Tag>
            ))}
          </div>
        </div>

        {/* chevron */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-4 w-4 text-zinc-500" />
        </motion.div>
      </button>

      {/* ── expanded content ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              style={{ borderTop: `1px solid ${a.cardBorder}` }}
              className="px-5 pb-5 pt-4"
            >
              {/* subtle glow behind content */}
              <div
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${a.glow}, transparent)` }}
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-40"
              />

              <p className="text-sm leading-7 text-zinc-300">{project.summary}</p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-400">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: a.tagText }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── main app ────────────────────────────────────────────────── */
export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020c06] text-zinc-100">

      {/* ── ambient background ── */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 15% 20%, rgba(34,197,94,0.11) 0%, transparent 60%),
              radial-gradient(ellipse 40% 50% at 80% 10%, rgba(20,184,166,0.09) 0%, transparent 55%),
              radial-gradient(ellipse 35% 35% at 90% 75%, rgba(163,230,53,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 50% 30% at 30% 90%, rgba(52,211,153,0.06) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── nav ── */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-300/10">
            <Sparkles className="h-4 w-4 text-emerald-300" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">Mason Moore</p>
            <p className="text-[10px] text-zinc-500">Cybersecurity · AI/ML · Embedded</p>
          </div>
        </a>

        <div className="hidden items-center gap-1 text-sm md:flex">
          {["about", "projects", "experience", "skills", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="rounded-full px-4 py-1.5 text-xs capitalize text-zinc-400 transition hover:bg-white/5 hover:text-emerald-300"
            >
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* ── hero ── */}
      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:pb-28 md:pt-16"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/8 px-4 py-2 text-xs text-emerald-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80]" />
            Graduate Student in Computing @ UConn
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-[-0.04em] text-white md:text-6xl"
          >
            Building{" "}
            <span style={{ color: "#a3e635" }}>secure systems</span>{" "}
            where{" "}
            <span style={{ color: "#2dd4bf" }}>embedded hardware</span>
            {", "}AI/ML, and{" "}
            <span style={{ color: "#4ade80" }}>cyber defense</span>{" "}
            meet.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
            Cybersecurity-focused computer science engineer working across embedded security,
            machine learning research, secure automation, and applied systems design.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[#022c1e] transition hover:brightness-110"
              style={{ background: "linear-gradient(135deg, #22c55e, #14b8a6)" }}
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:masonmmoore1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:border-emerald-300/30 hover:bg-emerald-300/8"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-5 text-xs text-zinc-500">
            <a href="mailto:masonmmoore1@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /><Mail className="h-3.5 w-3.5" /> Email
            </a>
            <a href="https://github.com/M-moore1" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" /><FaGithub className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/masonmoore1" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400" /><FaLinkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-2xl opacity-40" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(52,211,153,0.25), transparent 70%)" }} />
          <div className="relative rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400/60">Profile</p>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-lime-400/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/8 bg-black/20 p-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">University of Connecticut</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">M.S. Computing, expected May 2027</p>
                    <p className="text-xs leading-5 text-zinc-400">B.A. Spanish, expected May 2027</p>
                    <p className="text-xs leading-5 text-zinc-400">B.S.E. Computer Science & Engineering</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { accent: "green",  Icon: Award, num: "6",    label: "Dean's List semesters" },
                  { accent: "teal",   Icon: Users, num: "100+", label: "Residents supported as RA" },
                  { accent: "lime",   Icon: Award, num: "93.6%", label: "UAV detection TPR" },
                  { accent: "amber",  Icon: Award, num: "98.6%", label: "UAV detection TNR" },
                ].map(({ accent, Icon, num, label }) => {
                  const a = ACCENTS[accent];
                  return (
                    <div key={label} style={{ background: a.iconBg, border: `1px solid ${a.tagBorder}` }} className="rounded-xl p-3">
                      <Icon className="mb-2 h-4 w-4" style={{ color: a.tagText }} />
                      <p className="text-xl font-bold text-white">{num}</p>
                      <p className="mt-0.5 text-[10px]" style={{ color: a.tagText }}>{label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-xl border border-lime-300/15 bg-lime-300/5 p-3">
                <p className="text-xs leading-6 text-lime-200/70">
                  🏅 Excellence in Spanish Engineering Award · North Shining Star · Most Dependable RA · Sarah Levitan Fellowship
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    {/* ── about ── */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="About me" title="The person behind the projects." />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-start"
        >
          {/* left — bio + interests */}
          <div className="space-y-4">
            <motion.div variants={fadeUp} className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-sm leading-7 text-zinc-400">
                {/* ✏️ bio paragraph 1 */}
                Your bio here...
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {/* ✏️ bio paragraph 2 */}
                Second paragraph here...
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-4 w-4 text-emerald-400" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400/60">
                  Interests &amp; Hobbies
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {aboutInterests.map((item) => (
                  <Tag key={item} accent="green">{item}</Tag>
                ))}
              </div>
            </motion.div>
          </div>

          {/* right — quick facts */}
          <motion.div variants={fadeUp} className="space-y-3">
            {aboutFacts.map(({ value, label, accent }) => {
              const a = ACCENTS[accent];
              return (
                <div
                  key={label}
                  style={{ border: `1px solid ${a.tagBorder}`, background: a.tag }}
                  className="rounded-2xl p-5 backdrop-blur"
                >
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="mt-0.5 text-[10px]" style={{ color: a.tagText }}>{label}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>


      {/* ── projects ── */}
      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with clear security, systems, and research impact."
        >
          Click any project to expand details. I tend to build things that have real-world impact or that I can directly use — not just resume fluff (Although it certainly helps).
        </SectionHeading>

        <div className="space-y-2.5">
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ── experience ── */}
      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="Experience" title="Cybersecurity, Research, and Teaching.">
          A focused timeline showing where my skills have been applied in professional and academic environments.
        </SectionHeading>

        <div className="relative space-y-4 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-emerald-300/15 md:before:left-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`relative grid gap-5 md:grid-cols-2 ${index % 2 ? "md:[&>div]:col-start-2" : ""}`}
            >
              <div className="relative ml-10 rounded-2xl border border-white/8 bg-white/[0.04] p-5 backdrop-blur md:ml-0">
                <span className="absolute -left-[2.25rem] top-6 h-3.5 w-3.5 rounded-full border-4 border-[#020c06] bg-emerald-400 md:left-auto md:right-[-2.4rem]" />
                <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] text-zinc-500">
                  <span>{exp.period}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
                </div>
                <h3 className="text-base font-bold text-white">{exp.org}</h3>
                <p className="mt-0.5 text-xs font-medium text-emerald-400">{exp.role}</p>
                <ul className="mt-4 space-y-2.5 text-xs leading-6 text-zinc-400">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <BriefcaseBusiness className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/60" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── skills ── */}
      <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionHeading eyebrow="Toolkit" title="A technical stack built around secure systems." />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            const a = ACCENTS[group.accent];
            return (
              <div
                key={group.title}
                style={{ border: `1px solid ${a.tagBorder}`, background: a.tag }}
                className="rounded-2xl p-5 backdrop-blur"
              >
                <div style={{ background: a.iconBg, border: `1px solid ${a.tagBorder}` }} className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5" style={{ color: a.tagText }} />
                </div>
                <h3 className="text-sm font-bold text-white">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Tag key={item} accent={group.accent}>{item}</Tag>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── leadership ── */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-emerald-300/15 bg-gradient-to-br from-emerald-300/8 to-white/[0.03] p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400/60">Leadership</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Beyond the code.</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                Experience leading recruiting operations, supporting residential communities, and teaching security-focused programming labs.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Vice President of Operations", body: "Built a recruiting pipeline for 80+ applicants for the Husky Quantitative Group — the first student-run quant fund at UConn." },
                { title: "Resident Assistant", body: "Managed community programming and resident engagement for 100+ residents across 5 semesters. Recipient of the North Shining Star (Highest Honor) and voted most dependable RA on staff of 43." },
                { title: "Teaching Assistant", body: "Led labs for 100+ students on hardware and software security practices and offensive attacks. Graded labs and provided feedback.", span: true },
              ].map(({ title, body, span }) => (
                <div key={title} className={`rounded-xl border border-white/8 bg-black/20 p-4 ${span ? "sm:col-span-2" : ""}`}>
                  <h3 className="text-sm font-bold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── contact footer ── */}
      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-8 md:px-10">
        <div className="flex flex-col gap-5 border-t border-white/8 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Let's build something secure.</h2>
            <p className="mt-1 text-xs text-zinc-500">
              Open to cybersecurity, AI security, embedded systems, and research opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 text-xs">
            {[
              { href: "mailto:masonmmoore1@gmail.com", icon: Mail, label: "Email", accent: "green" },
              { href: "https://github.com/M-moore1", icon: FaGithub, label: "GitHub", accent: "teal", external: true },
              { href: "https://linkedin.com/in/masonmoore1", icon: FaLinkedin, label: "LinkedIn", accent: "sky", external: true },
            ].map(({ href, icon: Icon, label, accent, external }) => {
              const a = ACCENTS[accent];
              return (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  style={{ border: `1px solid ${a.tagBorder}`, color: a.tagText, background: a.tag }}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 transition hover:brightness-110"
                >
                  <Icon className="h-3.5 w-3.5" /> {label}
                </a>
              );
            })}
          </div>
        </div>
      </footer>

    </main>
  );
}