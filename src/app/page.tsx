import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  about,
  certifications,
  experience,
  exploration,
  projects,
  siteConfig,
  stackGroups,
} from "@/data/portfolio";

const sectionLabelClass =
  "text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-20 mb-10">
          <div className="surface-panel mx-auto flex max-w-6xl items-center justify-between rounded-[1.75rem] px-5 py-4 sm:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {siteConfig.role}
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        <section className="grid gap-10 border-b border-black/5 pb-20 pt-8 dark:border-white/10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <p className={sectionLabelClass}>Full-Stack Software Engineer</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Building production web applications and intelligent systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="#projects">
                View Projects
              </Link>
              <a
                className="button-secondary"
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="button-secondary"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="button-secondary" href={siteConfig.resumeHref}>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="surface-panel p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.45)]" />
                <p className="text-sm font-medium">{siteConfig.availability}</p>
              </div>
              <div className="mt-8 space-y-6">
                <div>
                  <p className={sectionLabelClass}>Current Focus</p>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    Production-grade SaaS features, engineering workflow
                    automation, and practical AI integrations.
                  </p>
                </div>
                <div>
                  <p className={sectionLabelClass}>Approach</p>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    Clean UX, scalable architecture, and measurable business
                    outcomes over visual noise or trend-chasing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="grid gap-8 border-b border-black/5 py-20 dark:border-white/10 lg:grid-cols-[0.55fr_1fr]">
          <Reveal>
            <p className={sectionLabelClass}>About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-3xl text-xl leading-9 text-muted-foreground">
              {about}
            </p>
          </Reveal>
        </section>

        <section className="grid gap-8 border-b border-black/5 py-20 dark:border-white/10 lg:grid-cols-[0.55fr_1fr]">
          <Reveal>
            <p className={sectionLabelClass}>Experience</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="surface-panel p-7">
              {experience.map((item) => (
                <div key={item.company}>
                  <div className="flex flex-col gap-4 border-l border-black/10 pl-5 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <BriefcaseBusiness className="h-4 w-4 text-accent" />
                        <p className="text-xl font-semibold">{item.company}</p>
                      </div>
                      <p className="mt-3 text-base text-muted-foreground">
                        {item.title} — {item.level}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {["L1", "L2", "L3"].map((level) => (
                      <span
                        key={level}
                        className={`rounded-full px-4 py-2 text-sm ${
                          level === "L3"
                            ? "bg-accent text-white"
                            : "bg-black/5 text-muted-foreground dark:bg-white/5"
                        }`}
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-4">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl border border-black/5 px-4 py-4 dark:border-white/10">
                        <p className="text-[15px] leading-7 text-muted-foreground">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                  <details className="mt-8 group rounded-2xl border border-black/5 bg-black/5 p-5 dark:border-white/10 dark:bg-white/5">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-foreground marker:hidden">
                      <span className="group-open:hidden">Read story</span>
                      <span className="hidden group-open:inline">Hide story</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="mt-5">
                      <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                        {item.summary}
                      </p>
                      <div className="mt-5 grid gap-3">
                        {item.story.map((point) => (
                          <div
                            key={point}
                            className="rounded-2xl border border-black/5 bg-background/70 px-4 py-4 dark:border-white/10"
                          >
                            <p className="text-[15px] leading-7 text-muted-foreground">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="grid gap-8 border-b border-black/5 py-20 dark:border-white/10 lg:grid-cols-[0.55fr_1fr]">
          <Reveal>
            <p className={sectionLabelClass}>Tech Stack</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group, index) => (
              <Reveal key={group.title} delay={0.05 * index}>
                <div className="surface-panel h-full p-6">
                  <p className="text-lg font-semibold">{group.title}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <Reveal>
            <p className={sectionLabelClass}>Featured Projects</p>
            <div className="mt-4 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Case studies that show product thinking, systems work, and AI-assisted engineering.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={0.08 * index}>
                <article className="surface-panel p-8">
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        {project.subtitle}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold">
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link
                        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                        href={`/projects/${project.slug}`}
                      >
                        Case Study
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-black/5 bg-black/5 p-5 dark:border-white/10 dark:bg-white/5"
                        >
                          <p className="text-2xl font-semibold">{metric.value}</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-y border-black/5 py-20 dark:border-white/10 lg:grid-cols-[0.55fr_1fr]">
          <Reveal>
            <p className={sectionLabelClass}>AI & Engineering</p>
          </Reveal>
          <div className="grid gap-5">
            {exploration.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="surface-panel p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-8 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/5 py-20 dark:border-white/10 lg:grid-cols-[0.55fr_1fr]">
          <Reveal>
            <p className={sectionLabelClass}>Certifications</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
                <div className="surface-panel p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.issuer}
                      </p>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {item.issued}
                    </p>
                  </div>
                  <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {item.credentialId ? (
                      <p>Credential ID: {item.credentialId}</p>
                    ) : null}
                    <p>
                      Verified certification in software engineering and modern
                      AI tooling.
                    </p>
                  </div>
                  {item.href ? (
                    <a
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-20">
          <Reveal>
            <p className={sectionLabelClass}>Contact</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project in mind or looking for a full-stack engineer?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
              I’m interested in product-focused engineering roles and teams working on meaningful software, AI-enabled workflows, or operationally complex systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                className="button-secondary"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="button-secondary"
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
