import React, { useRef } from "react";
import {
  Settings,
  Users,
  ShieldCheck,
  TrendingUp,
  Code2,
  Smartphone,
  Cloud,
  Headset,
  CheckCircle2,
  Rocket,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
// Adjust this path to wherever your shared Navbar component actually lives.
import Navbar from "../components/Navbar";
import "../style/SolutionAndFeatures.css";

const FEATURES = [
  {
    icon: Settings,
    title: "Seamless Automation",
    description:
      "Streamline your workflows with advanced automation tools designed to save time and reduce manual effort.",
  },
  {
    icon: Users,
    title: "Collaboration Made Easy",
    description:
      "Empower your team with real-time communication, shared dashboards, and better decision-making tools.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Protect your business data with multi-layer encryption, access controls, and compliance standards.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "Gain powerful insights with interactive reports and AI-powered analytics for smarter strategies.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Clean APIs, SDKs, and integrations for rapid customization and scalability.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Access your business insights on the go with our responsive mobile-first design.",
  },
  {
    icon: Cloud,
    title: "Cloud Powered",
    description:
      "Secure cloud infrastructure ensures uptime, scalability, and performance.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Our team is available 24/7 to help you succeed at every step of your journey.",
  },
];

const HIGHLIGHTS = [
  { icon: CheckCircle2, label: "Instant Account Setup" },
  { icon: Rocket, label: "Boost Your Transactions" },
  { icon: ShieldCheck, label: "Enterprise-Grade Security" },
];

export default function SolutionAndFeatures() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".kp-card");
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="kp-page">
      <Navbar />

      {/* Features section */}
      <section className="kp-features">
        <h1 className="kp-features-heading">
          Why Choose <span className="kp-accent">Kubero Pays ERP?</span>
        </h1>
        <p className="kp-features-subheading">
          We always strive to understand our customers' expectations and exceed
          them. By listening, innovating, and improving, we ensure seamless
          experiences and reliable solutions. Your satisfaction is our priority.
        </p>

        <div className="kp-carousel">
          <div className="kp-track" ref={trackRef}>
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <article className="kp-card" key={title}>
                <div className="kp-card-icon">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <h3 className="kp-card-title">{title}</h3>
                <p className="kp-card-desc">{description}</p>
              </article>
            ))}
          </div>

          <div className="kp-carousel-controls">
            <button
              type="button"
              className="kp-carousel-btn"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous features"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="kp-carousel-btn"
              onClick={() => scrollByCard(1)}
              aria-label="Next features"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA / signup section */}
      <section className="kp-cta">
        <div className="kp-cta-inner">
          <div className="kp-cta-copy">
            <h2 className="kp-cta-heading">
              Join <span className="kp-accent-light">493+</span> Businesses
              Today!
            </h2>
            <p className="kp-cta-text">
              Scale faster with <strong>Kubero Pays</strong>. Unlock secure,
              seamless, and smart payment solutions designed for modern
              businesses.
            </p>

            <ul className="kp-highlight-list">
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <li className="kp-highlight-item" key={label}>
                  <span className="kp-highlight-icon">
                    <Icon size={18} />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <a href="/signup" className="kp-cta-button">
              <UserPlus size={20} />
              Create Your Account
            </a>
          </div>

          <div className="kp-cta-art">
            <div className="kp-cta-circle">
              <div className="kp-followers-badge">
                <span className="kp-followers-count">167K</span>
                <span className="kp-followers-label">Followers</span>
              </div>
              <svg
                viewBox="0 0 320 320"
                className="kp-illustration"
                aria-hidden="true"
              >
                <circle cx="120" cy="150" r="34" fill="#1e3a8a" />
                <rect x="95" y="188" width="50" height="70" rx="14" fill="#2563eb" />
                <circle cx="190" cy="110" r="30" fill="#1e293b" />
                <rect x="168" y="144" width="44" height="90" rx="14" fill="#1e293b" />
                <circle cx="235" cy="160" r="28" fill="#f2b57a" />
                <rect x="214" y="192" width="42" height="80" rx="12" fill="#3b82f6" />
                <circle cx="80" cy="230" r="8" fill="#60a5fa" />
                <circle cx="260" cy="100" r="8" fill="#60a5fa" />
                <circle cx="150" cy="70" r="6" fill="#93c5fd" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}