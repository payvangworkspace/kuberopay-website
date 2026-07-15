import { useState } from "react";
import Navbar from "./Navbar";

/* ---------- design tokens (kept in one place for easy re-theming) ---------- */
const ink = "#0a1628";
const gold = "#c9a227";
const teal = "#4ecdc4";
const paper = "#f6f4ee";

/* ---------- small building blocks ---------- */

function Eyebrow({ children, dark }) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase ${
        dark ? "text-[#4ecdc4]" : "text-[#0f8f86]"
      }`}
    >
      <span className="w-6 h-px bg-current opacity-60" />
      {children}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="border-l border-white/10 pl-5 py-1">
      <div className="font-serif text-3xl sm:text-4xl text-white">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-white/50 max-w-[16ch]">
        {label}
      </div>
    </div>
  );
}

function FeatureRow({ icon, title }) {
  return (
    <div className="flex items-center gap-4 border-t border-[#0a1628]/10 py-4 first:border-t-0">
      <div className="shrink-0 w-9 h-9 rounded-full bg-[#0a1628] text-[#4ecdc4] flex items-center justify-center">
        {icon}
      </div>
      <span className="font-medium text-[#0a1628]">{title}</span>
    </div>
  );
}

function GoldButton({ children, className = "" }) {
  return (
    <button
      className={`px-8 py-3.5 rounded-full bg-[#4ecdc4] text-[#0a1628] text-sm font-semibold
                  shadow-md shadow-[#4ecdc4]/20 hover:bg-[#3dbdb5] hover:-translate-y-px
                  transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = "" }) {
  return (
    <button
      className={`px-8 py-3.5 rounded-full border border-[#0a1628]/20 text-[#0a1628] text-sm font-semibold
                  hover:border-[#0a1628]/40 hover:bg-[#0a1628]/[0.03] transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

function Input({ label, type = "text", textarea, optional }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="block">
      <span className="block text-xs font-mono tracking-wide uppercase text-[#0a1628]/40 mb-2">
        {label}
        {optional && <span className="text-[#0a1628]/25"> · optional</span>}
      </span>
      <Tag
        type={textarea ? undefined : type}
        rows={textarea ? 4 : undefined}
        className="w-full rounded-xl border border-[#0a1628]/15 bg-white px-4 py-3 text-sm text-[#0a1628]
                   placeholder:text-[#0a1628]/30 focus:outline-none focus:ring-2 focus:ring-[#4ecdc4]/50
                   focus:border-[#4ecdc4] transition-colors resize-none"
      />
    </label>
  );
}

/* ---------- icon set (inline, no external icon dependency) ---------- */
const icons = {
  check: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2.5 10h19" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M11 18.5h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path d="M2 11l4-3 4 2 3-2 4 2 5-3M2 11l4 7 4-3M22 11l-5 6-4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* ---------- the two reseller "tracks" — a real content split, not decoration ---------- */
const tracks = {
  agent: {
    label: "Independent Sales Agent",
    heading: "Refer clients. Get paid every month it processes.",
    copy:
      "Send us merchant accounts — new businesses you know, or clients already on your books — and we'll take it from underwriting to go-live. You earn a residual for as long as the account keeps processing.",
    bullets: ["No sign-up cost to join", "98% merchant approval rate", "Dedicated onboarding support"],
    cta: "Become an Agent",
  },
  developer: {
    label: "Web Developer",
    heading: "Ship checkout your clients don't have to think about.",
    copy:
      "Recommend Kubero Payment inside the sites you're already building. One API-hosted gateway, global card acceptance, and a revenue share on every account you bring in.",
    bullets: ["Seamless API integration", "24/7 fraud & chargeback protection", "Loyalty pricing for high-volume devs"],
    cta: "Explore the Integration",
  },
};

/* ================================================================== */

export default function MerchantServiceReseller() {
  const [track, setTrack] = useState("agent");
  const active = tracks[track];

  return (
    <div className="font-sans text-[#0a1628] bg-white">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative pt-20 bg-[#0a1628] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(255,255,255,0.6) 35px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-8 py-24 lg:py-32">
          <Eyebrow dark>Merchant Service Reseller Program</Eyebrow>
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white max-w-3xl">
            Your book of business is worth more than one commission.
          </h1>
          <p className="mt-7 text-lg text-white/60 max-w-xl leading-relaxed">
            Partner with Kubero Payment and turn every merchant referral into a
            payment you collect month after month — not a one-time finder's fee.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GoldButton>Get Started</GoldButton>
            <button className="text-sm font-medium text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/20">
              See how residuals work ↓
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
            <StatCard value="98%" label="Merchant approval rate" />
            <StatCard value="$0" label="Monthly minimums or dues" />
            <StatCard value="24/7" label="Fraud & chargeback cover" />
            <StatCard value="∞" label="Residual runs while they process" />
          </div>
        </div>
      </section>

      {/* ============ TRACK SELECTOR — the signature interactive element ============ */}
      <section className="bg-[#f6f4ee]">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-8 py-24">
          <Eyebrow>Two ways to partner</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#0a1628] max-w-xl">
            Pick the path that matches how you already work.
          </h2>

          <div className="mt-10 inline-flex rounded-full border border-[#0a1628]/15 bg-white p-1">
            {Object.entries(tracks).map(([key, t]) => (
              <button
                key={key}
                onClick={() => setTrack(key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  track === key
                    ? "bg-[#0a1628] text-white"
                    : "text-[#0a1628]/50 hover:text-[#0a1628]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0a1628] leading-snug">
                {active.heading}
              </h3>
              <p className="mt-5 text-[#0a1628]/60 leading-relaxed max-w-lg">
                {active.copy}
              </p>
              <ul className="mt-8 space-y-3">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-[#0a1628]/80">
                    <span className="w-5 h-5 rounded-full bg-[#4ecdc4]/15 text-[#0f8f86] flex items-center justify-center shrink-0">
                      {icons.check}
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <GoldButton className="mt-9">{active.cta}</GoldButton>
            </div>

            {/* mock "commission ledger" card — grounded in the payments/residual subject matter */}
            <div className="rounded-2xl bg-[#0a1628] p-8 shadow-2xl shadow-[#0a1628]/20">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#4ecdc4]">
                <span className="w-2 h-2 rounded-full bg-[#4ecdc4]" />
                Sample residual statement
              </div>
              <div className="mt-6 space-y-4">
                {[
                  ["Merchant referred", "Coastal Supply Co."],
                  ["Monthly volume", "$48,200"],
                  ["Your revenue share", "0.35%"],
                  ["Est. monthly residual", "$168.70"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-sm text-white/45">{k}</span>
                    <span className="text-sm font-medium text-white">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/35 leading-relaxed">
                Illustrative only — actual residuals scale with each merchant's
                real processing volume, for as long as the account stays active.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELIABLE PAYOUTS ============ */}
      <section className="bg-[#0a1628] relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(255,255,255,0.6) 35px)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow dark>Reliable payouts</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-white leading-snug">
              As long as they process, you get paid.
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed max-w-md">
              Resellers earn percentage-based residuals across our full range
              of credit card processing services. There's no cliff, no
              expiration — just an ongoing share of what your merchants run
              through their accounts.
            </p>
            <p className="mt-5 text-sm text-[#4ecdc4] font-medium">
              ✳ Ask about our current reseller loyalty offer
            </p>
            <GoldButton className="mt-8">Connect With Us</GoldButton>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">
              Payout cadence
            </div>
            <div className="mt-6 space-y-5">
              {[
                { d: "Merchant goes live", t: "Day 0" },
                { d: "First processing cycle closes", t: "Day 30" },
                { d: "Residual calculated & paid", t: "Day 35" },
                { d: "Repeats automatically", t: "Every month" },
              ].map((row, i) => (
                <div key={row.d} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#4ecdc4] shrink-0" />
                  <span className="text-sm text-white/80 flex-1">{row.d}</span>
                  <span className="text-xs font-mono text-white/40">{row.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PARTNERSHIP DETAIL ============ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Partner with Kubero Payment</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#0a1628] leading-snug">
              Merchant Services Reseller Partnership
            </h2>
            <p className="mt-6 text-[#0a1628]/60 leading-relaxed">
              Kuber Payment is a merchant services provider built for easy
              integration — an API-hosted gateway, a quick sign-up process,
              and no monthly minimums or dues standing between your referral
              and their first transaction.
            </p>
            <p className="mt-4 text-[#0a1628]/60 leading-relaxed">
              Resellers treat our gateway as the standard they recommend, and
              partnering unlocks a no-pressure relationship: send merchant
              referrals whenever they come up, and loyalty rewards higher
              percentages the more you refer.
            </p>
          </div>

          <div>
            {[
              [icons.check, "98% merchant account approval rate"],
              [icons.bolt, "Quick, seamless integrations"],
              [icons.card, "Flexible payment solutions"],
              [icons.globe, "Multi-currency payment processing"],
            ].map(([icon, title]) => (
              <FeatureRow key={title} icon={icon} title={title} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WEB DEVELOPER PARTNERSHIP ============ */}
      <section className="bg-[#f6f4ee]">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>For builders</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#0a1628] leading-snug">
              Web Developer Partnership
            </h2>
            <p className="mt-6 text-[#0a1628]/60 leading-relaxed">
              You build the storefronts. Recommending Kubero Payment means the
              clients you hand off to can accept payments securely from
              customers anywhere in the world — without you fielding support
              tickets about it later.
            </p>
            <p className="mt-4 text-[#0a1628]/60 leading-relaxed">
              Every integration ships with 24/7 security monitoring,
              chargeback mitigation, and fraud protection baked in.
            </p>
            <GhostButton className="mt-8">Explore Partnership</GhostButton>
          </div>

          <div>
            {[
              [icons.globe, "Global payment acceptance"],
              [icons.lock, "Industry-leading security"],
              [icons.card, "Alternative payment methods"],
              [icons.phone, "Mobile-friendly checkout"],
            ].map(([icon, title]) => (
              <FeatureRow key={title} icon={icon} title={title} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ SIGN UP FORM ============ */}
      <section className="bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-8 py-24 text-center">
          <Eyebrow dark>Ready when you are</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl text-white">
            Sign up with Kubero Payment
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto">
            Join the leading payment processing partner. Seamless, reliable,
            and easy to integrate — for you and everyone you refer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-8 pb-24">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-2xl p-8 sm:p-10 grid sm:grid-cols-2 gap-6"
          >
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Company Name" />
            <Input label="Website" optional />
            <Input label="Email Address" type="email" />
            <Input label="Phone Number" type="tel" />
            <Input label="Country" />
            <Input label="Annual Processing Volume" optional />
            <div className="sm:col-span-2">
              <Input label="How Did You Hear About Us?" optional textarea />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#4ecdc4] text-[#0a1628] text-sm font-bold tracking-wide
                           hover:bg-[#3dbdb5] transition-colors cursor-pointer"
              >
                SIGN UP NOW
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
