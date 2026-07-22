"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, FileText, Copy, Check, Sparkles, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-blue-500/30 text-xs font-mono font-medium text-blue-400">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH &amp; RECRUITER CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <span className="gradient-text-apple">Together</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Open for AI Engineer, Full Stack Engineer, and Backend Engineering roles across top tech companies &amp; AI startups.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Info & Resume Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/15 space-y-8 relative overflow-hidden">
            {/* Availability Status */}
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>{PERSONAL_INFO.availabilityStatus}</span>
              </div>
              <p className="text-xs text-gray-300">
                Ready for immediate technical interviews and engineering contributions.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-200">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-gray-400 hover:text-white rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-200">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-200">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-5 rounded-2xl glass-panel border border-blue-500/30 bg-blue-600/10 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Resume &amp; Technical Portfolio</span>
              </div>
              <p className="text-xs text-gray-300">
                Download my verified resume containing all project architectures and metrics.
              </p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all"
              >
                <span>Download Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 text-gray-400 hover:text-white glass-panel rounded-xl border border-white/15 hover:border-blue-500/40 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/15 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">Send a Direct Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center space-y-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                <p className="text-sm text-gray-300">
                  Thank you for reaching out, {formState.name}. I will respond to your email ({formState.email}) promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="px-4 py-2 text-xs font-mono text-blue-400 hover:text-blue-300"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Recruiter"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white/5 rounded-xl text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-blue-500/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-white/5 rounded-xl text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. AI Engineer Role Opportunity @ OpenAI"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-white/5 rounded-xl text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-blue-500/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-white/5 rounded-xl text-white placeholder-gray-500 border border-white/10 focus:outline-none focus:border-blue-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
