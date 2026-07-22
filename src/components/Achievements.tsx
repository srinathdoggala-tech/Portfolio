"use client";

import { useState } from "react";
import { Award, Trophy, GraduationCap, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "certification" | "academic" | "award";
  description: string;
  credentialUrl: string;
}

const achievementsData: Item[] = [
  {
    id: "cert-google",
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud",
    date: "2025",
    type: "certification",
    description: "Deep dive into Google Cloud AI and ML APIs, including Vertex AI, training custom models, and integrating LLMs into robust cloud infrastructures.",
    credentialUrl: "https://www.cloudskillsboost.google/",
  },
  {
    id: "cert-ibm",
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    date: "2025",
    type: "certification",
    description: "Introduction to generative architectures, transformer layers, fine-tuning large language models, and addressing prompt-engineering patterns.",
    credentialUrl: "https://www.coursera.org/",
  },
  {
    id: "cert-duke",
    title: "Introduction to Machine Learning",
    issuer: "Duke University",
    date: "2024",
    type: "certification",
    description: "Structured exploration of supervised and unsupervised machine learning algorithms, validation strategies, feature engineering, and model evaluation metrics.",
    credentialUrl: "https://www.coursera.org/",
  },
  {
    id: "cert-python",
    title: "Advanced AI Techniques in Python",
    issuer: "Coursera (DeepLearning.AI)",
    date: "2024",
    type: "certification",
    description: "Hands-on implementation of deep neural networks, optimizer tuning, vector operations, and transfer learning models using Python and PyTorch.",
    credentialUrl: "https://www.coursera.org/",
  },
  {
    id: "acad-cuni",
    title: "B.E. Computer Science Engineering (AI/ML)",
    issuer: "Chandigarh University",
    date: "2023 - 2027",
    type: "academic",
    description: "Currently pursuing engineering with a strong focus on Data Structures & Algorithms, Machine Learning pipelines, NLP, and database management.",
    credentialUrl: "https://www.cuchd.in/",
  },
  {
    id: "acad-sr",
    title: "Intermediate (Board of Intermediate Education)",
    issuer: "SR Junior College",
    date: "2021 - 2023",
    type: "academic",
    description: "Graduated with 97.5% aggregate. Excellence in Mathematics, Physics, and Chemistry core fields.",
    credentialUrl: "#",
  },
  {
    id: "award-hack",
    title: "Chandigarh University AI hackathon - Winner",
    issuer: "Chandigarh University",
    date: "2025",
    type: "award",
    description: "Awarded 1st place among 40+ competitor teams for designing and pitching ResearchGPT - a multi-agent automated content auditing assistant.",
    credentialUrl: "#",
  },
];

export default function Achievements() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const getIcon = (type: Item["type"]) => {
    switch (type) {
      case "certification":
        return <Award className="h-5 w-5 text-accent-purple" />;
      case "academic":
        return <GraduationCap className="h-5 w-5 text-accent-teal" />;
      case "award":
        return <Trophy className="h-5 w-5 text-accent-orange" />;
    }
  };

  return (
    <section id="achievements" className="relative w-full py-16 md:py-20 px-6 sm:px-8 bg-black/10">
      <div className="mx-auto max-w-5xl w-full">
        {/* Section Header */}
        <div className="mb-12 md:mb-14 flex flex-col items-center text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-white light:text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements & <span className="text-gradient-purple-blue">Certifications</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Timeline List */}
        <div className="grid gap-4 md:grid-cols-2">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="glass-card flex items-center justify-between rounded-xl p-5 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border border-white/5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-white/5 p-3 light:bg-slate-100">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-white light:text-slate-900">{item.title}</h3>
                  <p className="font-sans text-xs text-slate-400 light:text-slate-500 mt-0.5">
                    {item.issuer} • {item.date}
                  </p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Box container */}
              <motion.div
                className="relative w-full max-w-lg rounded-2xl bg-zinc-900 border border-white/10 p-8 shadow-2xl light:bg-white light:border-slate-300"
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900 hover:bg-white/5 transition-all"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Content */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-white/5 p-2 text-accent-purple light:bg-slate-100">
                    {getIcon(selectedItem.type)}
                  </div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    {selectedItem.type} Details
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white light:text-slate-900 mb-2">
                  {selectedItem.title}
                </h3>
                <p className="font-sans text-xs text-slate-400 light:text-slate-500 mb-6">
                  Issued by <strong>{selectedItem.issuer}</strong> • {selectedItem.date}
                </p>

                <p className="font-sans text-sm leading-relaxed text-slate-300 light:text-slate-600 mb-8">
                  {selectedItem.description}
                </p>

                {/* Bottom Trigger */}
                {selectedItem.credentialUrl !== "#" && (
                  <a
                    href={selectedItem.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue px-5 py-2.5 font-sans text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Credentials</span>
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
