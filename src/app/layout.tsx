import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srinath Doggala | Premium AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Srinath Doggala, a software engineer specializing in Artificial Intelligence, Multi-Agent LLM Orchestrations, Deep Learning, and Full-Stack web architectures with Python, FastAPI, React, and Next.js.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "LLM Engineer",
    "Generative AI Engineer",
    "Python Developer",
    "FastAPI",
    "React",
    "TensorFlow",
    "LangChain",
    "RAG",
    "Prompt Engineering",
    "OpenCV",
    "Docker",
    "Git",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: "Srinath Doggala", url: "https://github.com/srinathdoggala-tech" }],
  openGraph: {
    title: "Srinath Doggala | AI Engineer Portfolio",
    description: "Recruiter-focused portfolio showcasing multi-agent AI architectures, machine learning models, and complex full-stack systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans select-none bg-bg-dark text-slate-100 selection:bg-accent-purple/35 selection:text-white transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
