"use client";

// ============================================================
// src/components/sections/Contact.tsx
// ============================================================

import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";
import DoubleSlash from "@/components/ui/DoubleSlash";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try emailing me directly.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-bg-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 blur-[100px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`
          relative z-10 max-w-xl mx-auto px-6
          transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="mono-label flex items-center gap-2 justify-center mb-4">
            <DoubleSlash /> let&apos;s connect
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text-primary mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="font-body text-text-secondary">
            Whether it&apos;s an internship opportunity, a project idea, or just
            a chat — my inbox is always open.
          </p>
        </div>

        {/* Form */}
        <div className="card-surface border-glow rounded-xl p-8 flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="mono-label text-xs">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full px-4 py-3 rounded-md bg-bg-tertiary border border-border-subtle font-body text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/50 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="mono-label text-xs">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full px-4 py-3 rounded-md bg-bg-tertiary border border-border-subtle font-body text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/50 transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="mono-label text-xs">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Ismail, I'd like to talk about..."
              className="w-full px-4 py-3 rounded-md resize-none bg-bg-tertiary border border-border-subtle font-body text-text-primary placeholder:text-text-muted text-sm focus:outline-none focus:border-accent-cyan/50 transition-all duration-200"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-md font-mono text-sm font-bold bg-accent-cyan text-bg-primary hover:shadow-glow-button hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                <FiSend size={15} /> Send Message
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
