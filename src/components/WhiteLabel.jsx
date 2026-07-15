import {
  FiHome,
  FiRefreshCw,
  FiEdit3,
  FiShare2,
  FiShield,
  FiBriefcase,
  FiShoppingBag,
} from "react-icons/fi";
import Navbar from "./Navbar";
import "../style/WhiteLabel.css";

const benefits = [
  { label: "Scale your offering:", text: "Add new services instantly." },
  { label: "Scale your costs:", text: "No IT setup or development overhead." },
  { label: "Boost revenue:", text: "Adopt a proven ROI-driven model." },
  { label: "Grow reputation:", text: 'Be the go-to "local expert."' },
  { label: "Improve retention:", text: "More services = more loyal clients." },
  {
    label: "Focus on your brand:",
    text: "We handle fulfillment, you handle growth.",
  },
];

function BuildingCard({ icon, label, sublabel, color, className = "" }) {
  return (
    <div className={`absolute ${className}`}>
      <div
        className="wl-float w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-xl flex items-center justify-center"
        style={{ background: color }}
      >
        {icon}
      </div>
      <div className="mt-3 text-center max-w-[160px] mx-auto">
        <p className="text-sm font-bold text-[#0a1628] leading-tight">
          {label}
        </p>
        {sublabel && (
          <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
            {sublabel}
          </p>
        )}
      </div>
    </div>
  );
}

function ConnectorBadge({ icon, color, className = "" }) {
  return (
    <div
      className={`wl-float-delay absolute w-9 h-9 rounded-full shadow-lg flex items-center justify-center z-20 ${className}`}
      style={{ background: color }}
    >
      {icon}
    </div>
  );
}

function WhiteLabelIllustration() {
  return (
    <div className="relative bg-white rounded-[28px] shadow-2xl border border-slate-100 p-8 md:p-12 min-h-[420px] overflow-hidden">

      {/* Dashed connector path */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 380"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M80 70 L200 190 L320 310"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>

      <BuildingCard
        icon={<FiHome size={30} className="text-white" />}
        label="White-Label Provider"
        sublabel="(Company A) — white label service supplier"
        color="linear-gradient(135deg,#4c5f8a,#2f3d5e)"
        className="left-[4%] top-[4%] w-[38%]"
      />

      <BuildingCard
        icon={<FiBriefcase size={30} className="text-white" />}
        label="Agency"
        sublabel="(Company B) — reseller agency adds their branding"
        color="linear-gradient(135deg,#5b8ac2,#3c6494)"
        className="left-[32%] top-[42%] w-[38%]"
      />

      <BuildingCard
        icon={<FiShoppingBag size={30} className="text-white" />}
        label="Local Business"
        sublabel="buys digital solution"
        color="linear-gradient(135deg,#6b4fc2,#4a34a0)"
        className="left-[58%] top-[78%] w-[38%]"
      />

      <ConnectorBadge
        icon={<FiRefreshCw size={16} className="text-white" />}
        color="#3b82f6"
        className="left-[30%] top-[24%]"
      />
      <ConnectorBadge
        icon={<FiEdit3 size={16} className="text-white" />}
        color="#22c55e"
        className="left-[40%] top-[32%]"
      />
      <ConnectorBadge
        icon={<FiShare2 size={16} className="text-white" />}
        color="#a855f7"
        className="left-[52%] top-[58%]"
      />
      <ConnectorBadge
        icon={<FiShield size={16} className="text-white" />}
        color="#eab308"
        className="left-[62%] top-[66%]"
      />
    </div>
  );
}

export default function WhiteLabel() {
  return (
    <>
      <Navbar />

      <section className="white-label-section bg-white pt-40 pb-24 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Left content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a2c8f]">
              Branding Customization
            </h1>

            <div className="mt-8 space-y-6">
              <p className="text-slate-700 text-lg leading-relaxed">
                White-label technology is a ready-made licensed software
                developed by one company and rebranded by another to make it
                appear as their own. In today's competitive environment,
                white-label solutions allow businesses to launch products
                quickly, gain recognition, and scale without heavy upfront
                investment.
              </p>

              <p className="text-slate-700 text-lg leading-relaxed">
                <strong className="font-semibold text-[#0a1628]">
                  Kubero Pays
                </strong>{" "}
                offers white-label solutions that allow easy customization of
                checkout look-and-feel with your business logo and brand
                color. Focus on your customers while we handle the
                technology.
              </p>
            </div>

            <h2 className="mt-10 text-3xl font-bold text-[#1a2c8f]">
              How does it work?
            </h2>

            <p className="mt-4 text-slate-700 text-lg leading-relaxed">
              Our vendor platform is plug-and-play — you add your company's
              name, logo, icons, URLs, emails, and branding elements to align
              it with your corporate identity. Once customized, you can sell
              and manage the product as your own, scaling faster and more
              securely.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-[#1a2c8f]">
              Benefits of White-Label Solutions
            </h2>

            <ul className="mt-5 space-y-3">
              {benefits.map((item) => (
                <li key={item.label} className="text-slate-700 text-lg leading-relaxed">
                  <strong className="font-semibold text-[#0a1628]">
                    {item.label}
                  </strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-slate-700 text-lg leading-relaxed font-semibold">
              White-label opportunities help you grow your brand, reputation,
              offerings, and revenue exponentially.
            </p>

            <button className="mt-10 px-8 py-4 rounded-lg bg-[#1a2c8f] text-white font-semibold text-base shadow-lg shadow-[#1a2c8f]/25 hover:bg-[#152574] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              Contact Us Now
            </button>
          </div>

          {/* Right illustration */}
          <div className="lg:sticky lg:top-32">
            <WhiteLabelIllustration />
          </div>

        </div>
      </section>
    </>
  );
}
