import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} Case Study`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>

      <section className="mt-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          {project.subtitle}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {project.description}
        </p>
      </section>

      <section className="mt-10 surface-panel p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Context
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          {project.context}
        </p>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="surface-panel p-6">
            <p className="text-3xl font-semibold">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="surface-panel p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Stack
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="surface-panel p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Case Study Overview
          </p>
          <div className="mt-5 grid gap-4">
            {project.story.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-black/5 px-4 py-4 dark:border-white/10"
              >
                <p className="text-base leading-8 text-muted-foreground">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 surface-panel p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          What I Built
        </p>
        <div className="mt-5 grid gap-4">
          {project.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-black/5 px-5 py-5 dark:border-white/10"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 max-w-3xl text-base leading-8 text-muted-foreground">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 surface-panel p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Outcomes
        </p>
        <div className="mt-5 grid gap-3">
          {project.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl border border-black/5 px-4 py-4 dark:border-white/10"
            >
              <p className="text-base leading-8 text-muted-foreground">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 surface-panel p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Why This Matters
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
          {project.whyItMatters}
        </p>
      </section>

      <section className="mt-12">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold"
        >
          Next case study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
