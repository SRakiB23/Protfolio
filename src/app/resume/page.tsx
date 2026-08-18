import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  about,
  experience,
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
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
          {about}
        </p>
      </section>

      <section className="mt-8 surface-panel p-8">
        <h2 className="text-xl font-semibold">Experience</h2>
        {experience.map((item) => (
          <div key={item.company} className="mt-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold">{item.company}</p>
                <p className="text-muted-foreground">
                  {item.title} — {item.level}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.period}
              </p>
            </div>
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
    </main>
  );
}
