"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { AnimatedSection, GoldDivider } from "@/components/ui/motion";
import { fadeInUp, fadeIn } from "@/components/ui/motion";

/* ========================================
   Types
   ======================================== */
type CommChannel = "whatsapp" | "wechat" | "line" | "email";

interface FormData {
  fullName: string;
  email: string;
  channel: CommChannel | "";
  channelId: string;
  arrivalDate: string;
  interest: string;
  wellnessGoals: string;
}

const luxuryEase: [number, number, number, number] = [0.4, 0, 0.2, 1];

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: luxuryEase } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const thankYouVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: luxuryEase, delay: 0.15 },
  },
};

/* ========================================
   Communication Channel Selector
   ======================================== */
const channels: { id: CommChannel; label: string; icon: React.ReactNode }[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "wechat",
    label: "WeChat",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.97 3.258c-4.222 0-7.679 2.89-7.679 6.478 0 3.586 3.457 6.476 7.679 6.476.845 0 1.67-.117 2.442-.34a.746.746 0 01.58.078l1.543.908a.278.278 0 00.145.049c.134 0 .24-.113.24-.253 0-.06-.024-.118-.039-.174l-.32-1.2a.5.5 0 01.176-.549C22.089 19.834 23 18.186 23 16.205c0-3.587-3.458-6.478-7.68-6.478h.248zm-2.365 3.064c.55 0 .996.453.996 1.01 0 .558-.446 1.012-.996 1.012s-.996-.454-.996-1.012c0-.557.446-1.01.996-1.01zm4.728 0c.55 0 .996.453.996 1.01 0 .558-.446 1.012-.996 1.012s-.996-.454-.996-1.012c0-.557.446-1.01.996-1.01z" />
      </svg>
    ),
  },
  {
    id: "line",
    label: "LINE",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596a.625.625 0 01-.213.039.614.614 0 01-.51-.27L12.17 9.95v2.929c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.27.173-.51.43-.595a.62.62 0 01.724.232l2.184 3.292V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-6.621 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.037c-.349 0-.63-.285-.63-.629V8.108c0-.345.281-.63.63-.63.346 0 .628.285.628.63v4.141h1.758c.346 0 .628.285.628.63 0 .344-.282.629-.628.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
  },
  {
    id: "email",
    label: "Email",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

const channelPlaceholders: Record<CommChannel, string> = {
  whatsapp: "Your WhatsApp number (e.g. +1 234 567 8900)",
  wechat: "Your WeChat ID",
  line: "Your LINE ID",
  email: "Your email address",
};

const programOptions = [
  "The Radiance — 1 Night / 2 Days",
  "The Executive Protocol — 3 Nights / 4 Days",
  "The Opus — 7 Nights / 8 Days",
  "Adipose-Derived Stem Cell Therapy",
  "NK Cell Immune Therapy",
  "Fibroblast Cell Therapy",
  "Micro CTC Cancer Screening",
  "Not sure yet — I'd like guidance",
];

/* ========================================
   Thank You Message Component
   ======================================== */
function ThankYouMessage({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  const firstName = name.split(" ")[0] || name;

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 px-6 backdrop-blur-sm"
    >
      <motion.div
        variants={thankYouVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-lg border border-cream bg-white-warm p-10 shadow-2xl md:p-14"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-text-muted transition-colors hover:text-gold"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Checkmark */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center border border-gold/30 bg-ivory">
            <svg
              className="h-7 w-7 text-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>

        {/* English Message */}
        <div className="text-center">
          <h3 className="font-serif text-2xl font-light tracking-wide text-text-dark">
            Thank you, {firstName}.
          </h3>
          <p className="mt-5 text-sm font-light leading-[1.9] text-text-body">
            Your private consultation request has been received. A dedicated
            medical concierge will reach out to you within{" "}
            <span className="font-medium text-gold">12 hours</span> via your
            preferred channel.
          </p>
          <p className="mt-3 text-sm font-light leading-[1.9] text-text-body">
            In the meantime, we&apos;re already preparing for your journey.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/30" />
          <span className="block h-1 w-1 rotate-45 bg-gold/40" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Chinese Message */}
        <div className="text-center">
          <p className="text-sm font-light leading-[1.9] text-text-body/70">
            感谢您，{firstName}。您的私人咨询请求已收到。我们的专属医疗管家将在
            <span className="font-medium text-gold">12小时内</span>
            通过您首选的联系方式与您取得联系。在此期间，我们已开始为您的旅程做准备。
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ========================================
   Styled Form Field Components
   ======================================== */
function FormLabel({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[11px] font-medium tracking-[0.15em] text-text-muted uppercase"
    >
      {children}
      {required && <span className="ml-1 text-gold">*</span>}
    </label>
  );
}

const inputStyles =
  "w-full border border-cream bg-white-warm px-4 py-3.5 font-sans text-sm font-light text-text-dark placeholder:text-text-muted/50 transition-all duration-300 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20";

/* ========================================
   Main ConciergeForm Component
   ======================================== */
export default function ConciergeForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    channel: "",
    channelId: "",
    arrivalDate: "",
    interest: "",
    wellnessGoals: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isComplete =
    formData.fullName && formData.email && formData.channel && formData.channelId;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ivory py-28 md:py-36 lg:py-44"
    >
      {/* Background accents */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cream/40 to-transparent" />
      <div className="absolute left-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-cream/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        {/* Section Header */}
        <AnimatedSection className="mb-16 text-center md:mb-20">
          <motion.p
            variants={fadeIn}
            className="mb-6 text-xs font-medium tracking-[0.3em] text-gold uppercase"
          >
            Begin Your Private Consultation
          </motion.p>

          <GoldDivider className="mb-12" />

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-wide text-text-dark"
          >
            Your Journey Begins with{" "}
            <span className="italic text-gold">a Conversation</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-text-body"
          >
            This is not a form — it&apos;s the first step of your
            transformation. Share what matters to you, and our medical concierge
            will craft a program around your life, your goals, and your schedule.
          </motion.p>
        </AnimatedSection>

        {/* Two-Column Layout */}
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
          {/* Left Column — Trust & Context */}
          <AnimatedSection className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <motion.div variants={fadeInUp}>
                {/* What to Expect */}
                <h3 className="font-serif text-xl font-light tracking-wide text-text-dark">
                  What Happens Next
                </h3>
                <div className="mt-6 space-y-5">
                  {[
                    {
                      step: "01",
                      text: "A medical concierge contacts you within 12 hours via your preferred channel.",
                    },
                    {
                      step: "02",
                      text: "Together, we design a preliminary program around your wellness objectives.",
                    },
                    {
                      step: "03",
                      text: "You receive a detailed itinerary, treatment plan, and travel guidance.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-gold/20 font-serif text-sm font-light text-gold">
                        {item.step}
                      </span>
                      <p className="text-sm font-light leading-relaxed text-text-body">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 border border-cream bg-white-warm/60 p-6"
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.15em] text-gold uppercase">
                      Your Privacy, Our Promise
                    </p>
                    <p className="mt-2 text-xs font-light leading-[1.8] text-text-muted">
                      Your information is protected under international medical
                      confidentiality standards. We operate in full compliance
                      with HIPAA and GDPR guidelines. All communications are
                      encrypted and handled exclusively by our medical concierge
                      team — never shared with third parties.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeIn}
                className="mt-10 flex gap-10"
              >
                <div>
                  <p className="font-serif text-2xl font-light text-gold">
                    12h
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.15em] text-text-muted uppercase">
                    Response Time
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-light text-gold">
                    100%
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.15em] text-text-muted uppercase">
                    Confidential
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Column — The Form */}
          <AnimatedSection className="lg:col-span-3">
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-7"
              noValidate
            >
              {/* Full Name */}
              <div>
                <FormLabel htmlFor="fullName" required>
                  Full Name
                </FormLabel>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  placeholder="How should we address you?"
                  className={inputStyles}
                  autoComplete="name"
                />
              </div>

              {/* Email */}
              <div>
                <FormLabel htmlFor="email" required>
                  Email Address
                </FormLabel>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="For your consultation confirmation"
                  className={inputStyles}
                  autoComplete="email"
                />
              </div>

              {/* Communication Channel */}
              <div>
                <FormLabel htmlFor="channel" required>
                  How Would You Like Us to Reach You?
                </FormLabel>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {channels.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => {
                        updateField("channel", ch.id);
                        if (ch.id === "email") {
                          updateField("channelId", formData.email);
                        } else {
                          updateField("channelId", "");
                        }
                      }}
                      className={`flex flex-col items-center gap-2 border px-3 py-4 transition-all duration-300 ${
                        formData.channel === ch.id
                          ? "border-gold bg-gold/5 text-gold"
                          : "border-cream bg-white-warm text-text-muted hover:border-gold/30 hover:text-gold/70"
                      }`}
                      aria-pressed={formData.channel === ch.id}
                    >
                      {ch.icon}
                      <span className="text-[10px] font-medium tracking-[0.1em] uppercase">
                        {ch.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Channel ID */}
              <AnimatePresence mode="wait">
                {formData.channel && formData.channel !== "email" && (
                  <motion.div
                    key={formData.channel}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: luxuryEase }}
                  >
                    <FormLabel htmlFor="channelId" required>
                      Your {channels.find((c) => c.id === formData.channel)?.label} ID
                    </FormLabel>
                    <input
                      id="channelId"
                      type="text"
                      required
                      value={formData.channelId}
                      onChange={(e) => updateField("channelId", e.target.value)}
                      placeholder={
                        channelPlaceholders[formData.channel as CommChannel]
                      }
                      className={inputStyles}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Arrival Date */}
              <div>
                <FormLabel htmlFor="arrivalDate">
                  Estimated Arrival in Japan
                </FormLabel>
                <input
                  id="arrivalDate"
                  type="date"
                  value={formData.arrivalDate}
                  onChange={(e) => updateField("arrivalDate", e.target.value)}
                  className={`${inputStyles} ${
                    !formData.arrivalDate ? "text-text-muted/50" : ""
                  }`}
                />
                <p className="mt-1.5 text-[11px] font-light text-text-muted/60">
                  Approximate is fine — we&apos;ll coordinate the details together.
                </p>
              </div>

              {/* Program Interest */}
              <div>
                <FormLabel htmlFor="interest">
                  Program of Interest
                </FormLabel>
                <select
                  id="interest"
                  value={formData.interest}
                  onChange={(e) => updateField("interest", e.target.value)}
                  className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%238a8580%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_16px_center] bg-no-repeat pr-10`}
                >
                  <option value="">Tell us what interests you</option>
                  {programOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Wellness Goals */}
              <div>
                <FormLabel htmlFor="wellnessGoals">
                  Share Your Wellness Goals
                </FormLabel>
                <textarea
                  id="wellnessGoals"
                  rows={4}
                  value={formData.wellnessGoals}
                  onChange={(e) =>
                    updateField("wellnessGoals", e.target.value)
                  }
                  placeholder="What brings you to us? Any specific concerns, past treatments, dietary requirements, or goals you'd like us to know about..."
                  className={`${inputStyles} resize-none`}
                />
                <p className="mt-1.5 text-[11px] font-light text-text-muted/60">
                  All medical information is treated with the strictest
                  confidentiality.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isComplete}
                  className={`group relative w-full py-5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 ${
                    isComplete
                      ? "animate-glow bg-gold text-white-warm hover:bg-gold-light"
                      : "cursor-not-allowed bg-cream text-text-muted/50"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Begin My Consultation
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
                <p className="mt-4 text-center text-[11px] font-light text-text-muted/60">
                  No commitment required. Your concierge will follow up within
                  12 hours.
                </p>
              </div>
            </motion.form>
          </AnimatedSection>
        </div>
      </div>

      {/* Thank You Overlay */}
      <AnimatePresence>
        {submitted && (
          <ThankYouMessage
            name={formData.fullName}
            onClose={() => setSubmitted(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
