import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/*TOP BAR*/}
      <div className="bg-blue-600 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="text-3xl font-semibold">Vincenzo Barager</div>

          <nav className="flex flex-wrap items-center justify-end gap-2 font-semibold">
            <TopLink href="https://www.linkedin.com/in/vincenzo-barager/">LinkedIn</TopLink>
            <TopLink href="https://github.com/Dvizee">GitHub</TopLink>
            <TopLink href="mailto:vincenzobarager@gmail.com">Email</TopLink>
            <TopLink href="/Vincenzo-Barager-Resume.pdf">Resume</TopLink>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 space-y-14">
        
  {/*HERO */}
  <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white">
  <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
    {/* Left circle */}
    <div
      className="absolute h-[310px] w-[310px] rounded-full bg-blue-700"
      style={{ left: 130, top: 140 }}
    />

  {/* Right circle */}
  <div
    className="absolute h-[310px] w-[310px] rounded-full bg-blue-700"
    style={{ right: -90, bottom: 135 }}
  />


<div
    className="absolute h-[110px] w-[110px] rounded-full bg-blue-700"
    style={{ right: 250, bottom: 140 }}
  />
</div>

  <div className="relative z-10 mx-auto max-w-6xl px-6 py-10">
    <header className="flex flex-col items-center gap-8 md:flex-row md:items-start">
      <Image
        src="/images/me.png"
        alt="Vincenzo Barager"
        width={320}
        height={410}
        className="h-[380px] w-[300px] rounded-full border-4 border-blue-700 object-cover"
        priority
      />

      <div className="space-y-8 md:pt-5">
        <h1 className="text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl">
          Computer Science student building things.
        </h1>

        <p className="max-w-3xl text-xl leading-relaxed text-blue-500">
          I’m a CS major at Florida Tech with a passion for creation. I've built full-stack web
          apps, Unity projects, and systems-focused coursework projects.
        </p>
      </div>
    </header>
  </div>
</section>


  {/* PROJECTS */}
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white">
    <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
      {/* Left triangle */}
      <div
        className="absolute h-0 w-0
          border-t-[90px] border-b-[90px] border-l-[135px]
          border-t-transparent border-b-transparent border-l-purple-500"
        style={{ top: 160, left: 60, transform: "rotate(70deg)" }}
      />

    {/* Right triangle */}
    <div
      className="absolute h-0 w-0
        border-t-[90px] border-b-[90px] border-r-[135px]
        border-t-transparent border-b-transparent border-r-purple-600"
      style={{ top: 750, right: 30, transform: "rotate(200deg)" }}
    />
</div>


  {/* Centered content */}
  <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 space-y-6">
    <h2 className="text-3xl font-semibold text-purple-700 border-l-4 border-purple-600 pl-4">
      Projects
    </h2>

    <div className="grid gap-4 sm:grid-cols-2">
      <ProjectCard
        title="FIT AR Navigation App"
        desc="Senior design AR indoor navigation app (Unity, Vuforia, C#) with self-guided tours and interactive AR pop-ups across multiple floors."
        tags={["Unity", "Vuforia", "C#"]}
        image="/images/FITARNA.png"
        link="https://jacobhallburns.github.io/FITARNA/"
      />
      <ProjectCard
        title="MyMangaReader"
        desc="Full-stack manga tracking web app built with Next.js and Node.js that allows users to search, track, rate, and manage manga using data from the Kitsu API."
        tags={["Next.js", "Node", "Docker"]}
        image="/images/MyMangaReaderList.png"
        link="https://github.com/jacobhallburns/MyMangaReader"
      />
      <ProjectCard
        title="Rhythm Runner"
        desc="2D rhythm game racer with custom pixel art, made with Unity and Aseprite."
        tags={["Unity", "Aseprite"]}
        image="/images/rhythm-runner.png"
        link="https://tyler-win.itch.io/rhythm-runner"
      />
      <ProjectCard
        title="Assembly Casino Game"
        desc="Slots + roulette in x86 assembly using Irvine32."
        tags={["x86", "Irvine32"]}
        image="/images/Casino.png"
        link="https://github.com/Dvizee/Assembly-Casino-Game"
      />
    </div>
  </div>
</section>


{/* EXPERIENCE */}
<section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden bg-white">
<div className="pointer-events-none absolute inset-0 z-0 hidden xl:block">
  <div
    className="absolute h-[140px] w-[140px] bg-red-500"
    style={{ top: 40, left: 45, transform: "rotate(8deg)" }}
  />

  <div
    className="absolute h-[130px] w-[130px] bg-red-600"
    style={{ top: 120, right: 0, transform: "rotate(-9deg)" }}
  />

  <div
    className="absolute h-[120px] w-[120px] bg-red-600"
    style={{ top: 460, right: 50, transform: "rotate(46deg)" }}
  />
</div>


  <div className="relative z-10 mx-auto max-w-6xl px-6 py-14 space-y-6">
    <h2 className="text-3xl font-semibold text-red-600 border-l-4 border-red-600 pl-4">
      Experience
    </h2>

    <div className="space-y-4">
      <ExperienceItem
        role="E-Commerce Assistant"
        company="Florida Tech Copy Center"
        dates="September 2025 – Present"
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

  {/* FOOTER */}
  <footer className="mt-5 bg-red-400 text-white">
    <div className="mx-auto max-w-6xl px-6 py-10 space-y-7">
      <div className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold">Get in touch</h2>

        <p className="max-w-2xl text-white/90">
          Feel free to reach out to me for any internship, job, research or other opportunity. I'm happy to discuss how I can contribute and grow with you or your organization. 
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <FooterLink href="mailto:vincenzobarager@gmail.com">Email</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/vincenzo-barager/">LinkedIn</FooterLink>
          <FooterLink href="https://github.com/Dvizee">GitHub</FooterLink>
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
      className="rounded-md px-3 py-1.5 text-lg text-white/90 hover:bg-white/10 hover:text-white"
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
}: {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  link: string,
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-purple-400 hover:shadow-sm">
      <div className="mb-4 border border-zinc-100">
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={500}
          className="h-56 w-full object-contain"
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
      <p className="mt-2 text-base text-zinc-700">{desc}</p>

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
