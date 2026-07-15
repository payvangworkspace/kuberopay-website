import Navbar from "./Navbar";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      </svg>
    ),
    title: "Our Mission",
    body: "To simplify and accelerate digital payments for every business — delivering transparent pricing, instant setup, and customer-first experiences.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M2.5 10h19" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "What We Do",
    body: "From cards, UPI, and netbanking to wallets, payouts, invoicing, and virtual accounts — we power every payment flow through one unified platform.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Trust & Security",
    body: "Built on enterprise-grade PCI-DSS compliance with advanced risk controls and fraud detection, ensuring maximum security and peace of mind.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M3 19V9M9 19V5M15 19v-7M21 19V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 15l6-5 5 3 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Our Vision",
    body: "To power borderless commerce with intelligent infrastructure, real-time insights, and 99.99% uptime — enabling businesses to grow confidently on a global scale.",
  },
];

function TeamIllustration() {
  return (
    <svg
      viewBox="0 0 600 420"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* central panel / "app surface" — kept as a dark device-screen mockup for contrast */}
      <rect x="190" y="30" width="220" height="380" rx="14" fill="#12233f" stroke="#22385c" strokeWidth="2" />

      {/* grid of tiles on the panel */}
      {[
        [212, 55, "#e0393e"],
        [212, 130, "#c9911f"],
        [285, 55, "#c9a227"],
        [285, 130, "#b37e1a"],
        [212, 205, "#c9911f"],
        [285, 205, "#e0393e"],
      ].map(([x, y, c], i) => (
        <rect key={i} x={x} y={y} width="64" height="64" rx="10" fill={c} opacity="0.85" />
      ))}

      {/* clouds */}
      <g fill="#ddd6cb">
        <ellipse cx="120" cy="90" rx="34" ry="18" />
        <ellipse cx="150" cy="80" rx="24" ry="14" />
        <ellipse cx="470" cy="70" rx="30" ry="16" />
        <ellipse cx="495" cy="60" rx="20" ry="12" />
      </g>

      {/* ladder */}
      <g stroke="#c9a227" strokeWidth="4" strokeLinecap="round">
        <line x1="160" y1="380" x2="185" y2="150" />
        <line x1="190" y1="380" x2="215" y2="150" />
        <line x1="163" y1="330" x2="192" y2="325" />
        <line x1="167" y1="280" x2="196" y2="275" />
        <line x1="171" y1="230" x2="200" y2="225" />
        <line x1="175" y1="180" x2="204" y2="175" />
      </g>

      {/* people (simplified isometric-flat figures) */}
      {[
        [150, 300, "#c9911f"],
        [420, 330, "#e0393e"],
        [450, 260, "#c9a227"],
        [130, 200, "#b37e1a"],
        [480, 180, "#c9911f"],
      ].map(([x, y, c], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle cx="0" cy="0" r="10" fill="#ddd6cb" />
          <rect x="-9" y="10" width="18" height="26" rx="7" fill={c} />
          <rect x="-8" y="36" width="7" height="18" rx="3" fill="#161616" />
          <rect x="1" y="36" width="7" height="18" rx="3" fill="#161616" />
        </g>
      ))}

      {/* device / tablet accent */}
      <rect x="470" y="230" width="42" height="60" rx="6" fill="#12233f" stroke="#c9911f" strokeWidth="2" />
      <line x1="480" y1="270" x2="502" y2="270" stroke="#c9911f" strokeWidth="2" strokeLinecap="round" />

      {/* speech bubble */}
      <g transform="translate(340 150)">
        <rect x="0" y="0" width="34" height="24" rx="6" fill="#b37e1a" />
        <path d="M6 24l0 10 8-10z" fill="#b37e1a" />
      </g>
    </svg>
  );
}

export default function Company() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Navbar />

      {/* spacer + visible partition between the navbar and the page content */}
      <div className="h-6" />
      <div className="h-px w-full bg-[#161616]/10" />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(22,22,22,0.6) 35px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-8 sm:px-12 pt-28 pb-24">
          <h1 className="text-center font-serif text-4xl sm:text-5xl">
            <span className="text-[#161616]">About </span>
            <span className="bg-gradient-to-r from-[#c9911f] to-[#b37e1a] bg-clip-text text-transparent">
              Kubero Pays
            </span>
          </h1>

          <div className="mt-14 max-w-2xl mx-auto rounded-3xl bg-[#f7f6f3] border border-[#161616]/8 p-6 sm:p-10 shadow-xl shadow-black/5">
            <TeamIllustration />
          </div>

          <p className="mt-12 text-center text-lg text-[#161616]/70 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-[#161616]">Kubero Pays</span> is
            a next-generation digital payments platform designed to empower
            businesses of all sizes. We make accepting, routing, and
            reconciling payments seamless with intelligent automation,
            real-time analytics, and unmatched reliability — helping
            businesses scale faster while keeping payments simple, secure,
            and effortless.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl bg-white border border-[#161616]/8 p-8 text-center hover:bg-[#f7f6f3] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="inline-flex text-[#c9911f]">{c.icon}</div>
                <h3 className="mt-5 font-serif text-xl text-[#161616]">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm text-[#161616]/60 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}