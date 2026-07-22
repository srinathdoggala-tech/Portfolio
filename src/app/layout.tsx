import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Srinath Doggala | AI Engineer & Full Stack Architect",
  description:
    "Portfolio of Srinath Doggala - Founding AI Full Stack Engineer Intern building autonomous multi-agent AI systems, FastAPI microservices, and high-throughput web applications.",
  keywords: [
    "Srinath Doggala",
    "AI Engineer",
    "Full Stack Engineer",
    "Software Engineer Portfolio",
    "FastAPI Developer",
    "ReactJS Developer",
    "Next.js Developer",
    "LangChain Multi-Agent Systems",
    "OpenAI Claude APIs",
    "PostgreSQL Redis Docker",
    "Chandigarh University AI ML"
  ],
  authors: [{ name: "Srinath Doggala", url: "https://srinathdoggala.tech" }],
  creator: "Srinath Doggala",
  openGraph: {
    title: "Srinath Doggala | AI Engineer & Full Stack Architect",
    description:
      "Production AI & Full Stack Portfolio: Autonomous Multi-Agent Swarms, FastAPI Asynchronous Microservices, and Next.js platforms.",
    url: "https://srinathdoggala.tech",
    siteName: "Srinath Doggala Portfolio",
    images: [
      {
        url: "https://srinathdoggala.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srinath Doggala - AI Engineer & Full Stack Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinath Doggala | AI Engineer & Full Stack Architect",
    description:
      "Production AI & Full Stack Portfolio: Multi-Agent Systems, FastAPI Backends, Next.js Platforms.",
    creator: "@srinathdoggala",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.name,
  jobTitle: "AI Full Stack Engineer Intern",
  worksFor: {
    "@type": "Organization",
    name: "Sreeva AI",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Chandigarh University",
  },
  url: "https://srinathdoggala.tech",
  sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
  knowsAbout: [
    "Artificial Intelligence",
    "Multi-Agent Systems",
    "LangChain",
    "FastAPI",
    "Python",
    "ReactJS",
    "Next.js",
    "PostgreSQL",
    "Redis",
    "Docker"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#030712] text-gray-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
