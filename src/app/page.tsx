import Image from "next/image";
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
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-zinc-900">
      {/* Top Bar */}
      <div className="relative z-40 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-3 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-2.5">
          <div
            className="text-center text-3xl font-semibold text-blue-600 sm:text-4xl"
            style={{ fontFamily: "var(--font-bungee-inline), cursive" }}
          >
            Vincenzo Barager
          </div>

          <nav className="flex flex-nowrap items-center justify-center gap-1 font-semibold sm:flex-wrap sm:justify-end">
            <TopLink href="https://www.linkedin.com/in/vincenzo-barager/">
              <Linkedin size={18} className="inline mr-1" />
              LinkedIn
            </TopLink>

            <TopLink href="https://github.com/Dvizee">
              <Github size={18} className="inline mr-1" />
              GitHub
            </TopLink>

            <TopLink href="mailto:vincenzobarager@gmail.com">
              <Mail size={18} className="inline mr-1" />
              Email
            </TopLink>

            <TopLink href="/Vincenzo-Barager-Resume.pdf">
              <FileText size={18} className="inline mr-1" />
              Resume
            </TopLink>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-0 space-y-0">
        {/* Hero */}
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-visible bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
          {/* Waves */}
          <div className="absolute inset-0 z-0 hidden pointer-events-none sm:block">
            <svg
              className="absolute bottom-[-40px] w-full"
              viewBox="0 0 1440 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="blue"
                d="M0,200 C300,120 600,300 900,220 C1100,160 1300,220 1440,200 L1440,400 L0,400 Z"
              />
            </svg>

            <svg
              className="absolute bottom-[-40px] w-full"
              viewBox="0 0 1440 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#60A5FA"
                d="M0,240 C350,170 650,330 1000,250 C1200,210 1350,260 1440,240 L1440,400 L0,400 Z"
              />
            </svg>

            <svg
              className="absolute bottom-[-40px] w-full"
              viewBox="0 0 1440 400"
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
              style={{ left: 130, top: 140 }}
            />

            <div
              className="circle-intro-spin absolute h-[180px] w-[180px] rounded-full bg-white"
              style={{
                left: -80,
                top: 30,
                transformOrigin: "365px 265px",
              }}
            />

            <div
              className="absolute h-[310px] w-[310px] rounded-full bg-white"
              style={{ right: -90, bottom: 135 }}
            />

            <div
              className="circle-intro-spin-slow absolute h-[110px] w-[110px] rounded-full bg-white"
              style={{
                right: 100,
                bottom: 0,
                transformOrigin: "145px -180px",
              }}
            />
          </div>

          <div className="relative z-30 mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
            <header className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
              <div className="flex w-full items-center justify-center gap-3 md:contents">
                <Image
                  src="/images/Vincenzo.png"
                  alt="Vincenzo Barager"
                  width={320}
                  height={410}
                  className="h-[240px] w-[190px] rounded-full border-4 border-white object-cover object-[center_20%] sm:h-[260px] sm:w-[205px] md:h-[380px] md:w-[300px]"
                  priority
                />

                <h1
                  className="max-w-[140px] text-left text-[1.55rem] font-semibold leading-tight tracking-tight text-white sm:max-w-[180px] sm:text-3xl md:hidden"
                  style={{
                    textShadow:
                      "-1px -1px 0 #1D4ED8, 1px -1px 0 #1D4ED8, -1px 1px 0 #1D4ED8, 1px 1px 0 #1D4ED8",
                  }}
                >
                  Computer Science student building software.
                </h1>
              </div>

              <div className="space-y-8 text-center md:pt-6 md:text-left">
                <h1
                  className="hidden text-3xl font-semibold tracking-tight text-white sm:text-4xl md:block"
                  style={{
                    textShadow:
                      "-1px -1px 0 #1D4ED8, 1px -1px 0 #1D4ED8, -1px 1px 0 #1D4ED8, 1px 1px 0 #1D4ED8",
                  }}
                >
                  Computer Science student building software.
                </h1>

                <div className="max-w-3xl space-y-5 rounded-xl border border-white/40 bg-white/10 p-5 backdrop-blur-md md:space-y-6 md:p-6">
                  <p className="text-base leading-relaxed text-blue-100 hero-text-outline sm:text-lg">
                    I’m a CS major at Florida Tech with a passion for creation. I
                    enjoy turning ideas into working software and have spent much
                    of my time developing projects across web development, game
                    engines, and systems programming.
                  </p>

                  <p className="text-base leading-relaxed text-blue-100 hero-text-outline sm:text-lg">
                    This site showcases projects I've built including full-stack
                    web applications, Unity development, and lower-level
                    programming work. Each project represents something I wanted
                    to build, experiment with, or better understand.
                  </p>
                </div>
              </div>
            </header>
          </div>

          {/* Mobile-only hero transition */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent via-blue-400/50 to-[#BFDBFE] sm:hidden"></div>
        </section>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex h-20 w-screen items-center justify-center bg-[#BFDBFE] sm:h-24">
          <a
            href="#projects"
            className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 font-semibold tracking-wide text-blue-700 sm:gap-6 sm:px-6"
          >
            <span className="flex-grow h-0.5 bg-blue-700"></span>

            <span className="flex items-center gap-2 whitespace-nowrap text-sm sm:text-lg">
              scroll down to see my work
              <span className="text-xl animate-[bounce_1.8s_ease-in-out_infinite]">
                ↓
              </span>
            </span>

            <span className="flex-grow h-0.5 bg-blue-700"></span>
          </a>
        </div>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-14 w-screen bg-gradient-to-b from-[#BFDBFE] via-purple-200 to-purple-100 sm:h-24"></div>

        {/* Projects and Skills */}
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-purple-100">
          <TriangleBackground />

          {/* Projects */}
          <div
            id="projects"
            className="relative z-10 mx-auto max-w-6xl space-y-5 px-4 pt-8 pb-7 sm:space-y-8 sm:px-6 sm:pt-16 sm:pb-10"
          >
            <h2 className="text-3xl font-semibold text-purple-700 border-l-4 border-purple-600 pl-4">
              Projects
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
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

          {/* Skills & Achievements */}
          <div className="relative z-10 mx-auto max-w-6xl space-y-5 px-4 pt-3 pb-8 sm:space-y-8 sm:px-6 sm:pb-16">
            <h2 className="text-3xl font-semibold text-purple-700 border-l-4 border-purple-600 pl-4">
              Skills & Achievements
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-700">
                Achievements
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <HighlightCard
                  icon={<Trophy size={20} />}
                  title="NCL Spring 2026 Individual Game"
                  value="Diamond-1 Medal"
                  desc="96th Percentile Overall"
                  detail="176th out of 7,010 · 2,880 / 3,000 points"
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
                  detail="Fall 2022 · Spring 2023 · Fall 2023 · Spring 2025 · Fall 2025"
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
        </section>

        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-14 w-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white sm:h-24"></div>

        {/* Experience */}
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white">
          <ExperienceBackground />

          <div className="relative z-10 mx-auto max-w-6xl space-y-5 px-4 pt-7 pb-10 sm:space-y-6 sm:px-6 sm:pt-8 sm:pb-18">
            <h2 className="text-3xl font-semibold text-red-600 border-l-4 border-red-600 pl-4">
              Experience
            </h2>

            <div className="space-y-4">
              <ExperienceItem
                role="E-Commerce Assistant"
                company="Florida Tech Copy Center"
                dates="September 2025 – December 2025"
                bullets={[
                  "Maintained and updated a web-to-print portal for campus print orders.",
                  "Configured products and pricing, and helped troubleshoot customer order issues.",
                  "Created and refined internal documentation (SOPs) to streamline recurring tasks.",
                ]}
              />

              <ExperienceItem
                role="Crew Member"
                company="Rathskeller, Florida Tech"
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

      <div className="h-2 bg-red-900"></div>

      <footer className="mt-0 bg-red-400 text-white">
        <div className="mx-auto max-w-6xl space-y-4 px-4 py-6 sm:px-6">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Get in touch
            </h2>

            <p className="max-w-2xl text-white/90">
              Feel free to reach out to me for any internship, job, research or
              other opportunity. I'd be happy to connect and talk further.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
              <FooterLink href="mailto:vincenzobarager@gmail.com">
                <Mail size={22} />
              </FooterLink>

              <FooterLink href="https://www.linkedin.com/in/vincenzo-barager/">
                <Linkedin size={22} />
              </FooterLink>

              <FooterLink href="https://github.com/Dvizee">
                <Github size={22} />
              </FooterLink>
            </div>
          </div>

          <div className="h-px bg-white/30" />

          <div className="flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <span>Built with Next.js, TypeScript, and Tailwind CSS.</span>
            <span>© {new Date().getFullYear()} Vincenzo Barager</span>
          </div>
        </div>
      </footer>
    </main>
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
    <div className="rounded-2xl border border-red-700 bg-white p-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-sm">
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
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function TopLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex items-center gap-1 rounded-md px-1.5 py-1 text-[0.95rem] text-blue-600 hover:bg-blue-50 hover:text-blue-800 sm:px-3 sm:py-1.5 sm:text-lg"
    >
      {children}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="rounded-md border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
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
      <div className="rounded-2xl border border-purple-400 bg-white py-5 px-6 sm:px-10 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-600 hover:shadow-sm flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="flex flex-col flex-1">
          <h3 className="text-base font-semibold">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-purple-700 hover:underline underline-offset-4"
            >
              {title}
            </a>
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
            {desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs text-purple-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="w-39 flex-shrink-0 border border-zinc-100 rounded-md overflow-hidden">
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
    <div className="rounded-2xl border border-purple-400 bg-white p-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-600 hover:shadow-sm sm:p-4">
      <div className="mb-4 overflow-hidden rounded-xl border border-zinc-100 bg-zinc-50 sm:rounded-none sm:bg-transparent">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={500}
          className="h-40 w-full object-contain sm:h-56"
        />
      </div>

      <h3 className="text-base font-semibold">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-purple-700 hover:underline underline-offset-4"
        >
          {title}
        </a>
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
        {desc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs text-purple-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
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
        return <Code2 className="inline mr-2" size={20} />;
      case "Frameworks":
        return <Box className="inline mr-2" size={20} />;
      case "Tools":
        return <Wrench className="inline mr-2" size={20} />;
      case "Technologies":
        return <Cpu className="inline mr-2" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl border border-purple-600 bg-white p-4">
      <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
        {getIcon()}
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          const isPurpleOnWhite = index % 2 === 0;

          return isPurpleOnWhite ? (
            <span
              key={skill}
              className="rounded-full border-2 border-purple-600 bg-white px-3 py-1 text-sm text-purple-700 font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-purple-700 hover:bg-purple-50 cursor-default"
            >
              {skill}
            </span>
          ) : (
            <span
              key={skill}
              className="rounded-full bg-purple-600 px-3 py-1 text-sm text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-purple-700 cursor-default"
            >
              {skill}
            </span>
          );
        })}
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
    <div className="rounded-xl border border-purple-300 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-purple-500 hover:shadow-md">
      <div className="flex items-center gap-2 text-purple-700">
        <span className="rounded-lg bg-purple-100 p-2">{icon}</span>
        <h3 className="text-sm font-bold">{title}</h3>
      </div>

      <p className="mt-4 text-2xl font-bold text-purple-700">{value}</p>
      <p className="mt-2 text-sm text-zinc-600">{desc}</p>
      <p className="mt-1 text-xs font-medium text-zinc-400">{detail}</p>
    </div>
  );
}

function TriangleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
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
        className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-600/60"
        style={{
          top: "70%",
          left: "6%",
          "--start-rotation": "190deg",
          animation: "triangle-float-side 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[110px] border-b-[110px] border-l-[170px] border-t-transparent border-b-transparent border-l-purple-300/65"
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
        className="absolute h-0 w-0 border-t-[50px] border-b-[50px] border-r-[80px] border-t-transparent border-b-transparent border-r-purple-300/80"
        style={{
          top: "55%",
          left: "20%",
          "--start-rotation": "150deg",
          animation: "triangle-float 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-600/45"
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
        className="absolute h-0 w-0 border-t-[70px] border-b-[70px] border-l-[110px] border-t-transparent border-b-transparent border-l-purple-600/65"
        style={{
          top: "72%",
          left: "42%",
          "--start-rotation": "140deg",
          animation: "triangle-float 15s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[130px] border-b-[130px] border-r-[200px] border-t-transparent border-b-transparent border-r-purple-400/45"
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
        className="absolute h-0 w-0 border-t-[110px] border-b-[110px] border-l-[170px] border-t-transparent border-b-transparent border-l-purple-400/65"
        style={{
          top: "52%",
          right: "22%",
          "--start-rotation": "260deg",
          animation: "triangle-float-side 13s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-600/70"
        style={{
          top: "72%",
          right: "18%",
          "--start-rotation": "160deg",
          animation: "triangle-float-side 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-300/55"
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
        className="absolute h-0 w-0 border-t-[100px] border-b-[100px] border-l-[150px] border-t-transparent border-b-transparent border-l-purple-300/75"
        style={{
          top: "52%",
          right: "7%",
          "--start-rotation": "290deg",
          animation: "triangle-float 12s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-400/80"
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
        className="absolute h-0 w-0 border-t-[30px] border-b-[30px] border-l-[45px] border-t-transparent border-b-transparent border-l-purple-400/90"
        style={{
          top: "62%",
          right: "45%",
          "--start-rotation": "340deg",
          animation: "triangle-float 10s ease-in-out infinite",
        } as React.CSSProperties}
      />

      <div
        className="absolute h-0 w-0 border-t-[45px] border-b-[45px] border-r-[70px] border-t-transparent border-b-transparent border-r-purple-600/85"
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
        className="absolute h-0 w-0 border-t-[140px] border-b-[140px] border-r-[210px] border-t-transparent border-b-transparent border-r-purple-500/45"
        style={{
          bottom: "14%",
          right: "-4%",
          "--start-rotation": "210deg",
          animation: "triangle-spin 95s linear infinite",
        } as React.CSSProperties}
      />
    </div>
  );
}

function ExperienceBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden [@media(min-width:1280px)]:block">
      {/* Floating Squares */}
      <div
        className="float-square-1 absolute h-[140px] w-[140px] bg-red-500"
        style={{ top: 40, left: 45 }}
      />

      <div
        className="float-square-2 absolute h-[130px] w-[130px] bg-red-600"
        style={{ top: 70, right: 0 }}
      />

      <div
        className="absolute h-[120px] w-[120px] bg-red-600"
        style={{ top: 430, right: 50, transform: "rotate(46deg)" }}
      />

      {/* Skyline */}
      <div
        className="absolute bottom-0 left-0 w-full"
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