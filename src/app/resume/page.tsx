import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  certifications,
  education,
  projects,
  resumeExperience,
  resumeSummary,
  siteConfig,
  stackGroups,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume overview for Sazzad Bashar Rakib.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <section className="mt-10 surface-panel p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Resume
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {siteConfig.role}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {siteConfig.location} · {siteConfig.phone} · {siteConfig.email}
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
          {resumeSummary}
        </p>
      </section>

      <section className="mt-8 surface-panel p-8">
        <h2 className="text-xl font-semibold">Professional Experience</h2>
        {resumeExperience.map((item) => (
          <div key={item.company} className="mt-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold">{item.company}</p>
                <p className="text-muted-foreground">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.period}
              </p>
            </div>
            {item.note ? (
              <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
            ) : null}
            <ul className="mt-4 space-y-3 text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-8 surface-panel p-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <p className="font-semibold">{group.title}</p>
              <p className="mt-2 text-muted-foreground">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 surface-panel p-8">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-6 space-y-8">
          {projects.map((project) => (
            <div key={project.slug}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-lg font-semibold">
                    {project.subtitle} - {project.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Technologies: {project.tech.join(", ")}
                  </p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-medium text-muted-foreground"
                >
                  View case study
                </Link>
              </div>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {project.sections.map((section) => (
                  <li key={section.title}>
                    <span className="font-medium text-foreground">
                      {section.title}:
                    </span>{" "}
                    {section.body}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 surface-panel p-8">
        <h2 className="text-xl font-semibold">Education</h2>
        <div className="mt-6 space-y-6">
          {education.map((item) => (
            <div key={`${item.school}-${item.degree}`}>
              <p className="text-lg font-semibold">{item.degree}</p>
              <p className="mt-1 text-muted-foreground">{item.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.location} · Graduation Year: {item.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 surface-panel p-8">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <ul className="mt-6 space-y-3 text-muted-foreground">
          {certifications.map((item) => (
            <li key={item.title}>
              <span className="font-medium text-foreground">{item.title}</span>{" "}
              - {item.issuer}, {item.issued}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
