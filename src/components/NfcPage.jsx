import React from "react";
import {
  Smartphone,
  ShieldCheck,
  Wifi,
  Zap,
  CreditCard,
  Grid2x2,
} from "lucide-react";
import "../style/NfcPage.css";
// Adjust this path to wherever your shared Navbar component actually lives.
import Navbar from "../components/Navbar";

const FEATURE_CARDS = [
  {
    icon: Smartphone,
    title: "Phone as POS",
    description:
      "Turn a compatible smartphone into a secure point-of-sale — no extra terminal required.",
  },
  {
    icon: ShieldCheck,
    title: "EMV & Tokenization",
    description:
      "EMV contactless flows and tokenized card storage keep data safe and compliant.",
  },
  {
    icon: Wifi,
    title: "Offline Support",
    description:
      "Offline capture with automatic retry and reconciliation when the connection returns.",
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    description:
      "Enable devices and staff in minutes with role-based access and device binding.",
  },
];

const STEPS = [
  {
    number: 1,
    title: "Enter Amount",
    description: "Merchant enters amount in the mobile app.",
  },
  {
    number: 2,
    title: "Customer taps card",
    description: "NFC-enabled debit/credit card is tapped on merchant's phone.",
  },
  {
    number: 3,
    title: "SDK processes securely",
    description: "EMV transaction data is captured and sent to backend/acquirer.",
  },
  {
    number: 4,
    title: "Receipt generated",
    description: "Merchant and customer get instant confirmation.",
  },
];

const CAPABILITY_TAGS = [
  { icon: CreditCard, label: "Contactless EMV" },
  { icon: Grid2x2, label: "QR fallback" },
];

const COMPLIANCE_TAGS = ["PCI DSS Level 1", "EMV Contactless", "Tokenization"];

export default function NfcPage() {
  return (
    <div className="nfc-page">
      <Navbar />

      {/* Hero */}
      <section className="nfc-hero">
        <h1 className="nfc-hero-heading">NFC Payments — Tap &amp; Go</h1>
        <p className="nfc-hero-subheading">
          Accept contactless payments securely and instantly using compatible
          smartphones or terminals. Fast setup, enterprise-grade security, and
          seamless reconciliation.
        </p>
        <div className="nfc-hero-actions">
          <button type="button" className="nfc-btn nfc-btn--cta">
            Get Started
          </button>
          <button type="button" className="nfc-btn nfc-btn--outline">
            Developer Docs
          </button>
        </div>
      </section>

      {/* Feature cards */}
      <section className="nfc-feature-strip">
        <div className="nfc-feature-grid">
          {FEATURE_CARDS.map(({ icon: Icon, title, description }) => (
            <article className="nfc-feature-card" key={title}>
              <div className="nfc-feature-icon">
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <h3 className="nfc-feature-title">{title}</h3>
              <p className="nfc-feature-desc">{description}</p>
            </article>
          ))}
        </div>

        {/* How it works */}
        <div className="nfc-how">
          <h2 className="nfc-how-heading">How it works</h2>
          <ol className="nfc-steps">
            {STEPS.map((step, index) => (
              <li className="nfc-step" key={step.number}>
                <div className="nfc-step-marker-col">
                  <span className="nfc-step-marker">{step.number}</span>
                  {index < STEPS.length - 1 && (
                    <span className="nfc-step-connector" aria-hidden="true" />
                  )}
                </div>
                <div className="nfc-step-content">
                  <h4 className="nfc-step-title">{step.title}</h4>
                  <p className="nfc-step-desc">— {step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tag rows */}
        <div className="nfc-tags-row">
          <div className="nfc-tags-group">
            {CAPABILITY_TAGS.map(({ icon: Icon, label }) => (
              <span className="nfc-tag nfc-tag--icon" key={label}>
                <Icon size={16} />
                {label}
              </span>
            ))}
          </div>
          <div className="nfc-tags-group">
            {COMPLIANCE_TAGS.map((label) => (
              <span className="nfc-tag" key={label}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="nfc-cta-bar">
          <div>
            <h3 className="nfc-cta-bar-title">Ready to accept tap-to-pay?</h3>
            <p className="nfc-cta-bar-text">
              Reduce queue time and increase conversion at checkout.
            </p>
          </div>
          <button type="button" className="nfc-btn nfc-btn--cta nfc-btn--pill">
            See Pricing
          </button>
        </div>
      </section>
    </div>
  );
}
