export const siteConfig = {
  name: "Sazzad Bashar Rakib",
  role: "Full-Stack Software Engineer",
  summary:
    "Building production web applications and intelligent systems with a focus on product quality, developer velocity, and practical AI features.",
  availability: "Open to opportunities",
  email: "sazzadbasharrakib@gmail.com",
  github: "https://github.com/SRakiB23",
  linkedin: "https://www.linkedin.com/in/md-sazzad-bashar-rakib",
  resumeHref: "/resume",
};

export const about =
  "I started by building polished frontend experiences, then moved deeper into full-stack product engineering and AI-powered workflows. Today I enjoy shipping reliable user-facing applications, integrating external systems, and exploring how retrieval, search, and agents can solve real operational problems.";

export const experience = [
  {
    company: "SJ Innovation LLC",
    title: "Junior Software Engineer",
    level: "L3",
    period: "Nov 2024 — Present",
    summary:
      "Grew from frontend delivery into broader full-stack ownership across performance, backend integrations, operational tooling, and practical AI workflows.",
    highlights: [
      "Progressed from L1 to L3 through consistent ownership and delivery.",
      "Built production features across frontend, backend, payments, and operational tooling.",
      "Worked on AI-assisted workflows and internal systems that reduced manual work.",
    ],
    story: [
      "Developed and maintained production web applications using React, Node.js, Express, and modern database systems, with a focus on reliable delivery and measurable performance improvements.",
      "Architected Next.js SSR workflows and frontend performance enhancements that improved load times and raised overall application quality.",
      "Built reusable responsive UI components with React and Tailwind CSS to create consistent user experiences across devices.",
      "Designed and integrated REST APIs with Supabase and PostgreSQL for data workflows, authentication, and internal product operations.",
      "Implemented RAG-oriented workflows, vector search, semantic retrieval, and hybrid search approaches for practical knowledge retrieval use cases.",
      "Worked within Git-based PR workflows, code reviews, and AI-assisted development processes to ship features faster in Agile teams.",
    ],
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Laravel"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"],
  },
  {
    title: "AI",
    items: ["RAG", "Vector Search", "Hybrid Search", "AI Agents"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Stripe", "Firebase", "Slack"],
  },
];

export const projects = [
  {
    slug: "myspalive",
    name: "MySpaLive",
    subtitle: "EMR Platform",
    tech: [
      "React",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Stripe",
      "QUO",
    ],
    description:
      "A healthcare-focused platform that supports bookings, onboarding, billing flows, and operational workflows for spa and wellness teams.",
    metrics: [
      { label: "weekly bookings", value: "100+" },
      { label: "rows mapped through bulk import", value: "1,000+" },
      { label: "less manual onboarding", value: "40%" },
    ],
    context:
      "MySpaLive is an EMR-oriented platform where patient booking, provider onboarding, billing, and internal operations all need to stay aligned. The challenge was not just adding features, but making the workflows dependable enough for day-to-day use by busy operational teams.",
    story: [
      "Worked across product workflows where data accuracy and operator efficiency mattered.",
      "Improved onboarding through bulk import and mapping flows that reduced repetitive setup work.",
      "Connected customer-facing booking flows with internal operations and payment handling.",
    ],
    sections: [
      {
        title: "Patient Booking & Communication",
        body:
          "Built appointment scheduling flows supporting 100+ weekly bookings while preventing overlap errors, and integrated QUO calling to support remote consultations and smoother patient communication.",
      },
      {
        title: "Payment Processing",
        body:
          "Integrated Stripe billing flows for subscription handling across the platform, making payment collection more reliable while fitting into the larger EMR workflow.",
      },
      {
        title: "Bulk Data Import & Mapping",
        body:
          "Designed a bulk import tool that mapped 1,000+ rows with high accuracy, cutting manual onboarding work by 40% and making account setup more scalable for operations teams.",
      },
      {
        title: "Provider Onboarding Systems",
        body:
          "Architected onboarding workflows that automatically triggered downstream registrations and referral-related steps, reducing administrative coordination during provider setup.",
      },
      {
        title: "Complex UI & Role-Based Logic",
        body:
          "Implemented dynamic forms, validation-heavy user flows, and role-based access patterns to support multi-tenant usage without compromising usability.",
      },
    ],
    outcomes: [
      "Improved booking reliability for a live operational workflow.",
      "Reduced repetitive onboarding effort through automation and bulk tooling.",
      "Connected billing, communication, and administrative workflows into a more cohesive product experience.",
    ],
    whyItMatters:
      "This project shows end-to-end product engineering across scheduling, payments, onboarding, and data operations in a workflow-heavy environment where reliability matters as much as feature velocity.",
  },
  {
    slug: "collabai",
    name: "CollabAI",
    subtitle: "Engineering Control Tower",
    tech: [
      "React",
      "Supabase",
      "PostgreSQL",
      "GitHub API",
      "AI Agents",
      "REST APIs",
      "Slack",
    ],
    description:
      "An engineering operations system for tracking repositories, pull requests, QA progress, and automation opportunities across active workstreams.",
    metrics: [
      { label: "repositories tracked", value: "600+" },
      { label: "manual tracking saved per week", value: "5 hrs/week" },
    ],
    context:
      "CollabAI was built to give engineering and QA stakeholders a clearer operational view across many active repositories. The goal was to reduce fragmented tracking, manual follow-up, and hidden bottlenecks by bringing visibility and automation into one control layer.",
    story: [
      "Designed to centralize code health, review flow, and engineering visibility across many repositories.",
      "Used automation and agent workflows to reduce repetitive project tracking and QA coordination.",
      "Showcases product thinking beyond CRUD by combining APIs, workflow orchestration, and AI-assisted operations.",
    ],
    sections: [
      {
        title: "GitHub Analytics",
        body:
          "Architected GitHub activity tracking and reporting to monitor developer output across daily, weekly, and monthly views, giving teams better visibility into engineering activity.",
      },
      {
        title: "Automated QA Pipelines",
        body:
          "Built PR review and QA tracking workflows across 600+ repositories, saving project managers around 5 hours each week that would otherwise be spent on manual follow-up.",
      },
      {
        title: "Workflow Automation",
        body:
          "Implemented task assignment flows that triggered when bugs or delivery bottlenecks were identified during PR review, helping move issues into action faster.",
      },
      {
        title: "Multi-Channel Notifications",
        body:
          "Integrated Slack and email notification paths to keep stakeholders updated in real time on QA status, review findings, and assigned next steps.",
      },
      {
        title: "Knowledge Base Integration",
        body:
          "Connected code quality and reporting signals into a central knowledge layer so project information became easier to search, understand, and act on.",
      },
    ],
    outcomes: [
      "Centralized repo-level engineering visibility across a large active surface area.",
      "Reduced manual QA/project tracking overhead for project managers.",
      "Turned review signals into automated follow-up workflows instead of passive reporting.",
    ],
    whyItMatters:
      "This project highlights systems thinking across analytics, workflow orchestration, notifications, and AI-assisted operations, showing how engineering tools can reduce management overhead instead of just displaying data.",
  },
];

export const exploration = [
  {
    title: "Retrieval That Supports Product Work",
    body: "I’m exploring RAG, semantic retrieval, HyDE, and hybrid search with a focus on when they improve product quality, not just demo quality.",
  },
  {
    title: "Agentic Engineering Workflows",
    body: "I’m interested in MCP-powered tooling, agent skills, and operational automations that help teams review, search, and ship faster.",
  },
  {
    title: "Production Constraints First",
    body: "My approach is grounded in reliability, observability, and maintainability so AI features fit into real systems instead of living as isolated experiments.",
  },
];

export const certifications = [
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic",
    issued: "Jul 2026",
    credentialId: "9atgmd4inpjb",
    href: "https://verify.skilljar.com/c/9atgmd4inpjb",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    issued: "Jul 2026",
    credentialId: "b5776of9g7ns",
    href: "https://verify.skilljar.com/c/b5776of9g7ns",
  },
  {
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    issued: "Jul 2026",
    credentialId: "62w9p9miged8",
  },
  {
    title: "AI Capabilities and Limitations",
    issuer: "Anthropic",
    issued: "Jul 2026",
    credentialId: "ygin4gqrfwy4",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    issued: "Jul 2026",
    credentialId: "25944655",
    href: "https://www.skills.google/public_profiles/eb047a73-08e7-48b5-ada4-792ad522cceb/badges/25944655?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    title: "Complete Web Development",
    issuer: "Programming Hero",
    issued: "Jun 2024",
    href: "https://drive.google.com/file/d/1gW989c5n5mrUf4XrYLQeSU1aU-VNpxAS/view",
  },
];
