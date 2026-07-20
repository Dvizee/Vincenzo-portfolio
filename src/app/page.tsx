"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Trophy,
  Code2,
  Box,
  Wrench,
  Cpu,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-zinc-900">
      <PortfolioCursor />
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-0 space-y-0">
        {/* Hero */}
        <section
          id="about"
          data-portfolio-cursor="hero"
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-visible bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800"
        >
          {/* Waves */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <svg
              className="absolute bottom-8 h-52 w-full sm:bottom-[-40px] sm:h-auto"
              viewBox="0 0 1440 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="blue"
                d="M0,200 C300,120 600,300 900,220 C1100,160 1300,220 1440,200 L1440,400 L0,400 Z"
              />
            </svg>

            <svg
              className="absolute bottom-4 h-52 w-full sm:bottom-[-40px] sm:h-auto"
              viewBox="0 0 1440 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#60A5FA"
                d="M0,240 C350,170 650,330 1000,250 C1200,210 1350,260 1440,240 L1440,400 L0,400 Z"
              />
            </svg>

            <svg
              className="absolute bottom-0 h-52 w-full sm:bottom-[-40px] sm:h-auto"
              viewBox="0 0 1440 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#BFDBFE"
                d="M0,260 C350,200 650,360 1000,300 C1200,250 1350,300 1440,280 L1440,400 L0,400 Z"
              />
            </svg>
          </div>

          {/* Circles */}
          <div className="pointer-events-none absolute inset-0 z-20 hidden [@media(min-width:1450px)]:block">
            <div
              className="absolute h-[310px] w-[310px] rounded-full bg-white"
              style={{ left: 160, top: 140 }}
            />

            <div
              className="circle-intro-spin absolute h-[180px] w-[180px] rounded-full bg-white"
              style={{
                left: -50,
                top: 30,
                transformOrigin: "365px 265px",
              }}
            />

            <div
              className="absolute h-[310px] w-[310px] rounded-full bg-white"
              style={{ right: -125, bottom: 260 }}
            />

            <div
              className="circle-intro-spin-slow absolute h-[110px] w-[110px] rounded-full bg-white"
              style={{
                right: 65,
                bottom: 125,
                transformOrigin: "145px -180px",
              }}
            />
          </div>

          {/* Mobile hero circles */}
          <div className="pointer-events-none absolute inset-0 z-10 sm:hidden">
            <div className="absolute -right-12 -top-10 h-36 w-36 rounded-full bg-white" />
            <div className="absolute -left-3 bottom-40 h-40 w-40 rounded-full bg-white" />
          </div>

          <div className="relative z-30 mx-auto grid max-w-6xl grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-x-4 gap-y-7 px-4 pb-36 pt-12 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-x-8 sm:px-6 sm:pb-28 sm:pt-16 lg:grid-cols-[0.72fr_1.28fr] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-14 lg:gap-y-2 lg:pb-22 lg:pt-20">
            <div className="col-span-2 row-start-1 text-center lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:-translate-y-5 lg:self-end lg:text-left">
              <HeroHeading />
            </div>

            <div className="col-start-1 row-start-2 mx-auto w-full max-w-[10.5rem] self-center min-[430px]:max-w-[11.5rem] sm:max-w-[13rem] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:max-w-[20rem]">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full border border-white/20 bg-white/10 blur-[1px]" />
                <Image
                  src="/images/Vincenzo.png"
                  alt="Vincenzo Barager"
                  width={680}
                  height={900}
                  className="relative aspect-[4/5] w-full rounded-full border-4 border-white object-cover object-[center_18%] shadow-2xl shadow-blue-950/25"
                  priority
                />
              </div>
            </div>

            <div className="col-start-2 row-start-2 self-center text-left lg:col-start-2 lg:row-start-2 lg:self-start">
              <HeroBody />
            </div>
          </div>

        </section>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] hidden h-20 w-screen items-center justify-center bg-[#BFDBFE] sm:flex sm:h-24">
          <a
            href="#projects"
            className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 font-semibold tracking-wide text-blue-700 sm:gap-6 sm:px-6"
          >
            <span className="h-0.5 flex-grow bg-blue-700" />
            <span className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-lg">
              scroll down to see my work
              <span className="animate-[bounce_1.8s_ease-in-out_infinite] text-xl">
                ↓
              </span>
            </span>
            <span className="h-0.5 flex-grow bg-blue-700" />
          </a>
        </div>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-14 w-screen bg-gradient-to-b from-[#BFDBFE] via-purple-200 to-purple-100 sm:h-24" />

        {/* Projects */}
        <section
          data-portfolio-cursor="projects"
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-purple-100"
        >
          <TriangleBackground />

          <div
            id="projects"
            className="relative z-10 mx-auto max-w-6xl space-y-5 px-4 pb-14 pt-8 sm:space-y-8 sm:px-6 sm:pb-20 sm:pt-16"
          >
            <SectionHeading
              id="projects-heading"
              title="Projects"
              baseBarClassName="bg-purple-600"
              revealBarClassName="bg-white"
              baseTextClassName="text-purple-700"
              revealTextClassName="text-white"
            />

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <ProjectCard
                title="Florida Tech AR Navigation App"
                desc="Senior design project developing an AR indoor navigation system for Florida Tech’s Evans Library using Unity and Vuforia. Provides multi-floor navigation, interactive AR information points, and self-guided tours that overlay digital content directly onto the physical environment."
                tags={["Unity", "Vuforia", "C#", "AR"]}
                image="/images/FITARNA.jpg"
                link="https://jacobhallburns.github.io/FITARNA/"
              />

              <ProjectCard
                title="MyMangaReader"
                desc="Full-stack manga tracker built with Next.js, Node.js, and MongoDB for searching, tracking, rating, and managing manga via the Kitsu API."
                tags={[
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Docker",
                  "TypeScript",
                  "JavaScript",
                ]}
                image="/images/MMRL.png"
                link="https://my-manga-reader-pi.vercel.app/"
              />

              <ProjectCard
                title="Rhythm Runner"
                desc="2D rhythm game racer with custom pixel art, made with Unity and Aseprite."
                tags={["Unity", "Aseprite", "C#"]}
                image="/images/rhythm-runner.png"
                link="https://tyler-win.itch.io/rhythm-runner"
              />

              <ProjectCard
                title="HeatShield"
                desc="Hackathon-built remote health monitoring prototype that simulates live operator telemetry, sends updates to a Flask backend, and displays status through operator and supervisor dashboards."
                tags={["React", "Flask", "Docker", "Leaflet", "Vite"]}
                image="/images/HeatShield.png"
                link="https://github.com/stamparkour/Groundswell-Startup-Hackathon-2026"
              />

              <ProjectCard
                title="Assembly Casino Game"
                desc="Slots + roulette in x86 assembly using Irvine32."
                tags={["x86", "Irvine32"]}
                image="/images/Casino.png"
                link="https://github.com/Dvizee/Assembly-Casino-Game"
              />

              <ProjectCard
                title="Personal Portfolio Website"
                desc="Responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, experience, technical skills, and achievements. Includes custom animated sections, responsive layouts, and deployed project links."
                tags={[
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Responsive Design",
                  "Vercel",
                ]}
                image="/images/Portfolio.png"
                link="https://github.com/Dvizee/Vincenzo-portfolio"
              />
            </div>
          </div>

          <div className="relative z-[1] h-24 bg-gradient-to-b from-purple-100 via-purple-500/55 to-purple-700 sm:h-32" />

          {/* Skills & Achievements */}
          <div
            id="skills"
            data-portfolio-cursor="skills"
            className="relative overflow-hidden bg-purple-700 pb-16 pt-4 text-white sm:pb-24 sm:pt-8"
          >
            <SkillsTriangleBackground />

            <div className="relative z-10 mx-auto max-w-6xl space-y-10 px-4 sm:px-6">
              <SectionHeading
                id="skills-heading"
                title="Skills & Achievements"
                baseBarClassName="bg-purple-200"
                revealBarClassName="bg-purple-700"
                baseTextClassName="text-white"
                revealTextClassName="text-purple-700"
              />

              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
                <SkillGroup
                  title="Languages"
                  skills={[
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "Java",
                    "C",
                    "C#",
                    "x86 Assembly",
                  ]}
                />

                <SkillGroup
                  title="Frameworks"
                  skills={["React", "Next.js", "Node.js", "Express", "Unity"]}
                />

                <SkillGroup
                  title="Tools"
                  skills={[
                    "Git",
                    "GitHub",
                    "Docker",
                    "NPM",
                    "Bash",
                    "GitHub Actions",
                    "Vercel",
                  ]}
                />

                <SkillGroup
                  title="Technologies"
                  skills={[
                    "MongoDB",
                    "REST APIs",
                    "AR Development",
                    "Game Development",
                  ]}
                />
              </div>

              <div
                data-portfolio-cursor="achievements"
                className="space-y-4"
              >
                <MaskedSubheading
                  id="achievements-heading"
                  title="Achievements"
                  baseTextClassName="text-white"
                  revealTextClassName="text-purple-700"
                />

                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                  <HighlightCard
                    icon={<Trophy size={20} />}
                    title="NCL Spring 2026 Individual Game"
                    value="Diamond-1 Medal"
                    desc="97th Percentile Overall"
                    detail="176th out of 7,011 · 2,880 / 3,000 points"
                  />

                  <HighlightCard
                    icon={<Trophy size={20} />}
                    title="NCL Spring 2026 Team Game"
                    value="Diamond-1 Medal"
                    desc="98th Percentile Overall"
                    detail="12th out of 341 · 2,985 / 3,000 points"
                  />

                  <HighlightCard
                    icon={<Trophy size={20} />}
                    title="Dean’s List"
                    value="5x Dean’s List"
                    desc="Academic recognition"
                    detail="Fall 2022 · Fall 2023 · Spring 2025 · Fall 2025 · Spring 2026"
                  />

                  <HighlightCard
                    icon={<Trophy size={20} />}
                    title="Florida Medallion"
                    value="Scholarship"
                    desc="Merit-based academic scholarship"
                    detail="Florida Bright Futures"
                  />

                  <HighlightCard
                    icon={<Trophy size={20} />}
                    title="IBM SkillsBuild"
                    value="Digital Badge"
                    desc="Enterprise Design Thinking Practitioner"
                    detail="March 2026"
                  />

                  <HighlightCard
                    icon={<Trophy size={20} />}
                    title="IBM SkillsBuild"
                    value="Digital Badge"
                    desc="Make Agentic AI Work for You"
                    detail="March 2026"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-16 w-screen bg-gradient-to-b from-purple-700 via-purple-200 to-white sm:h-24" />

        {/* Experience */}
        <section
          id="experience"
          data-portfolio-cursor="experience"
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white"
        >
          <ExperienceBackground />

          <div className="relative z-10 mx-auto max-w-6xl space-y-6 px-4 pb-48 pt-7 sm:px-6 sm:pb-24 sm:pt-10">
            <SectionHeading
              id="experience-heading"
              title="Experience"
              baseBarClassName="bg-red-600"
              revealBarClassName="bg-white"
              baseTextClassName="text-red-600"
              revealTextClassName="text-white"
            />

            <div className="space-y-4">
              <ExperienceItem
                role="E-Commerce Assistant"
                company="Florida Institute of Technology"
                dates="September 2025 – December 2025"
                bullets={[
                  "Maintained and updated a web-to-print portal for campus print orders.",
                  "Configured products and pricing, and helped troubleshoot customer order issues.",
                  "Created and refined internal documentation (SOPs) to streamline recurring tasks.",
                ]}
              />

              <ExperienceItem
                role="Crew Member"
                company="Rathskeller, Florida Institute of Technology"
                dates="September 2023 – May 2025"
                bullets={[
                  "Displayed a high level of responsibility and reliability in performing managerial duties.",
                  "Demonstrated excellent customer service while completing orders in the campus eatery.",
                ]}
              />

              <ExperienceItem
                role="Team Member"
                company="Domino’s"
                dates="April 2021 – August 2024"
                bullets={[
                  "Collaborated in a fast-paced environment to keep orders accurate and on time.",
                  "Communicated clearly with coworkers and customers to resolve issues quickly.",
                ]}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden bg-red-500 py-20 text-white sm:py-24"
      >
        <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rotate-12 border-[36px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-44 right-4 h-80 w-80 rotate-45 bg-red-300/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
              Contact
            </h2>
            <h3 className="mt-5 text-2xl font-bold leading-snug tracking-[-0.025em] text-white sm:text-3xl">
              Looking for a developer who enjoys building and improving real
              products?
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">
              I’m interested in software engineering, full-stack development,
              QA automation, and related early-career opportunities. Reach out
              and I’d be happy to talk.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="mailto:vincenzobarager@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-red-600 shadow-lg shadow-red-950/15 transition hover:-translate-y-0.5 hover:bg-red-50"
            >
              <Mail size={19} />
              Send an email
            </a>
            <a
              href="https://www.linkedin.com/in/vincenzo-barager/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <Linkedin size={19} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-red-950 text-red-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-white">Vincenzo Barager</p>
            <p className="mt-1 text-red-200/80">
              Software developer based in Florida.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <FooterLink href="https://github.com/Dvizee" label="GitHub">
              <Github size={18} />
            </FooterLink>
            <FooterLink
              href="https://www.linkedin.com/in/vincenzo-barager/"
              label="LinkedIn"
            >
              <Linkedin size={18} />
            </FooterLink>
            <FooterLink href="mailto:vincenzobarager@gmail.com" label="Email">
              <Mail size={18} />
            </FooterLink>
            <span className="ml-1 text-red-200/70">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}


const HERO_WORDS = ["building", "designing", "developing", "testing"] as const;

const HERO_WORD_TRANSITION_MS = 1100;
const HERO_WORD_HOLD_MS = 5200;

type HeroWordPhase = "idle" | "out" | "prepare-in" | "in";

function useHeroWordAnimation() {
  const measurementRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<HeroWordPhase>("idle");
  const [wordWidths, setWordWidths] = useState<number[]>([]);

  useEffect(() => {
    const measureWords = () => {
      const widths = measurementRefs.current.map(
        (element) => element?.getBoundingClientRect().width ?? 0,
      );

      if (widths.every((width) => width > 0)) {
        setWordWidths(widths);
      }
    };

    measureWords();
    document.fonts?.ready.then(measureWords).catch(() => undefined);
    window.addEventListener("resize", measureWords);

    return () => window.removeEventListener("resize", measureWords);
  }, []);

  useEffect(() => {
    if (wordWidths.length !== HERO_WORDS.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const halfTransition = HERO_WORD_TRANSITION_MS / 2;
    let timeoutId: number | null = null;

    if (phase === "idle") {
      timeoutId = window.setTimeout(() => {
        setPhase("out");
      }, HERO_WORD_HOLD_MS);
    } else if (phase === "out") {
      timeoutId = window.setTimeout(() => {
        setWordIndex((currentIndex) =>
          (currentIndex + 1) % HERO_WORDS.length,
        );
        setPhase("prepare-in");
      }, halfTransition);
    } else if (phase === "prepare-in") {
      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = window.requestAnimationFrame(() => {
          setPhase("in");
        });
      });
    } else if (phase === "in") {
      timeoutId = window.setTimeout(() => {
        setPhase("idle");
      }, halfTransition);
    }

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [phase, wordWidths]);

  return {
    measurementRefs,
    wordIndex,
    phase,
    wordWidths,
  };
}

function AnimatedHeroLine({
  animation,
  includeMeasurements = false,
}: {
  animation: ReturnType<typeof useHeroWordAnimation>;
  includeMeasurements?: boolean;
}) {
  const { measurementRefs, wordIndex, phase, wordWidths } = animation;
  const displayedWidth = wordWidths[wordIndex] ?? null;
  const halfTransition = HERO_WORD_TRANSITION_MS / 2;

  const wordMotionClass =
    phase === "out"
      ? "-translate-y-[0.24em] opacity-0"
      : phase === "prepare-in"
        ? "translate-y-[0.24em] opacity-0 transition-none"
        : "translate-y-0 opacity-100";

  return (
    <span
      className="inline-flex items-baseline whitespace-nowrap"
      aria-hidden="true"
    >
      <span
        className="relative mr-[0.22em] inline-block align-baseline transition-[width] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={displayedWidth ? { width: `${displayedWidth}px` } : undefined}
      >
        <span className="invisible block whitespace-nowrap leading-[1.06]">
          developing
        </span>

        <span
          className={`absolute bottom-0 left-0 block whitespace-nowrap leading-[1.06] ${wordMotionClass} ${
            phase === "prepare-in"
              ? ""
              : "transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          }`}
          style={
            phase === "prepare-in"
              ? undefined
              : { transitionDuration: `${halfTransition}ms` }
          }
        >
          {HERO_WORDS[wordIndex]}
        </span>
      </span>

      <span className="whitespace-nowrap leading-[1.06]">software.</span>

      {includeMeasurements ? (
        <span
          className="pointer-events-none fixed -left-[9999px] top-0 opacity-0"
          aria-hidden="true"
        >
          {HERO_WORDS.map((word, index) => (
            <span
              key={word}
              ref={(element) => {
                measurementRefs.current[index] = element;
              }}
              className="absolute whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </span>
      ) : null}
    </span>
  );
}

function HeroHeading() {
  const animation = useHeroWordAnimation();

  const headingText = (includeMeasurements = false) => (
    <>
      <span className="block whitespace-nowrap">
        Computer Science student
      </span>
      <span className="block">
        <span className="sr-only">building software.</span>
        <AnimatedHeroLine
          animation={animation}
          includeMeasurements={includeMeasurements}
        />
      </span>
    </>
  );

  const clipStyle: React.CSSProperties = {
    clipPath:
      "circle(var(--hero-cursor-radius, 0px) at var(--hero-cursor-x, -100px) var(--hero-cursor-y, -100px))",
    WebkitClipPath:
      "circle(var(--hero-cursor-radius, 0px) at var(--hero-cursor-x, -100px) var(--hero-cursor-y, -100px))",
  };

  return (
    <h1
      id="hero-heading"
      className="relative mx-auto max-w-3xl text-[clamp(1.65rem,4vw,3.5rem)] font-black leading-[1.06] tracking-[-0.04em] text-white drop-shadow-[0_2px_3px_rgba(30,64,175,0.45)] lg:mx-0"
    >
      <span className="relative z-0 block">{headingText(true)}</span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 block text-blue-700"
        style={clipStyle}
      >
        {headingText(false)}
      </span>
    </h1>
  );
}

function HeroBody() {
  const bodyText = (
    <>
      <p>
        I’m a CS major at Florida Tech with a passion for creating. I enjoy
        turning ideas into working software across web development, game
        engines, and systems programming.
      </p>

      <p>
        This site highlights projects I built to experiment, learn, and better
        understand how software works.
      </p>
    </>
  );

  const clipStyle: React.CSSProperties = {
    clipPath:
      "circle(var(--hero-cursor-radius, 0px) at var(--hero-cursor-x, -100px) var(--hero-cursor-y, -100px))",
    WebkitClipPath:
      "circle(var(--hero-cursor-radius, 0px) at var(--hero-cursor-x, -100px) var(--hero-cursor-y, -100px))",
  };

  return (
    <div
      id="hero-body"
      className="relative mx-0 mt-0 max-w-2xl text-[0.74rem] leading-[1.45] min-[430px]:text-sm min-[430px]:leading-6 sm:text-base sm:leading-7 lg:mt-2 lg:text-lg lg:leading-8"
    >
      <div className="relative z-0 space-y-3 text-blue-100 lg:space-y-4">
        {bodyText}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 space-y-3 text-blue-700 lg:space-y-4"
        style={clipStyle}
      >
        {bodyText}
      </div>
    </div>
  );
}

function SectionHeading({
  id,
  title,
  baseBarClassName,
  revealBarClassName,
  baseTextClassName,
  revealTextClassName,
}: {
  id: string;
  title: string;
  baseBarClassName: string;
  revealBarClassName: string;
  baseTextClassName: string;
  revealTextClassName: string;
}) {
  const hiddenPolygon =
    "polygon(-100px -100px, -100px -100px, -100px -100px)";

  return (
    <h2
      id={id}
      className="relative pl-4 text-3xl font-semibold sm:text-4xl"
    >
      <span
        aria-hidden="true"
        className={`absolute bottom-0 left-0 top-0 w-1 rounded-full ${baseBarClassName}`}
      />
      <span className={`relative z-0 block ${baseTextClassName}`}>
        {title}
      </span>
      <span
        id={`${id}-reveal`}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 block pl-4 ${revealTextClassName}`}
        style={{
          clipPath: hiddenPolygon,
          WebkitClipPath: hiddenPolygon,
        }}
      >
        <span
          className={`absolute bottom-0 left-0 top-0 w-1 rounded-full ${revealBarClassName}`}
        />
        {title}
      </span>
    </h2>
  );
}

function MaskedSubheading({
  id,
  title,
  baseTextClassName,
  revealTextClassName,
}: {
  id: string;
  title: string;
  baseTextClassName: string;
  revealTextClassName: string;
}) {
  const hiddenPolygon =
    "polygon(-100px -100px, -100px -100px, -100px -100px)";

  return (
    <h3 id={id} className="relative text-2xl font-semibold">
      <span className={`relative z-0 block ${baseTextClassName}`}>
        {title}
      </span>
      <span
        id={`${id}-reveal`}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 block ${revealTextClassName}`}
        style={{
          clipPath: hiddenPolygon,
          WebkitClipPath: hiddenPolygon,
        }}
      >
        {title}
      </span>
    </h3>
  );
}

type PortfolioCursorVariant =
  | "hidden"
  | "hero"
  | "projects"
  | "skills"
  | "achievements"
  | "experience";

const CURSOR_POLYGONS = {
  circle:
    "polygon(50.00% 0.00%, 62.94% 1.70%, 75.00% 6.70%, 85.36% 14.64%, 93.30% 25.00%, 98.30% 37.06%, 100.00% 50.00%, 98.30% 62.94%, 93.30% 75.00%, 85.36% 85.36%, 75.00% 93.30%, 62.94% 98.30%, 50.00% 100.00%, 37.06% 98.30%, 25.00% 93.30%, 14.64% 85.36%, 6.70% 75.00%, 1.70% 62.94%, 0.00% 50.00%, 1.70% 37.06%, 6.70% 25.00%, 14.64% 14.64%, 25.00% 6.70%, 37.06% 1.70%)",
  triangle:
    "polygon(50.00% 0.00%, 56.25% 12.50%, 62.50% 25.00%, 68.75% 37.50%, 75.00% 50.00%, 81.25% 62.50%, 87.50% 75.00%, 93.75% 87.50%, 100.00% 100.00%, 87.50% 100.00%, 75.00% 100.00%, 62.50% 100.00%, 50.00% 100.00%, 37.50% 100.00%, 25.00% 100.00%, 12.50% 100.00%, 0.00% 100.00%, 6.25% 87.50%, 12.50% 75.00%, 18.75% 62.50%, 25.00% 50.00%, 31.25% 37.50%, 37.50% 25.00%, 43.75% 12.50%)",
  square:
    "polygon(50.00% 0.00%, 66.67% 0.00%, 83.33% 0.00%, 100.00% 0.00%, 100.00% 16.67%, 100.00% 33.33%, 100.00% 50.00%, 100.00% 66.67%, 100.00% 83.33%, 100.00% 100.00%, 83.33% 100.00%, 66.67% 100.00%, 50.00% 100.00%, 33.33% 100.00%, 16.67% 100.00%, 0.00% 100.00%, 0.00% 83.33%, 0.00% 66.67%, 0.00% 50.00%, 0.00% 33.33%, 0.00% 16.67%, 0.00% 0.00%, 16.67% 0.00%, 33.33% 0.00%)",
} as const;

function PortfolioCursor() {
  const followerRef = useRef<HTMLDivElement | null>(null);
  const physicsRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const pointerRef = useRef({ x: -100, y: -100, active: false });
  const rotationRef = useRef(0);
  const angularVelocityRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const variantRef = useRef<PortfolioCursorVariant>("hidden");
  const frameCounterRef = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<PortfolioCursorVariant>("hidden");

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(finePointer.matches);

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);

    return () => finePointer.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let frameId = 0;
    lastScrollYRef.current = window.scrollY;

    const applyVariant = (nextVariant: PortfolioCursorVariant) => {
      if (variantRef.current === nextVariant) return;

      variantRef.current = nextVariant;
      setVariant(nextVariant);
    };

    const updateVariantAtPosition = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y);
      const zone = element?.closest<HTMLElement>("[data-portfolio-cursor]");
      const nextVariant =
        (zone?.dataset.portfolioCursor as PortfolioCursorVariant | undefined) ??
        "hidden";

      applyVariant(nextVariant);
    };

    const updateHeroTextMask = (
      x: number,
      y: number,
      scale: number,
    ) => {
      const isHero = variantRef.current === "hero";
      const radius = isHero ? 32 * scale : 0;

      ["hero-heading", "hero-body"].forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        element.style.setProperty("--hero-cursor-x", `${x - rect.left}px`);
        element.style.setProperty("--hero-cursor-y", `${y - rect.top}px`);
        element.style.setProperty("--hero-cursor-radius", `${radius}px`);
      });
    };


    const updateSectionHeadingMasks = (
      x: number,
      y: number,
      scale: number,
    ) => {
      const masks = [
        {
          variant: "projects" as const,
          id: "projects-heading-reveal",
          shape: "triangle" as const,
          width: 56,
          height: 56,
          rotationOffset: 14,
        },
        {
          variant: "skills" as const,
          id: "skills-heading-reveal",
          shape: "triangle" as const,
          width: 60,
          height: 60,
          rotationOffset: -12,
        },
        {
          variant: "achievements" as const,
          id: "achievements-heading-reveal",
          shape: "triangle" as const,
          width: 60,
          height: 60,
          rotationOffset: 14,
        },
        {
          variant: "experience" as const,
          id: "experience-heading-reveal",
          shape: "square" as const,
          width: 52,
          height: 52,
          rotationOffset: 6,
        },
      ];

      masks.forEach((mask) => {
        const element = document.getElementById(mask.id);
        if (!element) return;

        if (variantRef.current !== mask.variant) {
          const hiddenPolygon =
            "polygon(-100px -100px, -100px -100px, -100px -100px)";
          element.style.clipPath = hiddenPolygon;
          element.style.setProperty("-webkit-clip-path", hiddenPolygon);
          return;
        }

        const rect = element.getBoundingClientRect();
        const centerX = x - rect.left;
        const centerY = y - rect.top;
        const halfWidth = (mask.width * scale) / 2;
        const halfHeight = (mask.height * scale) / 2;
        const angle =
          ((rotationRef.current + mask.rotationOffset) * Math.PI) / 180;
        const cosine = Math.cos(angle);
        const sine = Math.sin(angle);

        const points =
          mask.shape === "triangle"
            ? [
                { x: 0, y: -halfHeight },
                { x: halfWidth, y: halfHeight },
                { x: -halfWidth, y: halfHeight },
              ]
            : [
                { x: -halfWidth, y: -halfHeight },
                { x: halfWidth, y: -halfHeight },
                { x: halfWidth, y: halfHeight },
                { x: -halfWidth, y: halfHeight },
              ];

        const polygon = points
          .map((point) => {
            const rotatedX = point.x * cosine - point.y * sine;
            const rotatedY = point.x * sine + point.y * cosine;
            return `${centerX + rotatedX}px ${centerY + rotatedY}px`;
          })
          .join(", ");

        const clipPath = `polygon(${polygon})`;
        element.style.clipPath = clipPath;
        element.style.setProperty("-webkit-clip-path", clipPath);
      });
    };

    const animateFollower = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;

      velocityRef.current.x = (velocityRef.current.x + dx * 0.009) * 0.9;
      velocityRef.current.y = (velocityRef.current.y + dy * 0.009) * 0.9;

      currentRef.current.x += velocityRef.current.x;
      currentRef.current.y += velocityRef.current.y;

      const speed = Math.hypot(velocityRef.current.x, velocityRef.current.y);
      const scale = 1 + Math.min(speed * 0.0012, 0.025);

      angularVelocityRef.current += velocityRef.current.x * 0.0012;
      angularVelocityRef.current *= 0.94;
      rotationRef.current += angularVelocityRef.current;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;
      }

      if (physicsRef.current) {
        physicsRef.current.style.transform = `rotate(${rotationRef.current}deg) scale(${scale})`;
      }

      frameCounterRef.current += 1;
      if (frameCounterRef.current % 3 === 0 && pointerRef.current.active) {
        updateVariantAtPosition(currentRef.current.x, currentRef.current.y);
      }

      updateHeroTextMask(currentRef.current.x, currentRef.current.y, scale);
      updateSectionHeadingMasks(
        currentRef.current.x,
        currentRef.current.y,
        scale,
      );
      frameId = window.requestAnimationFrame(animateFollower);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const wasActive = pointerRef.current.active;
      const previousX = pointerRef.current.x;
      const previousY = pointerRef.current.y;

      pointerRef.current = { x: event.clientX, y: event.clientY, active: true };
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!wasActive) {
        currentRef.current = { x: event.clientX, y: event.clientY };
        velocityRef.current = { x: 0, y: 0 };
        updateVariantAtPosition(event.clientX, event.clientY);
      } else {
        const moveX = event.clientX - previousX;
        const moveY = event.clientY - previousY;
        velocityRef.current.x += moveX * 0.006;
        velocityRef.current.y += moveY * 0.006;
        angularVelocityRef.current += moveX * 0.004 + moveY * 0.002;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!pointerRef.current.active) return;

      const limitedDelta = Math.max(-180, Math.min(180, event.deltaY));
      velocityRef.current.y -= limitedDelta * 0.006;
      angularVelocityRef.current += limitedDelta * 0.0015;
    };

    const handleScroll = () => {
      const scrollDelta = window.scrollY - lastScrollYRef.current;
      lastScrollYRef.current = window.scrollY;

      if (pointerRef.current.active) {
        const limitedDelta = Math.max(-120, Math.min(120, scrollDelta));
        velocityRef.current.y -= limitedDelta * 0.004;
        angularVelocityRef.current += limitedDelta * 0.001;
      }

      updateVariantAtPosition(currentRef.current.x, currentRef.current.y);
    };

    const hideFollower = () => {
      pointerRef.current.active = false;
      applyVariant("hidden");

      ["hero-heading", "hero-body"].forEach((id) => {
        document
          .getElementById(id)
          ?.style.setProperty("--hero-cursor-radius", "0px");
      });

      [
        "projects-heading-reveal",
        "skills-heading-reveal",
        "achievements-heading-reveal",
        "experience-heading-reveal",
      ].forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const hiddenPolygon =
          "polygon(-100px -100px, -100px -100px, -100px -100px)";
        element.style.clipPath = hiddenPolygon;
        element.style.setProperty("-webkit-clip-path", hiddenPolygon);
      });
    };

    frameId = window.requestAnimationFrame(animateFollower);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", hideFollower);
    window.addEventListener("blur", hideFollower);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.removeEventListener("mouseleave", hideFollower);
      window.removeEventListener("blur", hideFollower);
    };
  }, [enabled]);

  if (!enabled) return null;

  const shapeStyle: React.CSSProperties =
    variant === "projects"
      ? {
          width: 56,
          height: 56,
          backgroundColor: "rgb(147 51 234)",
          borderRadius: "8%",
          clipPath: CURSOR_POLYGONS.triangle,
          transform: "rotate(14deg)",
          filter: "drop-shadow(0 7px 14px rgb(88 28 135 / 0.2))",
        }
      : variant === "skills"
        ? {
            width: 60,
            height: 60,
            backgroundColor: "rgb(255 255 255)",
            borderRadius: "8%",
            clipPath: CURSOR_POLYGONS.triangle,
            transform: "rotate(-12deg)",
            filter: "drop-shadow(0 7px 15px rgb(49 10 101 / 0.22))",
          }
        : variant === "achievements"
          ? {
              width: 60,
              height: 60,
              backgroundColor: "rgb(255 255 255)",
              borderRadius: "8%",
              clipPath: CURSOR_POLYGONS.triangle,
              transform: "rotate(14deg)",
              filter: "drop-shadow(0 7px 15px rgb(49 10 101 / 0.22))",
            }
          : variant === "experience"
          ? {
              width: 52,
              height: 52,
              backgroundColor: "rgb(239 68 68)",
              borderRadius: "5px",
              clipPath: CURSOR_POLYGONS.square,
              transform: "rotate(6deg)",
              filter: "drop-shadow(0 7px 14px rgb(127 29 29 / 0.2))",
            }
          : {
              width: 64,
              height: 64,
              backgroundColor: "rgb(255 255 255)",
              border: "1px solid rgb(255 255 255)",
              borderRadius: "50%",
              clipPath: CURSOR_POLYGONS.circle,
              transform: "rotate(0deg)",
              filter: "drop-shadow(0 0 16px rgb(255 255 255 / 0.2))",
            };

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[2] will-change-transform transition-opacity duration-300 ${
        variant === "hidden" ? "opacity-0" : "opacity-100"
      }`}
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div ref={physicsRef} className="will-change-transform">
          <div
            className={`transition-[width,height,background-color,border-color,border-radius,clip-path,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              variant === "hidden" ? "scale-50" : "scale-100"
            }`}
            style={shapeStyle}
          />
        </div>
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#about"
          className="min-w-0 truncate text-[1.35rem] font-semibold text-blue-600 sm:text-2xl lg:text-3xl"
          style={{ fontFamily: "var(--font-bungee-inline), cursive" }}
        >
          Vincenzo Barager
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          <HeaderLink href="#projects">Projects</HeaderLink>
          <HeaderLink href="#skills">Skills</HeaderLink>
          <HeaderLink href="#experience">Experience</HeaderLink>
          <HeaderLink href="#contact">Contact</HeaderLink>
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <HeaderIcon href="https://github.com/Dvizee" label="GitHub">
            <Github size={18} />
          </HeaderIcon>
          <HeaderIcon
            href="https://www.linkedin.com/in/vincenzo-barager/"
            label="LinkedIn"
          >
            <Linkedin size={18} />
          </HeaderIcon>
          <HeaderIcon href="mailto:vincenzobarager@gmail.com" label="Email">
            <Mail size={18} />
          </HeaderIcon>
          <a
            href="/Vincenzo-Barager-Resume.pdf"
            className="ml-1 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <FileText size={17} />
            <span className="hidden lg:inline">Resume</span>
          </a>
        </div>

        <MobileHeaderMenu />
      </div>
    </header>
  );
}

function MobileHeaderMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="relative z-[61] inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-700 shadow-sm transition hover:bg-blue-50"
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-[59] cursor-default bg-transparent"
            onClick={closeMenu}
          />

          <div className="absolute right-0 top-12 z-[60] w-64 overflow-hidden rounded-2xl border border-blue-100 bg-white p-3 shadow-2xl shadow-blue-950/15">
            <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-2">
              <MobileMenuLink href="#projects" onClick={closeMenu}>
                Projects
              </MobileMenuLink>
              <MobileMenuLink href="#skills" onClick={closeMenu}>
                Skills
              </MobileMenuLink>
              <MobileMenuLink href="#experience" onClick={closeMenu}>
                Experience
              </MobileMenuLink>
              <MobileMenuLink href="#contact" onClick={closeMenu}>
                Contact
              </MobileMenuLink>
            </nav>

            <div className="my-3 h-px bg-blue-100" />

            <div className="space-y-1">
              <MobileContactLink
                href="https://github.com/Dvizee"
                label="GitHub"
                onClick={closeMenu}
              >
                <Github size={18} />
              </MobileContactLink>
              <MobileContactLink
                href="https://www.linkedin.com/in/vincenzo-barager/"
                label="LinkedIn"
                onClick={closeMenu}
              >
                <Linkedin size={18} />
              </MobileContactLink>
              <MobileContactLink
                href="mailto:vincenzobarager@gmail.com"
                label="Email"
                onClick={closeMenu}
              >
                <Mail size={18} />
              </MobileContactLink>
              <MobileContactLink
                href="/Vincenzo-Barager-Resume.pdf"
                label="Resume"
                onClick={closeMenu}
              >
                <FileText size={18} />
              </MobileContactLink>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

function MobileMenuLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-xl bg-blue-50 px-3 py-2.5 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-100"
    >
      {children}
    </a>
  );
}

function MobileContactLink({
  href,
  label,
  onClick,
  children,
}: {
  href: string;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-blue-50 hover:text-blue-700"
    >
      <span className="text-blue-600">{children}</span>
      {label}
    </a>
  );
}

function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-3 text-sm font-bold text-zinc-600 transition hover:bg-blue-50 hover:text-blue-700"
    >
      <span className="inline-block scale-y-[1.22]">{children}</span>
    </a>
  );
}

function HeaderIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition hover:bg-blue-50 hover:text-blue-700"
    >
      {children}
    </a>
  );
}

function ExperienceItem({
  role,
  company,
  dates,
  bullets,
}: {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-red-700 bg-white p-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-sm sm:p-5">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-red-700 sm:text-lg">
            {role} <span className="text-xl text-zinc-400">•</span>{" "}
            <span className="text-base font-semibold text-zinc-800 sm:text-lg">
              {company}
            </span>
          </h3>
        </div>

        <div className="text-sm font-semibold text-red-500 sm:text-lg">
          {dates}
        </div>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-zinc-700 sm:text-base">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-800 bg-red-900 text-red-100 transition hover:bg-red-800 hover:text-white"
    >
      {children}
    </a>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  image,
  link,
  layout = "default",
}: {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  link: string;
  layout?: "default" | "side";
}) {
  if (layout === "side") {
    return (
      <div className="flex flex-col gap-6 rounded-2xl border border-purple-400 bg-white px-6 py-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-600 hover:shadow-sm sm:px-10 md:flex-row md:gap-12">
        <div className="flex flex-1 flex-col">
          <h3 className="text-base font-semibold">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-purple-700 underline-offset-4 hover:underline"
            >
              {title}
            </a>
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
            {desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs text-purple-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-39 flex-shrink-0 overflow-hidden rounded-md border border-zinc-100">
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={350}
            height={600}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-purple-400 bg-white p-2 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/10 sm:p-4">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mb-3 block overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 sm:mb-4 sm:rounded-none sm:bg-transparent"
      >
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={500}
          className="h-24 w-full object-contain transition duration-500 group-hover:scale-[1.025] min-[430px]:h-32 sm:h-56"
        />
      </a>

      <h3 className="text-[0.8rem] font-semibold leading-5 sm:text-base">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-purple-700 underline-offset-4 hover:underline"
        >
          {title}
        </a>
      </h3>

      <p className="mt-2 text-[0.68rem] leading-4 text-zinc-700 min-[430px]:text-xs min-[430px]:leading-5 sm:text-base sm:leading-relaxed">
        {desc}
      </p>

      <div className="mt-3 flex flex-wrap gap-1 sm:mt-4 sm:gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-purple-200 bg-purple-50 px-2 py-0.5 text-[9px] text-purple-700 sm:px-2.5 sm:py-1 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  const getIcon = () => {
    switch (title) {
      case "Languages":
        return <Code2 className="mr-2 inline" size={20} />;
      case "Frameworks":
        return <Box className="mr-2 inline" size={20} />;
      case "Tools":
        return <Wrench className="mr-2 inline" size={20} />;
      case "Technologies":
        return <Cpu className="mr-2 inline" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg shadow-purple-950/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:p-5">
      <h3 className="mb-3 flex items-center text-sm font-semibold text-white sm:mb-4 sm:text-lg">
        <span className="mr-1.5 inline-flex rounded-lg bg-white/15 p-1.5 text-purple-100 sm:mr-2 sm:p-2">
          {getIcon()}
        </span>
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="cursor-default rounded-full border border-white/25 bg-purple-950/20 px-2 py-1 text-[10px] font-medium text-purple-50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15 sm:px-3 sm:py-1.5 sm:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function HighlightCard({
  icon,
  title,
  value,
  desc,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  desc: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white p-3 text-zinc-900 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/15 sm:p-5">
      <div className="flex items-center gap-1.5 text-purple-700 sm:gap-2">
        <span className="rounded-lg bg-purple-100 p-1.5 sm:p-2">{icon}</span>
        <h3 className="text-[11px] font-bold leading-4 sm:text-sm">{title}</h3>
      </div>

      <p className="mt-3 text-lg font-bold leading-tight text-purple-700 sm:mt-4 sm:text-2xl">{value}</p>
      <p className="mt-2 text-xs text-zinc-600 sm:text-sm">{desc}</p>
      <p className="mt-1 text-[10px] font-medium leading-4 text-zinc-400 sm:text-xs sm:leading-5">
        {detail}
      </p>
    </div>
  );
}

function SkillsTriangleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <OutlinedTriangle
        className="absolute -left-44 top-[4%] h-[460px] w-[460px]"
        fill="rgba(255,255,255,0.045)"
        stroke="rgba(255,255,255,0.22)"
        rotation="-18deg"
        animation="triangle-float 17s ease-in-out infinite"
      />
      <OutlinedTriangle
        className="absolute -bottom-52 -right-36 h-[560px] w-[560px]"
        fill="rgba(216,180,254,0.065)"
        stroke="rgba(233,213,255,0.24)"
        rotation="202deg"
        animation="triangle-float-side 21s ease-in-out infinite"
      />
    </div>
  );
}

function TriangleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 h-[182%] w-[182%] origin-top-left scale-[0.55] sm:h-[135%] sm:w-[135%] sm:scale-[0.74] lg:h-full lg:w-full lg:scale-100">
      {/* Left side */}
      <div
        className="absolute h-0 w-0 border-t-[100px] border-b-[100px] border-l-[150px] border-t-transparent border-b-transparent border-l-purple-300/80"
        style={{
          top: "2%",
          left: "3%",
          "--start-rotation": "60deg",
          animation: "triangle-spin 80s linear infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[70px] border-b-[70px] border-r-[110px] border-t-transparent border-b-transparent border-r-purple-400/75"
        style={{
          top: "25%",
          left: "5%",
          "--start-rotation": "120deg",
          animation: "triangle-float 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[130px] border-b-[130px] border-l-[200px] border-t-transparent border-b-transparent border-l-purple-500/45"
        style={{
          top: "45%",
          left: "3%",
          "--start-rotation": "280deg",
          animation: "triangle-float-side 15s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-600/60 sm:block"
        style={{
          top: "70%",
          left: "6%",
          "--start-rotation": "190deg",
          animation: "triangle-float-side 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden sm:block h-0 w-0 border-t-[110px] border-b-[110px] border-l-[170px] border-t-transparent border-b-transparent border-l-purple-300/65"
        style={{
          top: "83%",
          left: "-2%",
          "--start-rotation": "350deg",
          animation: "triangle-spin 105s linear infinite",
        } as React.CSSProperties}
      />

      {/* Left-center */}
      <div
        className="absolute h-0 w-0 border-t-[60px] border-b-[60px] border-r-[90px] border-t-transparent border-b-transparent border-r-purple-400/80"
        style={{
          top: "1%",
          left: "30%",
          "--start-rotation": "70deg",
          animation: "triangle-float 10s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[90px] border-b-[90px] border-l-[140px] border-t-transparent border-b-transparent border-l-purple-500/70"
        style={{
          top: "35%",
          left: "18%",
          "--start-rotation": "220deg",
          animation: "triangle-spin 90s linear infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[50px] border-b-[50px] border-r-[80px] border-t-transparent border-b-transparent border-r-purple-300/80 sm:block"
        style={{
          top: "55%",
          left: "20%",
          "--start-rotation": "150deg",
          animation: "triangle-float 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-600/45 sm:block"
        style={{
          top: "80%",
          left: "10%",
          "--start-rotation": "80deg",
          animation: "triangle-float-side 16s ease-in-out infinite",
        } as React.CSSProperties}
      />

      {/* Center */}
      <div
        className="absolute h-0 w-0 border-t-[150px] border-b-[150px] border-r-[230px] border-t-transparent border-b-transparent border-r-purple-400/50"
        style={{
          top: "5%",
          left: "44%",
          "--start-rotation": "200deg",
          animation: "triangle-spin 115s linear infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-l-[120px] border-t-transparent border-b-transparent border-l-purple-500/65"
        style={{
          top: "30%",
          left: "40%",
          "--start-rotation": "90deg",
          animation: "triangle-float 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[100px] border-b-[100px] border-r-[150px] border-t-transparent border-b-transparent border-r-purple-300/75"
        style={{
          top: "48%",
          left: "45%",
          "--start-rotation": "300deg",
          animation: "triangle-float-side 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[70px] border-b-[70px] border-l-[110px] border-t-transparent border-b-transparent border-l-purple-600/65 sm:block"
        style={{
          top: "72%",
          left: "42%",
          "--start-rotation": "140deg",
          animation: "triangle-float 15s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden sm:block h-0 w-0 border-t-[130px] border-b-[130px] border-r-[200px] border-t-transparent border-b-transparent border-r-purple-400/45"
        style={{
          top: "83%",
          left: "38%",
          "--start-rotation": "250deg",
          animation: "triangle-spin 95s linear infinite",
        } as React.CSSProperties}
      />

      {/* Right center */}
      <div
        className="absolute h-0 w-0 border-t-[140px] border-b-[140px] border-l-[210px] border-t-transparent border-b-transparent border-l-purple-300/60"
        style={{
          top: "12%",
          right: "20%",
          "--start-rotation": "110deg",
          animation: "triangle-spin 100s linear infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[60px] border-b-[60px] border-r-[90px] border-t-transparent border-b-transparent border-r-purple-500/75"
        style={{
          top: "32%",
          right: "25%",
          "--start-rotation": "30deg",
          animation: "triangle-float 10s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[110px] border-b-[110px] border-l-[170px] border-t-transparent border-b-transparent border-l-purple-400/65 sm:block"
        style={{
          top: "52%",
          right: "22%",
          "--start-rotation": "260deg",
          animation: "triangle-float-side 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-600/70 sm:block"
        style={{
          top: "72%",
          right: "18%",
          "--start-rotation": "160deg",
          animation: "triangle-float-side 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-300/55 sm:block"
        style={{
          top: "79%",
          right: "24%",
          "--start-rotation": "340deg",
          animation: "triangle-spin 110s linear infinite",
        } as React.CSSProperties}
      />

      {/* Right side */}
      <div
        className="absolute h-0 w-0 border-t-[90px] border-b-[90px] border-r-[140px] border-t-transparent border-b-transparent border-r-purple-500/65"
        style={{
          top: "3%",
          right: "5%",
          "--start-rotation": "70deg",
          animation: "triangle-float 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[130px] border-b-[130px] border-l-[200px] border-t-transparent border-b-transparent border-l-purple-400/50"
        style={{
          top: "22%",
          right: "8%",
          "--start-rotation": "130deg",
          animation: "triangle-spin 85s linear infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[70px] border-b-[70px] border-r-[110px] border-t-transparent border-b-transparent border-r-purple-600/70"
        style={{
          top: "42%",
          right: "3%",
          "--start-rotation": "220deg",
          animation: "triangle-float-side 15s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[100px] border-b-[100px] border-l-[150px] border-t-transparent border-b-transparent border-l-purple-300/75 sm:block"
        style={{
          top: "52%",
          right: "7%",
          "--start-rotation": "290deg",
          animation: "triangle-float 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden sm:block h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-400/80"
        style={{
          top: "82%",
          right: "4%",
          "--start-rotation": "40deg",
          animation: "triangle-float-side 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      {/* Small triangles */}
      <div
        className="absolute h-0 w-0 border-t-[35px] border-b-[35px] border-l-[55px] border-t-transparent border-b-transparent border-l-purple-400/90"
        style={{
          top: "7%",
          left: "70%",
          "--start-rotation": "200deg",
          animation: "triangle-float 9s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[40px] border-b-[40px] border-r-[60px] border-t-transparent border-b-transparent border-r-purple-300/90"
        style={{
          top: "38%",
          left: "52%",
          "--start-rotation": "80deg",
          animation: "triangle-float-side 10s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[30px] border-b-[30px] border-l-[45px] border-t-transparent border-b-transparent border-l-purple-400/90 sm:block"
        style={{
          top: "62%",
          right: "45%",
          "--start-rotation": "340deg",
          animation: "triangle-float 10s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[45px] border-b-[45px] border-r-[70px] border-t-transparent border-b-transparent border-r-purple-600/85 sm:block"
        style={{
          bottom: "15%",
          right: "35%",
          "--start-rotation": "160deg",
          animation: "triangle-float-side 9s ease-in-out infinite",
        } as React.CSSProperties}
      />

      {/* Edge triangles */}
      <div
        className="absolute h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-400/55"
        style={{
          top: "15%",
          left: "-3%",
          "--start-rotation": "30deg",
          animation: "triangle-float 15s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute hidden h-0 w-0 border-t-[140px] border-b-[140px] border-r-[210px] border-t-transparent border-b-transparent border-r-purple-500/45 sm:block"
        style={{
          bottom: "14%",
          right: "-4%",
          "--start-rotation": "210deg",
          animation: "triangle-spin 95s linear infinite",
        } as React.CSSProperties}
      />
      </div>
    </div>
  );
}

function OutlinedTriangle({
  className,
  style,
  fill,
  stroke,
  rotation,
  animation,
}: {
  className: string;
  style?: React.CSSProperties;
  fill: string;
  stroke: string;
  rotation: string;
  animation: string;
}) {
  return (
    <div
      className={className}
      style={
        {
          ...style,
          "--start-rotation": rotation,
          animation,
        } as React.CSSProperties
      }
    >
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <polygon
          points="50,5 95,90 5,90"
          fill={fill}
          stroke={stroke}
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ExperienceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Floating Squares */}
      <div
        className="float-square-1 absolute hidden h-[140px] w-[140px] bg-red-500 [@media(min-width:1280px)]:block"
        style={{ top: 40, left: 45 }}
      />

      <div
        className="float-square-2 absolute hidden h-[130px] w-[130px] bg-red-600 [@media(min-width:1280px)]:block"
        style={{ top: 70, right: 0 }}
      />


      {/* Skyline */}
      <div
        className="experience-skyline absolute bottom-0 left-0 w-[154%] origin-bottom-left scale-[0.65] sm:w-[125%] sm:scale-[0.8] [@media(min-width:1280px)]:w-full [@media(min-width:1280px)]:scale-100"
        style={
          {
            "--city-red-600": "#dc2626",
            "--city-red-700": "#b91c1c",
            "--city-red-800": "#991b1b",
            "--city-red-900": "#7f1d1d",
          } as React.CSSProperties
        }
      >
        <div className="relative w-full">
          {/* Buildings */}
          <div className="relative z-10 flex items-end">
            <div className="w-[70px] h-[180px] bg-[var(--city-red-600)] -mr-4"></div>
            <div className="w-[120px] h-[260px] bg-[var(--city-red-700)] -mr-4"></div>
            <div className="w-[60px] h-[200px] bg-[var(--city-red-600)] -mr-4"></div>
            <div className="w-[150px] h-[320px] bg-[var(--city-red-800)] -mr-4"></div>
            <div className="w-[90px] h-[220px] bg-[var(--city-red-700)] -mr-4"></div>
            <div className="w-[130px] h-[280px] bg-[var(--city-red-800)] -mr-4"></div>
            <div className="w-[70px] h-[190px] bg-[var(--city-red-600)] -mr-4"></div>
            <div className="w-[170px] h-[340px] bg-[var(--city-red-900)] -mr-4"></div>
            <div className="w-[100px] h-[240px] bg-[var(--city-red-700)] -mr-4"></div>
            <div className="w-[140px] h-[300px] bg-[var(--city-red-800)] -mr-4"></div>
            <div className="w-[80px] h-[210px] bg-[var(--city-red-600)] -mr-4"></div>
            <div className="w-[160px] h-[330px] bg-[var(--city-red-900)] -mr-4"></div>
            <div className="w-[90px] h-[230px] bg-[var(--city-red-700)] -mr-4"></div>
            <div className="w-[130px] h-[290px] bg-[var(--city-red-800)] -mr-4"></div>
            <div className="w-[110px] h-[250px] bg-[var(--city-red-600)] -mr-4"></div>
            <div className="w-[140px] h-[310px] bg-[var(--city-red-700)] -mr-4"></div>
            <div className="w-[80px] h-[200px] bg-[var(--city-red-600)] -mr-4"></div>
            <div className="w-[150px] h-[280px] bg-[var(--city-red-800)] -mr-4"></div>
            <div className="w-[100px] h-[220px] bg-[var(--city-red-700)] -mr-4"></div>
            <div className="w-[120px] h-[260px] bg-[var(--city-red-800)]"></div>
          </div>

          {/* Cars */}
          <div
            className="absolute bottom-0 w-full overflow-hidden z-20"
            style={{ height: "42px" }}
          >
            {/* Car 1 */}
            <div
              className="car-1 absolute bottom-0"
              style={
                {
                  width: "76px",
                  "--car-color": "var(--city-red-700)",
                } as React.CSSProperties
              }
            >
              <div className="relative h-[34px]">
                <div className="absolute bottom-[5px] left-0 flex items-end">
                  <div className="w-[16px] h-[15px] rounded-l-sm bg-[var(--car-color)]"></div>
                  <div className="w-[38px] h-[25px] rounded-t-md bg-[var(--car-color)] -mx-px"></div>
                  <div className="w-[16px] h-[15px] rounded-r-sm bg-[var(--car-color)]"></div>
                </div>

                <div className="absolute bottom-0 left-[9px] h-[12px] w-[12px] rounded-full bg-[var(--car-color)]"></div>
                <div className="absolute bottom-0 right-[13px] h-[12px] w-[12px] rounded-full bg-[var(--car-color)]"></div>
              </div>
            </div>

            {/* Car 2 */}
            <div
              className="car-2 absolute bottom-0"
              style={
                {
                  width: "80px",
                  "--car-color": "var(--city-red-700)",
                } as React.CSSProperties
              }
            >
              <div className="relative h-[34px]">
                <div className="absolute bottom-[5px] left-0 flex items-end">
                  <div className="w-[17px] h-[17px] rounded-l-sm bg-[var(--car-color)]"></div>
                  <div className="w-[39px] h-[25px] rounded-t-md bg-[var(--car-color)] -mx-px"></div>
                  <div className="w-[17px] h-[17px] rounded-r-sm bg-[var(--car-color)]"></div>
                </div>

                <div className="absolute bottom-0 left-[10px] h-[12px] w-[12px] rounded-full bg-[var(--car-color)]"></div>
                <div className="absolute bottom-0 right-[14px] h-[12px] w-[12px] rounded-full bg-[var(--car-color)]"></div>
              </div>
            </div>

            {/* Car 3 */}
            <div
              className="car-3 absolute bottom-0"
              style={
                {
                  width: "72px",
                  "--car-color": "var(--city-red-800)",
                } as React.CSSProperties
              }
            >
              <div className="relative h-[32px]">
                <div className="absolute bottom-[5px] left-0 flex items-end">
                  <div className="w-[15px] h-[15px] rounded-l-sm bg-[var(--car-color)]"></div>
                  <div className="w-[34px] h-[23px] rounded-t-md bg-[var(--car-color)] -mx-px"></div>
                  <div className="w-[15px] h-[15px] rounded-r-sm bg-[var(--car-color)]"></div>
                </div>

                <div className="absolute bottom-0 left-[8px] h-[11px] w-[11px] rounded-full bg-[var(--car-color)]"></div>
                <div className="absolute bottom-0 right-[13px] h-[11px] w-[11px] rounded-full bg-[var(--car-color)]"></div>
              </div>
            </div>

            {/* Car 4 */}
            <div
              className="car-4 absolute bottom-0"
              style={
                {
                  width: "76px",
                  "--car-color": "var(--city-red-900)",
                } as React.CSSProperties
              }
            >
              <div className="relative h-[33px]">
                <div className="absolute bottom-[5px] left-0 flex items-end">
                  <div className="w-[15px] h-[16px] rounded-l-sm bg-[var(--car-color)]"></div>
                  <div className="w-[38px] h-[23px] rounded-t-md bg-[var(--car-color)] -mx-px"></div>
                  <div className="w-[15px] h-[16px] rounded-r-sm bg-[var(--car-color)]"></div>
                </div>

                <div className="absolute bottom-0 left-[9px] h-[12px] w-[12px] rounded-full bg-[var(--car-color)]"></div>
                <div className="absolute bottom-0 right-[13px] h-[12px] w-[12px] rounded-full bg-[var(--car-color)]"></div>
              </div>
            </div>

            {/* Truck */}
            <div
              className="truck-1 absolute bottom-0"
              style={
                {
                  width: "115px",
                  "--car-color": "var(--city-red-800)",
                } as React.CSSProperties
              }
            >
              <div className="relative h-[40px]">
                <div className="absolute bottom-[5px] left-0 flex items-end">
                  <div className="w-[78px] h-[28px] rounded-t-sm bg-[var(--car-color)]"></div>
                  <div className="w-[23px] h-[21px] rounded-tr-md bg-[var(--car-color)] -mx-px"></div>
                </div>

                <div className="absolute bottom-0 left-[14px] h-[13px] w-[13px] rounded-full bg-[var(--car-color)]"></div>
                <div className="absolute bottom-0 right-[24px] h-[13px] w-[13px] rounded-full bg-[var(--car-color)]"></div>
              </div>
            </div>
          </div>

          {/* Skyline haze */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-32 w-full bg-gradient-to-t from-red-900/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}