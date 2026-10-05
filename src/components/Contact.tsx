"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "../lib/data";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    roleOrCompany: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Interview / Engineering Opportunity from ${formState.name}${
        formState.roleOrCompany ? ` (${formState.roleOrCompany})` : ""
      }`
    );
    const body = encodeURIComponent(
      `Hi Srinath,\n\n${formState.message}\n\n---\nSender: ${formState.name}\nEmail: ${formState.email}\nCompany/Team: ${formState.roleOrCompany || "Not specified"}`
    );
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>ACTIVELY INTERVIEWING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Looking for My Next <span className="gradient-text-gold">Engineering Opportunity</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I am currently interviewing for <strong className="text-white">AI Engineer</strong>, <strong className="text-white">Applied AI</strong>, <strong className="text-white">AI/ML Engineer</strong>, and <strong className="text-white">AI Full-Stack</strong> roles.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Channels & Credentials */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-[#091124] to-[#040816] space-y-6 shadow-2xl">
            {/* Status Callout */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Available for Technical Interviews</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Founding AI Full Stack Engineer Intern @ Sreeva AI. Ready for immediate technical discussions, code walk-throughs, and system design interviews.
              </p>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-gray-200 hover:text-amber-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-gray-400 hover:text-white rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-gray-200 hover:text-amber-300 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 text-gray-400 hover:text-white rounded-md bg-white/5 hover:bg-white/10 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-gray-300">
                  {PERSONAL_INFO.location} · Open to Remote &amp; Relocation
                </span>
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="p-5 rounded-2xl glass-panel border border-amber-500/30 bg-amber-950/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Resume &amp; Technical Documentation</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">PDF</span>
              </div>
              <p className="text-xs text-gray-300 leading-snug">
                One-page verified summary covering system architectures, automated testing benchmarks, and professional experience.
              </p>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Srinath_Doggala_Resume.pdf"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-gray-950 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all shadow-md"
              >
                <span>Download Resume (PDF)</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-gray-400">Verified Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-amber-400 text-gray-300 hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Fast Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#060c1d]/90 space-y-6 shadow-2xl">
            <div className="space-y-1 pb-4 border-b border-white/[0.08]">
              <h3 className="text-xl font-bold text-white tracking-tight">Direct Message or Interview Inquiry</h3>
              <p className="text-xs text-gray-400 font-mono">
                Submitting directly opens an email draft addressed to doggalasrinath@gmail.com
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Chen"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-300">Company / Organization / Role (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. AI Startup / Hiring Manager"
                  value={formState.roleOrCompany}
                  onChange={(e) => setFormState({ ...formState, roleOrCompany: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-gray-300">Message / Inquiry *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Hi Srinath, we came across your work on VoxPilot and ResearchGPT and would like to invite you for an interview..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 font-mono resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <span>Opening Email Client...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-1.5 text-emerald-950">
                    <Check className="w-4 h-4" /> Message Prepared!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Direct Inquiry
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
