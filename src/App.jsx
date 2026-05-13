import React from "react";
import { motion } from "framer-motion";
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
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Code2,
  Languages,
  Award,
  Users,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* PROJECT INFORMATION */}
const projects = [

  {
    title: "Secure Embedded Wireless Vehicle Architecture",
    type: "Embedded Security",
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
    icon: BrainCircuit,
    summary:
      "Evaluated how frontier large vision-language models handle visual information from a security perspective, including prompt injection and hallucination classification.",
    highlights: [
      "Designed tailored prompt-injection tests",
      "Classified unexpected outputs into security-relevant categories",
      "Focused on model obedience, hallucination risk, and visual attack surfaces",
    ],
    tags: ["LVLMs", "Prompt Injection", "AI Security", "Evaluation"],
  },

  {
    title: "Acoustic Detection of Adversarial UAVs",
    type: "Machine Learning",
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
    icon: Gamepad,
    summary:
      "Designed an algorithm that suggests a best next guess for the popular New York Times Wordle.",
    highlights: [
      "Validated accuracy on 100,000 simulations of games with RAISE as first guess; resulted in 99.5% game success, average of 3.602 guesses per game",
      "Suggests next best guess based on current word feedback",
      "Returns words with highest information gain to ensure lowest guesses per game",
    ],
    tags: ["Python", "Virtual Environment", "Algorithms", "Information Gain"],
  },

  {
    title: "Rubiks Cube Solver",
    type: "Computer Vision",
    icon: Box,
    summary:
      "Using OpenCV, create a program to take snapshots of a scrambled rubiks cube and solve the cube in the least number of moves.",
    highlights: [
      "Validated accuracy on 100,000 simulations of games with RAISE as first guess; resulted in 99.5% game success, average of 3.602 guesses per game",
      "Suggests next best guess based on current word feedback",
      "Returns words with highest information gain to ensure lowest guesses per game",
    ],
    tags: ["Python", "Virtual Environment", "Algorithms", "Information Gain"],
  },
];
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}



{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* EXPERIENCES INFORMATION */}
const experiences = [
  {
    org: "RTX Pratt & Whitney",
    role: "Cybersecurity & Embedded Systems Research Intern",
    period: "Aug 2025 – Present",
    location: "Storrs, CT",
    bullets: [
      "Engineered a secure BLE link between an embedded Linux board and ESP32 microcontroller in C.",
      "Implemented authenticated BLE pairing and encrypted GATT transport through UART AT commands.",
      "Delivered a secure transport layer after resolving flash partitioning, ESP-IDF, and API limitations.",
    ],
  },
  {
    org: "Synchrony Financial",
    role: "Cybersecurity Intern",
    period: "May 2024 – Aug 2025",
    location: "Stamford, CT",
    bullets: [
      "Automated weekly reporting across thousands of active risk profiles, reducing missed-SLA risk by over 90%.",
      "Reconciled 1,300+ risk profiles and resolved 300+ mismatches, improving reporting accuracy by 25%.",
      "Automated SIRF review workflows, reducing processing time by 90%.",
    ],
  },
  {
    org: "United States Department of State",
    role: "Machine Learning Research Intern",
    period: "Aug 2024 – Dec 2024",
    location: "Storrs, CT",
    bullets: [
      "Engineered a TensorFlow CNN for adversarial UAV acoustic detection.",
      "Reached 93.6% TPR and 98.6% TNR while modeling a substantially lower-cost alternative to a government system.",
    ],
  },
  {
    org: "University of Connecticut",
    role: "Teaching Assistant",
    period: "Aug 2024 – Present",
    location: "Storrs, CT",
    bullets: [
      "Led cybersecurity lab sections and office hours covering red-team and blue-team programming fundamentals in Python and C.",
    ],
  },
];
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}



{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* SKILLS INFORMATION */}
const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Python", "C", "C++", "R"],
  },
  {
    title: "Security + ML",
    icon: Shield,
    items: [
      "PyCryptoDome",
      "Scapy",
      "OpenSSL",
      "PyTorch",
      "scikit-learn",
      "Hugging Face",
      "NumPy",
    ],
  },
  {
    title: "Tools",
    icon: Cpu,
    items: [
      "Wireshark",
      "Nmap",
      "Docker",
      "Git",
      "VSCode",
      "PlatformIO",
      "ESP-IDF",
      "UART",
      "LTSpice",
    ],
  },
  {
    title: "Spoken Languages",
    icon: Languages,
    items: ["English", "Spanish", "French"],
  },
];
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}



{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------- */}
function Pill({ children }) {
  return (
    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-base leading-7 text-zinc-300">{children}</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06110d] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-lime-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(110,231,183,0.11)_1px,transparent_0)] [background-size:34px_34px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 shadow-lg shadow-emerald-950">
            <Sparkles className="h-5 w-5 text-emerald-300" />
          </div>

          <div>
            <p className="font-semibold tracking-tight text-white">
              Mason Moore
            </p>
            <p className="text-xs text-zinc-400">
              Cybersecurity • AI • Systems
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#projects" className="transition hover:text-emerald-300">
            Projects
          </a>
          <a href="#experience" className="transition hover:text-emerald-300">
            Experience
          </a>
          <a href="#skills" className="transition hover:text-emerald-300">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-emerald-300">
            Contact
          </a>
        </div>
      </nav>

      <section
        id="top"
        className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-28 md:pt-20"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            UConn Computer Science & Engineering • Spanish • M.S. Computing
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-7xl"
          >
            Building secure systems where embedded hardware, AI, and cyber
            defense meet.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
          >
            I am a cybersecurity-focused computer science engineer working
            across embedded security, machine learning research, secure
            automation, and applied systems design.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="mailto:masonmmoore1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
            >
              Contact me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400"
          >
            <a
              className="inline-flex items-center gap-2 hover:text-emerald-300"
              href="mailto:masonmmoore1@gmail.com"
            >
              <Mail className="h-4 w-4" /> Email
            </a>

            <a
              className="inline-flex items-center gap-2 hover:text-emerald-300"
              href="https://github.com/M-moore1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h-4 w-4" /> GitHub
            </a>

            <a
              className="inline-flex items-center gap-2 hover:text-emerald-300"
              href="https://linkedin.com/in/masonmoore1"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-emerald-300/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-300">
                Profile
              </p>

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
                <span className="h-3 w-3 rounded-full bg-lime-300/60" />
                <span className="h-3 w-3 rounded-full bg-white/25" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-start gap-4">
                  <GraduationCap className="mt-1 h-6 w-6 text-emerald-300" />

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      University of Connecticut
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-300">
                      M.S. Computing, expected May 2027
                    </p>
                    <p className="text-sm leading-6 text-zinc-300">
                      B.S.E. Computer Science & Engineering
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <Award className="mb-4 h-6 w-6 text-emerald-300" />
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Dean’s List semesters
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <Users className="mb-4 h-6 w-6 text-emerald-300" />
                  <p className="text-3xl font-semibold text-white">100+</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    Residents supported as RA
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5">
                <p className="text-sm leading-7 text-emerald-50">
                  Currently focused on embedded security, AI security
                  evaluation, systems programming, and practical cybersecurity
                  automation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with clear security, systems, and research impact."
        >
          Each card is designed to feel distinct, so recruiters can quickly
          understand the technical area, impact, and tools behind the work.
        </SectionHeading>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-emerald-300/10 blur-2xl transition group-hover:bg-emerald-300/20" />

                <div className="relative">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10">
                      <Icon className="h-6 w-6 text-emerald-300" />
                    </div>

                    <span className="rounded-full bg-black/25 px-3 py-1 text-xs text-zinc-400">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {project.summary}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section
        id="experience"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <SectionHeading
          eyebrow="Experience"
          title="Cybersecurity, research, and teaching experience."
        >
          A focused timeline showing where the portfolio skills have been
          applied in professional and academic environments.
        </SectionHeading>

        <div className="relative space-y-5 before:absolute before:left-4 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-emerald-300/20 md:before:left-1/2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`relative grid gap-5 md:grid-cols-2 ${
                index % 2 ? "md:[&>div]:col-start-2" : ""
              }`}
            >
              <div className="relative ml-10 rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur md:ml-0">
                <span className="absolute -left-[2.25rem] top-8 h-4 w-4 rounded-full border-4 border-[#06110d] bg-emerald-300 md:left-auto md:right-[-2.55rem]" />

                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {exp.location}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {exp.org}
                </h3>

                <p className="mt-1 text-sm font-medium text-emerald-300">
                  {exp.role}
                </p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10"
      >
        <SectionHeading
          eyebrow="Toolkit"
          title="A technical stack built around secure systems."
        >
          THIS IS A PLACEHOLDER
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/10">
                  <Icon className="h-6 w-6 text-emerald-300" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/15 to-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300">
                Leadership
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Beyond the code.
              </h2>

              <p className="mt-4 leading-7 text-zinc-300">
                Experience leading recruiting operations, supporting
                residential communities, and teaching security-focused
                programming labs.
              </p>
            </div>


            {/* HUSKY QUANTITATIVE GROUP INFORMATION */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <h3 className="font-semibold text-white">
                  Husky Quantitative Group
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Vice President of Operations. Built a recruiting pipeline for
                  80+ applicants and supported interview selection.
                </p>
              </div>


              {/* RESIDENT ASSISTANT INFORMATION */}
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <h3 className="font-semibold text-white">
                  Resident Assistant
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Managed programming and community engagement for 100+
                  residents across multiple academic years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-12 md:px-10"
      >
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Let’s build something secure.
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Open to cybersecurity, AI security, embedded systems, and research
              opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:masonmmoore1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-200 transition hover:border-emerald-300/40 hover:text-emerald-300"
            >
              <Mail className="h-4 w-4" /> Email
            </a>



            <a
              href="https://github.com/M-moore1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-200 transition hover:border-emerald-300/40 hover:text-emerald-300"
            >
              <FaGithub className="h-4 w-4" /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/masonmoore1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-200 transition hover:border-emerald-300/40 hover:text-emerald-300"
            >
              <FaLinkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
