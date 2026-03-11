import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/*Top Bar*/}
      <div className="bg-white border-b border-blue-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5">
          <div 
          className="text-4xl font-semibold text-blue-600"
          style={{ fontFamily: 'var(--font-bungee-inline), cursive' }}>
          Vincenzo Barager
        </div>
          <nav className="flex flex-wrap items-center justify-end gap-1 font-semibold">
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
            <TopLink href="/Vincenzo_Barager-Resume.pdf">
              Resume
            </TopLink>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-0 space-y-0">
        
  {/* Hero */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">

{/* Waves */}
<div className="absolute inset-0 z-0 pointer-events-none">

  {/* top wave */}
  <svg
    className="absolute bottom-[-40px] w-full"
    viewBox="0 0 1440 400"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill="blue"
      d="M0,200 C300,120 600,300 900,220 C1100,160 1300,220 1440,200 L1440,400 L0,400 Z"/>
  </svg>

  {/* middle wave */}
  <svg
    className="absolute bottom-[-40px] w-full"
    viewBox="0 0 1440 400"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#60A5FA"
      d="M0,240 C350,170 650,330 1000,250 C1200,210 1350,260 1440,240 L1440,400 L0,400 Z"/>
  </svg>

  {/* bottom wave */}
  <svg
    className="absolute bottom-[-40px] w-full"
    viewBox="0 0 1440 400"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#BFDBFE"
      d="M0,260 C350,200 650,360 1000,300 C1200,250 1350,300 1440,280 L1440,400 L0,400 Z"/>
  </svg>

</div>

{/* Circles */}
<div className="pointer-events-none absolute inset-0 z-0 hidden [@media(min-width:1450px)]:block">

  {/* Left circle */}
  <div
    className="absolute h-[310px] w-[310px] rounded-full bg-white"
    style={{ left: 130, top: 140 }}/>

  {/* Right circle */}
  <div
    className="absolute h-[310px] w-[310px] rounded-full bg-white"
    style={{ right: -90, bottom: 135 }}/>

  {/* Small circle */}
  <div
    className="absolute h-[110px] w-[110px] rounded-full bg-white"
    style={{ right: 100, bottom: 0 }}/>

 {/* top-left circle */}
  <div
    className="absolute h-[180px] w-[180px] rounded-full bg-white"
    style={{ left: -80, top: 30 }}/>
</div>


<div className="relative z-10 mx-auto max-w-6xl px-6 py-20">

<header className="flex flex-col items-center gap-10 md:flex-row md:items-start">

<Image
  src="/images/Vincenzo.png"
  alt="Vincenzo Barager"
  width={320}
  height={410}
  className="h-[380px] w-[300px] rounded-full border-4 border-white object-cover object-[center_20%]"
  priority/>

<div className="space-y-8 md:pt-6">

<h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
  Computer Science student building software.
</h1>

<div className="rounded-xl border border-white/40 bg-white/10 backdrop-blur-md p-6 space-y-6 max-w-3xl">

<p className="text-lg leading-relaxed text-blue-100">
  I’m a CS major at Florida Tech with a passion for creation. I enjoy turning ideas into working software and have spent much of my time developing projects across web development, game engines, and systems programming.
</p>

<p className="text-lg leading-relaxed text-blue-100">
  This site showcases projects I've built including full-stack web applications, Unity development, and lower-level programming work. Each project represents something I wanted to build, experiment with, or better understand.
</p>

</div>
</div>
</header>
</div>
</section>

<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-24 bg-[#BFDBFE] flex items-center justify-center">
  <a
    href="#projects"
    className="mx-auto flex max-w-6xl items-center gap-6 px-6 text-blue-700 font-semibold tracking-wide w-full">
    <span className="flex-grow h-0.5 bg-blue-700"></span>
    <span className="whitespace-nowrap text-lg flex items-center gap-2">
        scroll down to see my work<span className="text-xl animate-[bounce_1.8s_ease-in-out_infinite]">↓</span>
    </span>
    <span className="flex-grow h-0.5 bg-blue-700"></span>
  </a>
</div>

<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-24 bg-gradient-to-b from-[#BFDBFE] via-purple-200 to-purple-100 "></div>

{/* Projects and Skills */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-purple-100">
{/* Triangle Background */}
<div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">

  {/* Left side */}
  <div className="absolute h-0 w-0 border-t-[100px] border-b-[100px] border-l-[150px] border-t-transparent border-b-transparent border-l-purple-300/60"
       style={{ top: '2%', left: '3%', transform: "rotate(60deg)" }} />

  <div className="absolute h-0 w-0 border-t-[70px] border-b-[70px] border-r-[110px] border-t-transparent border-b-transparent border-r-purple-400/50"
       style={{ top: '25%', left: '5%', transform: "rotate(120deg)" }} />

  <div className="absolute h-0 w-0 border-t-[130px] border-b-[130px] border-l-[200px] border-t-transparent border-b-transparent border-l-purple-500/30"
       style={{ top: '45%', left: '3%', transform: "rotate(280deg)" }} />

  <div className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-600/35"
       style={{ top: '70%', left: '6%', transform: "rotate(190deg)" }} />

  <div className="absolute h-0 w-0 border-t-[110px] border-b-[110px] border-l-[170px] border-t-transparent border-b-transparent border-l-purple-300/40"
       style={{ top: '83%', left: '-2%', transform: "rotate(350deg)" }} />

  {/* Left-center */}
  <div className="absolute h-0 w-0 border-t-[60px] border-b-[60px] border-r-[90px] border-t-transparent border-b-transparent border-r-purple-400/55"
       style={{ top: '1%', left: '30%', transform: "rotate(70deg)" }} />

  <div className="absolute h-0 w-0 border-t-[90px] border-b-[90px] border-l-[140px] border-t-transparent border-b-transparent border-l-purple-500/45"
       style={{ top: '35%', left: '18%', transform: "rotate(220deg)" }} />

  <div className="absolute h-0 w-0 border-t-[50px] border-b-[50px] border-r-[80px] border-t-transparent border-b-transparent border-r-purple-300/60"
       style={{ top: '55%', left: '20%', transform: "rotate(150deg)" }} />

  <div className="absolute h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-600/25"
       style={{ top: '80%', left: '10%', transform: "rotate(80deg)" }} />

  {/* Center */}
  <div className="absolute h-0 w-0 border-t-[150px] border-b-[150px] border-r-[230px] border-t-transparent border-b-transparent border-r-purple-400/30"
       style={{ top: '5%', left: '44%', transform: "rotate(200deg)" }} />

  <div className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-l-[120px] border-t-transparent border-b-transparent border-l-purple-500/40"
       style={{ top: '30%', left: '40%', transform: "rotate(90deg)" }} />

  <div className="absolute h-0 w-0 border-t-[100px] border-b-[100px] border-r-[150px] border-t-transparent border-b-transparent border-r-purple-300/50"
       style={{ top: '48%', left: '45%', transform: "rotate(300deg)" }} />

  <div className="absolute h-0 w-0 border-t-[70px] border-b-[70px] border-l-[110px] border-t-transparent border-b-transparent border-l-purple-600/45"
       style={{ top: '72%', left: '42%', transform: "rotate(140deg)" }} />

  <div className="absolute h-0 w-0 border-t-[130px] border-b-[130px] border-r-[200px] border-t-transparent border-b-transparent border-r-purple-400/25"
       style={{ top: '83%', left: '38%', transform: "rotate(250deg)" }} />

  {/* Right-center */}
  <div className="absolute h-0 w-0 border-t-[140px] border-b-[140px] border-l-[210px] border-t-transparent border-b-transparent border-l-purple-300/35"
       style={{ top: '12%', right: '20%', transform: "rotate(110deg)" }} />

  <div className="absolute h-0 w-0 border-t-[60px] border-b-[60px] border-r-[90px] border-t-transparent border-b-transparent border-r-purple-500/50"
       style={{ top: '32%', right: '25%', transform: "rotate(30deg)" }} />

  <div className="absolute h-0 w-0 border-t-[110px] border-b-[110px] border-l-[170px] border-t-transparent border-b-transparent border-l-purple-400/40"
       style={{ top: '52%', right: '22%', transform: "rotate(260deg)" }} />

  <div className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-600/45"
       style={{ top: '72%', right: '18%', transform: "rotate(160deg)" }} />

  <div className="absolute h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-300/30"
       style={{ top: '79%', right: '24%', transform: "rotate(340deg)" }} />

  {/* Right side */}
  <div className="absolute h-0 w-0 border-t-[90px] border-b-[90px] border-r-[140px] border-t-transparent border-b-transparent border-r-purple-500/40"
       style={{ top: '3%', right: '5%', transform: "rotate(70deg)" }} />

  <div className="absolute h-0 w-0 border-t-[130px] border-b-[130px] border-l-[200px] border-t-transparent border-b-transparent border-l-purple-400/30"
       style={{ top: '22%', right: '8%', transform: "rotate(130deg)" }} />

  <div className="absolute h-0 w-0 border-t-[70px] border-b-[70px] border-r-[110px] border-t-transparent border-b-transparent border-r-purple-600/45"
       style={{ top: '42%', right: '3%', transform: "rotate(220deg)" }} />

  <div className="absolute h-0 w-0 border-t-[100px] border-b-[100px] border-l-[150px] border-t-transparent border-b-transparent border-l-purple-300/50"
       style={{ top: '52%', right: '7%', transform: "rotate(290deg)" }} />

  <div className="absolute h-0 w-0 border-t-[80px] border-b-[80px] border-r-[120px] border-t-transparent border-b-transparent border-r-purple-400/55"
       style={{ top: '82%', right: '4%', transform: "rotate(40deg)" }} />

  {/* Small triangles */}
  <div className="absolute h-0 w-0 border-t-[35px] border-b-[35px] border-l-[55px] border-t-transparent border-b-transparent border-l-purple-400/70"
       style={{ top: '7%', left: '70%', transform: "rotate(200deg)" }} />

  <div className="absolute h-0 w-0 border-t-[40px] border-b-[40px] border-r-[60px] border-t-transparent border-b-transparent border-r-purple-300/65"
       style={{ top: '38%', left: '52%', transform: "rotate(80deg)" }} />

  <div className="absolute h-0 w-0 border-t-[30px] border-b-[30px] border-l-[45px] border-t-transparent border-b-transparent border-l-purple-400/75"
       style={{ top: '62%', right: '45%', transform: "rotate(340deg)" }} />

  <div className="absolute h-0 w-0 border-t-[45px] border-b-[45px] border-r-[70px] border-t-transparent border-b-transparent border-r-purple-600/60"
       style={{ bottom: '15%', right: '35%', transform: "rotate(160deg)" }} />

  {/* Edge triangles */}
  <div className="absolute h-0 w-0 border-t-[120px] border-b-[120px] border-l-[180px] border-t-transparent border-b-transparent border-l-purple-400/30"
       style={{ top: '15%', left: '-3%', transform: "rotate(30deg)" }} />

  <div className="absolute h-0 w-0 border-t-[140px] border-b-[140px] border-r-[210px] border-t-transparent border-b-transparent border-r-purple-500/25"
       style={{ bottom: '14%', right: '-4%', transform: "rotate(210deg)" }} />

</div>


{/* Projects */}
<div
  id="projects"
  className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10 space-y-8">

  <h2 className="text-3xl font-semibold text-purple-700 border-l-4 border-purple-600 pl-4">
    Projects
  </h2>

  <div className="grid gap-6 sm:grid-cols-2">

    <ProjectCard
      title="FIT AR Navigation App"
      desc="Senior design project developing an AR indoor navigation system for Florida Tech’s Evans Library using Unity and Vuforia. The app provides multi-floor navigation, interactive AR information points, and self-guided tours that overlay digital content directly onto the physical environment."
      tags={["Unity", "Vuforia", "C#"]}
      image="/images/FITARNA.png"
      link="https://jacobhallburns.github.io/FITARNA/"
      layout="side"/>

    <ProjectCard
      title="MyMangaReader"
      desc="Full-stack manga tracker built with Next.js, Node.js, and MongoDB for searching, tracking, rating, and managing manga via the Kitsu API."
      tags={["Next.js", "Node.js", "MongoDB", "Docker"]}
      image="/images/MMRL.png"
      link="https://github.com/jacobhallburns/MyMangaReader"/>

    <ProjectCard
      title="Rhythm Runner"
      desc="2D rhythm game racer with custom pixel art, made with Unity and Aseprite."
      tags={["Unity", "Aseprite"]}
      image="/images/rhythm-runner.png"
      link="https://tyler-win.itch.io/rhythm-runner"/>

    <ProjectCard
      title="Assembly Casino Game"
      desc="Slots + roulette in x86 assembly using Irvine32."
      tags={["x86", "Irvine32"]}
      image="/images/Casino.png"
      link="https://github.com/Dvizee/Assembly-Casino-Game"/>

  </div>
</div>


{/* Skills */}
<div className="relative z-10 mx-auto max-w-6xl px-6 pt-4 pb-16 space-y-8">

  <h2 className="text-3xl font-semibold text-purple-700 border-l-4 border-purple-600 pl-4">
    Skills
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

    <SkillGroup
      title="Languages"
      skills={["JavaScript", "TypeScript", "Python", "Java", "C", "C#", "x86 Assembly",]}/>

    <SkillGroup
      title="Frameworks"
      skills={["React", "Next.js", "Node.js", "Express", "Unity",]}/>

    <SkillGroup
      title="Tools"
      skills={["Git", "GitHub", "Docker", "NPM", "Bash", "GitHub Actions", "Vercel",]}/>

    <SkillGroup
      title="Technologies"
      skills={["MongoDB", "REST APIs", "AR Development", "Game Development",]}/>

  </div>
</div>

</section>

{/* Gradient Transition */}
<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-24 bg-gradient-to-b from-purple-100 via-purple-50 to-white"></div>

{/* Experience */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white">
<div className="pointer-events-none absolute inset-0 z-0 hidden [@media(min-width:1450px)]:block">

  {/* Squares */}
  <div
    className="absolute h-[140px] w-[140px] bg-red-500"
    style={{ top: 40, left: 45, transform: "rotate(8deg)" }}/>

  <div
    className="absolute h-[130px] w-[130px] bg-red-600"
    style={{ top: 70, right: 0, transform: "rotate(-9deg)" }}/>

  <div
    className="absolute h-[120px] w-[120px] bg-red-600"
    style={{ top: 430, right: 50, transform: "rotate(46deg)" }}/>


{/* Skyline */}
<div className="absolute bottom-0 left-0 w-full">
  <div className="w-full h-32 bg-gradient-to-t from-red-900/30 to-transparent absolute bottom-0 z-10"></div>
  <div className="flex items-end">
    <div className="w-[70px] h-[180px] bg-red-600 -mr-4"></div>
    <div className="w-[120px] h-[260px] bg-red-700 -mr-4"></div>
    <div className="w-[60px] h-[200px] bg-red-600 -mr-4"></div>
    <div className="w-[150px] h-[320px] bg-red-800 -mr-4"></div>
    <div className="w-[90px] h-[220px] bg-red-700 -mr-4"></div>
    <div className="w-[130px] h-[280px] bg-red-800 -mr-4"></div>
    <div className="w-[70px] h-[190px] bg-red-600 -mr-4"></div>
    <div className="w-[170px] h-[340px] bg-red-900 -mr-4"></div>
    <div className="w-[100px] h-[240px] bg-red-700 -mr-4"></div>
    <div className="w-[140px] h-[300px] bg-red-800 -mr-4"></div>
    <div className="w-[80px] h-[210px] bg-red-600 -mr-4"></div>
    <div className="w-[160px] h-[330px] bg-red-900 -mr-4"></div>
    <div className="w-[90px] h-[230px] bg-red-700 -mr-4"></div>
    <div className="w-[130px] h-[290px] bg-red-800 -mr-4"></div>
    <div className="w-[110px] h-[250px] bg-red-600 -mr-4"></div>
    <div className="w-[140px] h-[310px] bg-red-700 -mr-4"></div>
    <div className="w-[80px] h-[200px] bg-red-600 -mr-4"></div>
    <div className="w-[150px] h-[280px] bg-red-800 -mr-4"></div>
    <div className="w-[100px] h-[220px] bg-red-700 -mr-4"></div>
    <div className="w-[120px] h-[260px] bg-red-800"></div>
  </div>
</div>

</div>


  <div className="relative z-10 mx-auto max-w-6xl px-6 pt-8 pb-18 space-y-6">
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
        ]}/>
      <ExperienceItem
        role="Crew Member"
        company="Rathskeller, Florida Tech"
        dates="September 2023 – May 2025"
        bullets={[
          "Displayed a high level of responsibility and reliability in performing managerial duties.",
          "Demonstrated excellent customer service while completing orders in the campus eatery.",
        ]}/>

      <ExperienceItem
        role="Team Member"
        company="Domino’s"
        dates="April 2021 – August 2024"
        bullets={[
          "Collaborated in a fast-paced environment to keep orders accurate and on time.",
          "Communicated clearly with coworkers and customers to resolve issues quickly.",
        ]}/>
    </div>
  </div>
  </section>
  </div>

<div className="h-2 bg-red-900"></div>

  {/* Footer */}
  <footer className="mt-0 bg-red-400 text-white">
    <div className="mx-auto max-w-6xl px-6 py-6 space-y-4">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch</h2>
        <p className="max-w-2xl text-white/90">
          Feel free to reach out to me for any internship, job, research or other opportunity. I'd be happy to connect and talk further.</p>
        <div className="flex flex-wrap gap-4 pt-2">

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

  {/* Bottom */}
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
          <h3 className="text-lg font-semibold text-red-700">
            {role} <span className="text-xl text-zinc-400">•</span>{" "}
            <span className="text-lg font-semibold text-zinc-800">{company}</span>
          </h3>
        </div>
        <div className="text-lg text-red-500 font-semibold">{dates}</div>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-base text-zinc-700">
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
      className="rounded-md px-3 py-1.5 text-lg text-blue-600 hover:bg-blue-50 hover:text-blue-800 flex items-center gap-1"
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
    <div className="rounded-2xl border border-purple-400 bg-white py-5 px-10 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-600 hover:shadow-sm flex gap-13">

      {/* Text */}
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

        <p className="mt-2 text-base text-zinc-700">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs text-purple-700">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="w-39 flex-shrink-0 border border-zinc-100 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={350}
          height={600}
          className="h-full w-full object-contain"/>
      </div>
    </div>
  );
}

  return (
    <div className="rounded-2xl border border-purple-400 bg-white p-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-600 hover:shadow-sm">
      <div className="mb-4 border border-zinc-100">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={500}
          className="h-56 w-full object-contain"/>
      </div>

      <h3 className="text-base font-semibold">
        <a href={link}
          target="_blank"
          rel="noreferrer"
          className="text-purple-700 hover:underline underline-offset-4">
          {title}
        </a>
      </h3>

      <p className="mt-2 text-base text-zinc-700">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs text-purple-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

import {Code2, Box, Wrench,Cpu,} from "lucide-react";

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
              className="rounded-full border-2 border-purple-600 bg-white px-3 py-1 text-sm text-purple-700 font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:border-purple-700 hover:bg-purple-50 cursor-default">
              {skill}
            </span>
          ) : (
            <span
              key={skill}
              className="rounded-full bg-purple-600 px-3 py-1 text-sm text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-purple-700 cursor-default">
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}