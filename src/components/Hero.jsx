function ChartDecorations() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] pointer-events-none hidden md:block" aria-hidden="true">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent z-10" />

        <svg className="absolute right-[5%] top-[15%] w-[70%] h-[70%] opacity-95" viewBox="0 0 500 400" fill="none">
          <rect x="80" y="60" width="340" height="220" rx="12" fill="#fdf6ea" stroke="#c9911f" strokeWidth="1" opacity="0.8" />

          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={120 + i * 55}
              y={200 - [80, 120, 90, 140, 100][i]}
              width="35"
              height={[80, 120, 90, 140, 100][i]}
              rx="4"
              fill="#9c1c42"
              opacity={0.35 + i * 0.12}
            />
          ))}

          <polyline
            points="120,180 175,140 230,160 285,100 340,120 395,80"
            stroke="#c9911f"
            strokeWidth="2.5"
            fill="none"
            opacity="0.9"
          />
          {[120, 175, 230, 285, 340, 395].map((x, i) => (
            <circle key={i} cx={x} cy={[180, 140, 160, 100, 120, 80][i]} r="4" fill="#c9911f" />
          ))}

          <rect x="100" y="300" width="80" height="50" rx="6" fill="#fff" stroke="#e7d3ab" strokeWidth="1" />
          <rect x="112" y="312" width="30" height="5" rx="2.5" fill="#9c1c42" opacity="0.7" />
          <rect x="112" y="323" width="50" height="4" rx="2" fill="#0a1628" opacity="0.15" />
          <rect x="112" y="333" width="40" height="4" rx="2" fill="#0a1628" opacity="0.1" />

          <rect x="200" y="310" width="80" height="40" rx="6" fill="#fff" stroke="#e7d3ab" strokeWidth="1" />
          <circle cx="222" cy="330" r="10" fill="none" stroke="#c9911f" strokeWidth="2" opacity="0.8" />
          <path d="M217 330 L221 334 L228 325" stroke="#c9911f" strokeWidth="2" fill="none" />
          <rect x="240" y="325" width="30" height="4" rx="2" fill="#0a1628" opacity="0.15" />

          <rect x="300" y="295" width="80" height="55" rx="6" fill="#fff" stroke="#e7d3ab" strokeWidth="1" />
          <text x="312" y="315" fill="#9c1c42" fontSize="9" opacity="0.8" fontFamily="sans-serif">Growth</text>
          <text x="312" y="332" fill="#0a1628" fontSize="14" opacity="0.9" fontFamily="sans-serif" fontWeight="600">+24%</text>

          <circle cx="420" cy="100" r="30" fill="none" stroke="#c9911f" strokeWidth="1.5" opacity="0.6" />
          <path d="M420 85 L420 100 L432 108" stroke="#c9911f" strokeWidth="1.5" opacity="0.7" />

          <text x="130" y="90" fill="#9c1c42" fontSize="11" opacity="0.8" fontFamily="sans-serif">Revenue</text>
          <text x="130" y="105" fill="#0a1628" fontSize="18" opacity="0.9" fontFamily="sans-serif" fontWeight="600">$2.4M</text>
        </svg>

        <div className="absolute right-[20%] bottom-[6%] w-48 h-32 rounded-xl bg-white border border-[#e7d3ab] shadow-2xl shadow-black/10 transform rotate-[-8deg]">
          <div className="p-3 space-y-2">
            <div className="h-2 w-16 bg-[#9c1c42]/50 rounded" />
            <div className="h-2 w-24 bg-[#0a1628]/10 rounded" />
            <div className="flex gap-1 items-end h-12 pt-2">
              {[40, 65, 50, 80, 55].map((h, i) => (
                <div key={i} className="flex-1 bg-[#c9911f] rounded-sm opacity-80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrustBadge() {
  return (
    <div className="hidden xl:flex items-center gap-3 absolute left-[62%] bottom-[14%] pointer-events-none opacity-95" aria-hidden="true">
      <div className="w-56 rounded-2xl bg-white border border-black/5 shadow-2xl shadow-black/10 px-5 py-4 transform rotate-[4deg]">
        <div className="flex items-center gap-2">
          <div className="flex text-[#c9911f] text-xs">★★★★★</div>
          <span className="text-[#0a1628]/50 text-xs">4.9/5</span>
        </div>
        <p className="mt-2 text-[#0a1628] text-sm font-semibold leading-snug">
          Trusted by 50,000+ merchants
        </p>
      </div>
    </div>
  )
}

function StatsStrip() {
  const stats = [
    { value: "10M+", label: "Transactions Processed" },
    { value: "50K+", label: "Merchants Onboarded" },
    { value: "99.9%", label: "Platform Uptime" },
  ]

  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold text-[#0a1628]">{stat.value}</p>
          <p className="text-xs text-[#0a1628]/50 mt-1 uppercase tracking-wide">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6ea] via-white to-white" />

      <TrustBadge />
      <ChartDecorations />

      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 pt-24 pb-16 w-full">
        <div className="max-w-xl mx-auto lg:mx-0 lg:ml-4 xl:ml-8 flex flex-col gap-10">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] text-[#0a1628] tracking-tight">
              Powering Payments
            </h1>

            <p className="text-base sm:text-lg text-[#0a1628]/70 leading-relaxed max-w-md">
              From start-ups to large enterprises and everything in between, we&apos;ve got the
              end-to-end commerce solutions, data-driven insights, and expert local support
              businesses of all sizes count on.
            </p>
          </div>

          <button className="self-start inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-[#9c1c42] rounded-full shadow-lg shadow-[#9c1c42]/25 hover:bg-[#7f1636] hover:shadow-xl hover:shadow-[#9c1c42]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
            Explore solutions
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <StatsStrip />
        </div>
      </div>
    </section>
  )
}