import { useState } from "react";

/**
 * Signature element: the "settlement grid" — a quiet lattice of nodes and
 * connecting lines on the brand panel, standing in for a payment network
 * clearing transactions. One node pulses to suggest a transaction moving
 * through the mesh in real time.
 */
function SettlementGrid() {
  const nodes = [
    { x: 60, y: 80 }, { x: 180, y: 40 }, { x: 300, y: 110 },
    { x: 90, y: 200 }, { x: 230, y: 220 }, { x: 340, y: 260 },
    { x: 40, y: 320 }, { x: 190, y: 340 }, { x: 310, y: 380 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 5],
    [3, 4], [3, 6], [4, 7], [5, 8], [6, 7], [7, 8], [4, 5],
  ];

  return (
    <svg
      viewBox="0 0 380 420"
      className="absolute inset-0 w-full h-full opacity-[0.35]"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#4ecdc4"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 4 ? 5 : 3}
          fill="#4ecdc4"
          opacity={i === 4 ? 1 : 0.5}
        >
          {i === 4 && (
            <animate
              attributeName="r"
              values="5;11;5"
              dur="2.4s"
              repeatCount="indefinite"
            />
          )}
          {i === 4 && (
            <animate
              attributeName="opacity"
              values="1;0.15;1"
              dur="2.4s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      ))}
    </svg>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 shrink-0">
      <img src="/Kuberopay_logo.png" alt="Kubero Pays" className="h-12 w-auto" />
    </a>
  );
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Wire this up to your auth endpoint.
    setTimeout(() => setSubmitting(false), 1200);
  }

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2 bg-white">
      {/* Brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#0a1628] px-14 py-12">
        <SettlementGrid />
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#4ecdc4" }}
        />

        <div className="relative z-10">
          <Logo />
        </div>

        <div className="relative z-10 max-w-md">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4ecdc4] uppercase mb-4">
            Settlements, cleared
          </p>
          <h1 className="text-3xl font-semibold text-white leading-snug mb-4">
            Every payment finds its way home.
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Sign in to track transactions, manage virtual accounts, and keep
            your money moving across every channel you support.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6 text-white/40 text-xs">
          <span>© {new Date().getFullYear()} Kubero Pay</span>
          <a href="/privacy-policy" className="hover:text-white/70 transition-colors">
            Privacy
          </a>
          <a href="/terms-and-conditions" className="hover:text-white/70 transition-colors">
            Terms
          </a>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-10 flex justify-center">
            <Logo />
          </div>

          <h2 className="text-2xl font-semibold text-[#0a1628] mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-[#0a1628]/60 mb-8">
            Sign in to your Kubero Pay account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#0a1628] mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#0a1628] placeholder:text-[#0a1628]/30 outline-none transition-colors focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4]/20"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#0a1628]"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs font-medium text-[#0f8f86] hover:text-[#0a1628] transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 pr-11 text-sm text-[#0a1628] placeholder:text-[#0a1628]/30 outline-none transition-colors focus:border-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#0a1628]/40 hover:text-[#0a1628] transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <svg className="w-4.5 h-4.5" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M2 10s2.8-5.5 8-5.5S18 10 18 10s-2.8 5.5-8 5.5S2 10 2 10z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="10" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  ) : (
                    <svg className="w-4.5 h-4.5" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M3 3l14 14M8.3 8.4a2.3 2.3 0 003.3 3.2M6.2 6.3C4 7.6 2 10 2 10s2.8 5.5 8 5.5c1.2 0 2.3-.3 3.2-.7M11.8 4.9c.7.1 1.3.3 1.9.6C18 7 18 10 18 10s-.4.9-1.2 1.9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-black/20 text-[#0f8f86] focus:ring-[#4ecdc4]/40 cursor-pointer"
              />
              <label htmlFor="remember" className="text-sm text-[#0a1628]/70 cursor-pointer">
                Keep me signed in
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 text-sm font-semibold text-[#0a1628] bg-[#4ecdc4] rounded-full shadow-md shadow-[#4ecdc4]/20 hover:bg-[#3dbdb5] hover:shadow-lg hover:shadow-[#4ecdc4]/30 hover:-translate-y-px transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#0a1628]/60">
            Don't have an account?{" "}
            <a href="/signup" className="font-semibold text-[#0f8f86] hover:text-[#0a1628] transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}