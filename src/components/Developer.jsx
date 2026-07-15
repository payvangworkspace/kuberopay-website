import Navbar from "./Navbar";

/* ---------- lightweight platform glyphs (generic, not brand logos) ---------- */
const platforms = [
  {
    name: "iOS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M16.5 1c.1 1.1-.3 2.2-1 3-.7.8-1.9 1.5-3 1.4-.1-1.1.4-2.2 1-3 .8-.8 2-1.4 3-1.4zM20.8 17c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.3-4 3.3-1.5 0-1.9-1-3.9-1s-2.5 1-4 1c-1.7 0-2.9-1.7-3.9-3.1-2.7-3.9-3-8.4-1.3-10.9 1.2-1.8 3-2.8 4.8-2.8 1.8 0 2.9 1 4.4 1s2.3-1 4.4-1c1.6 0 3.3.9 4.5 2.4-3.9 2.2-3.3 7.9.5 8.3z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#3d7bbf" d="M11.9 1.5c-4.7 0-4.4 2-4.4 2v2.1h4.5v.6H5.6S3 5.9 3 10.7s2.3 4.6 2.3 4.6h1.4v-2.4s-.1-2.3 2.3-2.3h4.4s2.2 0 2.2-2.1V3.7s.3-2.2-3.7-2.2z" />
        <circle cx="9.7" cy="3.4" r="0.7" fill="#fff" />
        <path fill="#f2c13d" d="M12.1 22.5c4.7 0 4.4-2 4.4-2v-2.1h-4.5v-.6h6.4s2.6.3 2.6-4.5-2.3-4.6-2.3-4.6h-1.4v2.4s.1 2.3-2.3 2.3H10.6s-2.2 0-2.2 2.1v3.5s-.3 2.2 3.7 2.2z" />
        <circle cx="14.3" cy="20.6" r="0.7" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Ruby",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#cc342d" d="M19.5 12.3L12 22 3 15.8l1.7-9.4L12 2l9 4.2z" />
        <path fill="#e0554f" d="M12 2l4 3.6-9.4 2-2.9 8.2L3 15.8z" />
        <path fill="#f2a3a1" d="M6.6 7.6l9.4-2 3.5 6.7-7.5 8.2z" />
      </svg>
    ),
  },
  {
    name: "Webhooks",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="6" cy="7" r="2.4" stroke="#3d7bbf" strokeWidth="1.8" />
        <circle cx="6" cy="17" r="2.4" stroke="#3d7bbf" strokeWidth="1.8" />
        <circle cx="18" cy="12" r="2.4" stroke="#3d7bbf" strokeWidth="1.8" />
        <path d="M8.2 8.2L15.8 11M8.2 15.8L15.8 13" stroke="#3d7bbf" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Javascript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#2f6fd4" />
        <text x="12" y="16.5" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">JS</text>
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M9 17c4 1.5 8 1 10-1" stroke="#3d7bbf" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.5 13c-3 1-4 3 1 4" stroke="#e0393e" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 3c-4 3 3 5-1 9" stroke="#3d7bbf" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 20c5 1.5 10 .8 12-1" stroke="#e0393e" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Android",
    icon: (
      <svg viewBox="0 0 24 24" fill="#78c257" className="w-8 h-8">
        <path d="M6.5 9v6.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9h-11z" />
        <rect x="4.5" y="9" width="2" height="6.5" rx="1" />
        <rect x="17.5" y="9" width="2" height="6.5" rx="1" />
        <rect x="10.7" y="17" width="2" height="4" rx="1" />
        <rect x="13.3" y="17" width="2" height="4" rx="1" />
        <path d="M7 8a5 5 0 0 1 10 0" stroke="#78c257" strokeWidth="1.6" fill="none" />
        <circle cx="9.3" cy="6.3" r="0.7" fill="#fff" />
        <circle cx="14.7" cy="6.3" r="0.7" fill="#fff" />
        <line x1="8.3" y1="3.3" x2="9.6" y2="4.9" stroke="#78c257" strokeWidth="1" />
        <line x1="15.7" y1="3.3" x2="14.4" y2="4.9" stroke="#78c257" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="none" stroke="#8892bf" strokeWidth="1.6" />
        <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="700" fill="#8892bf" fontFamily="sans-serif">php</text>
      </svg>
    ),
  },
];

function InlineHighlight({ children }) {
  return <span className="text-[#b37e1a] font-semibold">{children}</span>;
}

export default function Developer() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />

      {/* ============ SEAMLESS INTEGRATION ============ */}
      <section className="relative bg-gradient-to-b from-white to-[#f7f6f3] pt-20 pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <div className="rounded-3xl bg-white border border-[#161616]/8 shadow-xl shadow-black/10 p-10 sm:p-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#161616]">
                Seamless Integration
              </h1>

              <p className="mt-7 text-[#161616]/70 text-lg leading-relaxed">
                Integrating payments with{" "}
                <InlineHighlight>Kubero Pays</InlineHighlight> is
                effortless. Use SDKs, REST APIs, and plugins across major
                platforms with{" "}
                <InlineHighlight>real-time performance</InlineHighlight>.
              </p>

              <h2 className="mt-9 font-serif text-2xl text-[#161616]">
                Integrate easily with:
              </h2>
              <ul className="mt-4 space-y-2.5 text-[#161616]/75">
                {[
                  "Client APIs for PHP, Python, JAVA, Node.js, .NET",
                  "Web Checkout: JavaScript",
                  "Mobile SDKs: iOS / Android",
                  "Plugins: Prestashop, OpenCart, WooCommerce, Magento",
                  "Hybrid Apps: Cordova",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#161616]/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-9 text-[#161616]/70 leading-relaxed">
                With detailed documentation, reference apps, and 24/7
                support, you can launch payments in minutes —{" "}
                <InlineHighlight>not weeks</InlineHighlight>.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl bg-[#f7f6f3] hover:bg-[#efe0d8] transition-colors p-6 flex flex-col items-center justify-center gap-3 aspect-square"
                >
                  {p.icon}
                  <span className="font-semibold text-[#161616] text-sm">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ JOIN 493+ BUSINESSES ============ */}
      <section className="bg-[#f7f6f3] relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(22,22,22,0.6) 35px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 sm:px-12 py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              <span className="text-[#161616]">Join </span>
              <span className="bg-gradient-to-r from-[#c9911f] to-[#b37e1a] bg-clip-text text-transparent">
                493+ Businesses
              </span>
              <span className="text-[#161616]"> Today!</span>
            </h2>

            <p className="mt-6 text-[#161616]/60 text-lg leading-relaxed max-w-lg">
              Scale faster with <span className="text-[#b37e1a] font-semibold">Kubero Pays</span>.
              Unlock secure, seamless, and smart payment solutions designed
              for modern businesses.
            </p>

            <div className="mt-9 space-y-4">
              {[
                { icon: "✓", label: "Instant Account Setup", tone: "bg-[#e0393e]/15 text-[#e0393e]" },
                { icon: "🚀", label: "Boost Your Transactions", tone: "bg-[#e0393e]/15 text-[#e0393e]" },
                { icon: "🛡", label: "Enterprise-Grade Security", tone: "bg-[#e0393e]/15 text-[#e0393e]" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-4 rounded-xl bg-white border border-[#161616]/8 px-6 py-4"
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${f.tone}`}
                  >
                    {f.icon}
                  </span>
                  <span className="font-semibold text-[#161616]">{f.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/signup"
              className="mt-9 inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[#161616]
                         bg-gradient-to-r from-[#c9911f] to-[#b37e1a]
                         hover:brightness-105 hover:-translate-y-px transition-all duration-200
                         shadow-lg shadow-[#c9911f]/25 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
                <path d="M3 20c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 8v6M15 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Create Your Account
            </a>
          </div>

          {/* illustration */}
          <div className="flex justify-center">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-white shadow-xl shadow-black/10 overflow-hidden">
              <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full">
                <ellipse cx="120" cy="90" rx="30" ry="16" fill="#ddd6cb" />
                <ellipse cx="330" cy="80" rx="26" ry="14" fill="#ddd6cb" />
                <rect x="20" y="330" width="380" height="70" fill="#efe6db" />
                <rect x="40" y="280" width="24" height="120" fill="#e0d5c0" />
                <rect x="360" y="260" width="24" height="140" fill="#e0d5c0" />

                {/* person laptop, seated */}
                <g transform="translate(150,300)">
                  <circle cx="0" cy="-40" r="16" fill="#2b2f3a" />
                  <rect x="-16" y="-24" width="32" height="46" rx="10" fill="#c9911f" />
                  <rect x="-24" y="18" width="48" height="10" rx="4" fill="#2b2f3a" />
                </g>

                {/* person standing w/ tablet */}
                <g transform="translate(230,230)">
                  <circle cx="0" cy="-60" r="17" fill="#c98a5c" />
                  <rect x="-17" y="-43" width="34" height="70" rx="12" fill="#2b2f3a" />
                  <rect x="-19" y="27" width="16" height="60" rx="6" fill="#2b2f3a" />
                  <rect x="3" y="27" width="16" height="60" rx="6" fill="#2b2f3a" />
                </g>

                {/* woman standing w/ phone */}
                <g transform="translate(300,270)">
                  <circle cx="0" cy="-55" r="15" fill="#3a2a20" />
                  <path d="M-15 -40 q15 -12 30 0 l3 60 q-18 12 -36 0 z" fill="#c9911f" />
                  <rect x="-14" y="20" width="12" height="55" rx="5" fill="#c98a5c" />
                  <rect x="2" y="20" width="12" height="55" rx="5" fill="#c98a5c" />
                </g>

                {/* stat card */}
                <g transform="translate(70,140)">
                  <rect width="130" height="70" rx="12" fill="#f5ecd8" />
                  <text x="16" y="30" fontSize="22" fontWeight="800" fill="#b37e1a" fontFamily="sans-serif">167K</text>
                  <text x="16" y="52" fontSize="13" fill="#8a7f72" fontFamily="sans-serif">Followers</text>
                </g>

                {/* floating chat bubbles */}
                {[
                  [70, 90],
                  [340, 130],
                  [110, 250],
                  [370, 200],
                ].map(([x, y], i) => (
                  <g key={i} transform={`translate(${x} ${y})`}>
                    <rect width="26" height="20" rx="6" fill="#c9911f" />
                    <path d="M6 20l0 8 8-8z" fill="#c9911f" />
                    <path d="M6 8h14M6 13h9" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}