import Navbar from "./Navbar";

export default function Pricing() {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative flex-1 overflow-hidden">
        {/* soft ambient glow, consistent with the light sections elsewhere on the site */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 30%, rgba(201,145,31,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(22,22,22,0.6) 35px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-8 sm:px-12 pt-28 pb-24 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-[#161616]">
            Simple, Transparent Pricing{" "}
            <span className="bg-gradient-to-r from-[#c9911f] to-[#b37e1a] bg-clip-text text-transparent">
              for India
            </span>{" "}
            <span className="align-middle">🇮🇳</span>
          </h1>

          <p className="mt-7 text-lg text-[#161616]/60 max-w-2xl mx-auto leading-relaxed">
            Built for Indian businesses with Interac&reg; support, data
            residency, and predictable billing. Switch anytime — no hidden
            fees.
          </p>

          {/* contact card */}
          <div className="mt-14 max-w-xl mx-auto rounded-2xl border border-[#161616]/10 bg-[#f7f6f3] px-10 py-12 shadow-xl shadow-black/5">
            <p className="text-[#161616]/85 text-lg">
              For detailed pricing, please contact our Sales team.
            </p>

            <button
              className="mt-8 w-full py-4 rounded-xl text-[#161616] font-bold text-base
                         bg-gradient-to-r from-[#c9911f] to-[#b37e1a]
                         hover:brightness-105 hover:-translate-y-px
                         shadow-lg shadow-[#c9911f]/20
                         transition-all duration-200 cursor-pointer"
            >
              Contact Sales
            </button>
          </div>

          <p className="mt-10 text-xs text-[#161616]/35 max-w-xl mx-auto leading-relaxed">
            Prices shown in Indian Ruppees (INR). Taxes may apply.
            Interac&reg; is a registered trademark of Interac Corp. Used
            under license.
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-[#161616]/5 bg-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 py-10 flex items-center">
          <div className="flex items-center gap-2.5">

          </div>
        </div>
      </footer>
    </div>
  );
}