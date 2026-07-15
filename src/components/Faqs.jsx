import { useState } from "react";
import Navbar from "./Navbar";

const faqs = [
  {
    q: "What is Kubero Pays?",
    a: "Kubero Pays is a secure Indian payment solution designed for businesses of all sizes. We support UPI, RuPay, Visa, Mastercard, and offer advanced fraud protection with data residency in India.",
  },
  {
    q: "Is Kubero Pays available only in India?",
    a: "Yes, Kubero Pays is tailored for the Indian market. All transactions and sensitive data are stored within Indian servers, ensuring compliance with RBI guidelines and Indian data protection laws.",
  },
  {
    q: "Does Kubero Pays support recurring billing?",
    a: "Absolutely. You can set up recurring billing, subscriptions, and automated invoicing with just a few clicks.",
  },
  {
    q: "How secure is Kubero Pays?",
    a: "We are PCI-DSS compliant, use bank-grade encryption, and include advanced fraud monitoring tools for every transaction.",
  },
  {
    q: "What support do you provide?",
    a: "Our India-based support team is available 24/7 via phone, chat, and email to assist your business whenever you need help.",
  },
];

function PlusMinus({ open }) {
  return (
    <span className="relative w-4 h-4 shrink-0 text-[#c9911f]">
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-3.5 h-[2px] bg-current rounded-full" />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-200 ${
          open ? "rotate-90 opacity-0" : "opacity-100"
        }`}
      >
        <span className="h-3.5 w-[2px] bg-current rounded-full" />
      </span>
    </span>
  );
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        open
          ? "border-[#c9911f]/50 bg-[#f7f6f3] shadow-[0_0_0_1px_rgba(201,145,31,0.15)]"
          : "border-[#161616]/8 bg-white hover:bg-[#f7f6f3]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 text-left px-7 py-6 cursor-pointer"
      >
        <span className="font-semibold text-[#161616] text-base sm:text-lg">
          {q}
        </span>
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0 text-[#c9911f]">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="text-[#c9911f] text-2xl leading-none shrink-0">+</span>
        )}
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-7 pb-6 text-[#161616]/60 leading-relaxed max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(22,22,22,0.6) 35px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 sm:px-12 pt-20 pb-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-start">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight">
              <span className="bg-gradient-to-r from-[#c9911f] to-[#b37e1a] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="mt-4 text-[#161616]/55 text-lg">
              Everything you need to know about Kubero Pays in India.
            </p>

            <div className="mt-10 space-y-4">
              {faqs.map((item, i) => (
                <FaqItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* illustration column */}
          <div className="hidden lg:flex justify-center pt-8">
            <svg width="320" height="360" viewBox="0 0 320 360" fill="none" aria-hidden="true">
              {/* ground shadow */}
              <ellipse cx="150" cy="345" rx="110" ry="14" fill="#161616" opacity="0.06" />

              {/* stick figure */}
              <circle cx="150" cy="70" r="26" fill="#ddd6cb" />
              <rect x="140" y="94" width="20" height="90" rx="10" fill="#ddd6cb" />
              <rect x="118" y="184" width="26" height="70" rx="10" fill="#ddd6cb" />
              <rect x="162" y="184" width="26" height="70" rx="10" fill="#ddd6cb" />
              <rect x="108" y="100" width="18" height="70" rx="9" fill="#ddd6cb" transform="rotate(-15 108 100)" />
              <rect x="178" y="88" width="18" height="55" rx="9" fill="#ddd6cb" transform="rotate(35 178 88)" />

              {/* big question mark */}
              <g transform="translate(190,150) rotate(18)">
                <path
                  d="M6 0c0-16 12-26 28-26s28 10 28 24c0 14-10 20-18 26-6 4-10 8-10 16"
                  stroke="#e0393e"
                  strokeWidth="16"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="34" cy="72" r="9" fill="#e0393e" />
              </g>

              {/* small exclamation cube */}
              <rect x="220" y="230" width="34" height="34" rx="6" fill="#e0393e" transform="rotate(20 237 247)" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}