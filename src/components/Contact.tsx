"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = (fieldName: string) => {
    setFocusedField(null);
    // Trigger validation inline
    validate();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Trigger premium celebration confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#3b82f6", "#0d9488"],
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 bg-black/5">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            className="font-display text-3xl font-bold tracking-tight text-white light:text-slate-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In <span className="text-gradient-purple-blue">Touch</span>
          </motion.h2>
          <motion.div
            className="mt-2 h-1 w-12 bg-accent-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Outer Grid */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-12 items-stretch">
          {/* Info Card - Left */}
          <motion.div
            className="lg:col-span-5 glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-white/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white light:text-slate-900 mb-2">Connect</h3>
              <p className="font-sans text-sm leading-relaxed text-slate-400 light:text-slate-500 mb-8">
                Feel free to reach out if you are recruiting for software engineering roles or have an interest in machine learning collaboration.
              </p>

              {/* Direct Info list */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-white/5 p-3 text-accent-purple light:bg-slate-100">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">Email Address</h4>
                    <a href="mailto:doggalasrinath@gmail.com" className="font-sans text-sm text-slate-200 hover:text-accent-purple transition-colors light:text-slate-800">
                      doggalasrinath@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-white/5 p-3 text-accent-blue light:bg-slate-100">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">Phone Number</h4>
                    <a href="tel:+917569656550" className="font-sans text-sm text-slate-200 hover:text-accent-blue transition-colors light:text-slate-800">
                      +91 75696 56550
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-white/5 p-3 text-accent-teal light:bg-slate-100">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 light:text-slate-500">Location</h4>
                    <span className="font-sans text-sm text-slate-200 light:text-slate-800">
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume download Button */}
            <div className="mt-12">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-3 font-sans text-xs font-bold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                title="Download Srinath's Resume"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Form Card - Right */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-2xl p-8 border border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3.5 font-sans text-sm text-white light:text-slate-900 outline-none transition-all placeholder-transparent ${
                    errors.name
                      ? "border-red-500/50 focus:border-red-500"
                      : focusedField === "name"
                      ? "border-accent-purple"
                      : "border-white/10 light:border-slate-300"
                  }`}
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 font-sans text-xs transition-all pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "text-[10px] -translate-y-9 text-accent-purple font-medium"
                      : "text-slate-400"
                  }`}
                >
                  Your Name
                </label>
                {errors.name && <p className="mt-1 text-[10px] font-medium text-red-500">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3.5 font-sans text-sm text-white light:text-slate-900 outline-none transition-all placeholder-transparent ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : focusedField === "email"
                      ? "border-accent-blue"
                      : "border-white/10 light:border-slate-300"
                  }`}
                  placeholder="Your Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 font-sans text-xs transition-all pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "text-[10px] -translate-y-9 text-accent-blue font-medium"
                      : "text-slate-400"
                  }`}
                >
                  Your Email
                </label>
                {errors.email && <p className="mt-1 text-[10px] font-medium text-red-500">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3.5 font-sans text-sm text-white light:text-slate-900 outline-none transition-all placeholder-transparent ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : focusedField === "message"
                      ? "border-accent-teal"
                      : "border-white/10 light:border-slate-300"
                  }`}
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 top-4 font-sans text-xs transition-all pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "text-[10px] -translate-y-7 text-accent-teal font-medium"
                      : "text-slate-400"
                  }`}
                >
                  Your Message
                </label>
                {errors.message && <p className="mt-1 text-[10px] font-medium text-red-500">{errors.message}</p>}
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue px-6 py-4 font-sans text-sm font-bold text-white shadow-lg transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border border-white border-t-transparent" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Toast Message success feedback */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="flex items-center gap-2.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 font-sans text-xs text-emerald-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <div className="flex-1">
                      <strong>Message sent successfully!</strong> Srinath will respond as soon as possible.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
