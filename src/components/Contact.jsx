import { useState } from "react";
import Navbar from "./Navbar";

function FieldIcon({ children }) {
  return (
    <span className="text-[#4ecdc4] shrink-0 mt-0.5">{children}</span>
  );
}

const icons = {
  user: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <circle cx="12" cy="8" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 20c0-3.6 3-6.4 7-6.4s7 2.8 7 6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M4 5.5h16v11H9l-5 4v-4H4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5C10.5 18.6 5.4 13.5 5 5.1A1.5 1.5 0 0 1 6.5 3.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M21 3L3 10.5l7 3 3 7L21 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
};

function Field({ icon, placeholder, textarea, ...props }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="flex items-start gap-4 rounded-2xl bg-white/[0.04] border border-white/10 focus-within:border-[#4ecdc4]/60 px-6 py-4 transition-colors">
      <FieldIcon>{icon}</FieldIcon>
      <Tag
        {...props}
        placeholder={placeholder}
        rows={textarea ? 5 : undefined}
        className="w-full bg-transparent text-white placeholder:text-white/35 focus:outline-none resize-none"
      />
    </label>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="font-sans bg-[#0a1628] min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 40% at 50% 20%, rgba(78,205,196,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(255,255,255,0.6) 35px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 sm:px-12 pt-24 pb-24">
          <div className="rounded-3xl bg-white/[0.03] border border-white/5 shadow-2xl shadow-black/40 p-8 sm:p-14 grid lg:grid-cols-2 gap-14">
            {/* left: info */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl bg-gradient-to-r from-[#4ecdc4] to-[#2f9fe0] bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-md">
                We're here to answer your questions, discuss partnership
                opportunities, or provide support. Let's make something
                great together!
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <FieldIcon>{icons.pin}</FieldIcon>
                  <p className="text-white/80 leading-relaxed">
                    91 Springboard, Sector 44,
                    <br />
                    Temporary Address, India
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <FieldIcon>{icons.phone}</FieldIcon>
                  <p className="text-white/80">+91 98765 43210</p>
                </div>

                <div className="flex items-center gap-4">
                  <FieldIcon>{icons.mail}</FieldIcon>
                  <p className="text-white/80">info@kuberopays.com</p>
                </div>
              </div>
            </div>

            {/* right: form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <Field icon={icons.user} placeholder="Enter your name" type="text" required />
              <Field icon={icons.mail} placeholder="Enter your email" type="email" required />
              <Field icon={icons.chat} placeholder="Write your message..." textarea required />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-[#0a1628]
                           bg-gradient-to-r from-[#4ecdc4] to-[#2f9fe0]
                           hover:brightness-105 hover:-translate-y-px transition-all duration-200
                           shadow-lg shadow-[#4ecdc4]/20 cursor-pointer"
              >
                {icons.send}
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
