import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sazzadbasharrakib.dev"),
  title: {
    default: "Sazzad Bashar Rakib | Full-Stack Software Engineer",
    template: "%s | Sazzad Bashar Rakib",
  },
  description:
    "Portfolio of Sazzad Bashar Rakib, a full-stack software engineer building production web applications and intelligent systems.",
  openGraph: {
    title: "Sazzad Bashar Rakib | Full-Stack Software Engineer",
    description:
      "Production web applications, AI-powered workflows, and recruiter-friendly case studies.",
    url: "https://sazzadbasharrakib.dev",
    siteName: "Sazzad Bashar Rakib Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sazzad Bashar Rakib | Full-Stack Software Engineer",
    description:
      "Production web applications, AI-powered workflows, and recruiter-friendly case studies.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
