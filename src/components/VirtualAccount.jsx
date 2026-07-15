import {
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
  FiCreditCard,
  FiHome,
  FiArrowRight,
  FiArrowLeft,
  FiCheckCircle,
  FiBarChart2,
  FiMessageSquare,
  FiZap,
  FiCode,
} from "react-icons/fi";
import Navbar from "./Navbar";
import "../style/VirtualAccount.css";

const benefits = [
  {
    text: "Ideal for corporates with multiple banking relationships and complex accounting structures.",
  },
  {
    text: "Simplifies cash and liquidity management, supports inter-company loans, and improves STP (straight-through processing) in reconciliation.",
  },
  {
    pre: "A ",
    bold: "Virtual Account Management (VAM)",
    post: " platform enables creation, management, and monitoring of virtual accounts effectively.",
  },
  {
    pre: "We provide a self-servicing ",
    bold: "VAM engine",
    post: ", a unified dashboard view, advanced reporting modules, and integrated payments management.",
  },
  {
    text: "Helps corporates gain clear insights while banks manage client relationships efficiently.",
  },
];

function BenefitsIllustration() {
  return (
    <div className="relative bg-gradient-to-br from-[#f6f8e8] to-[#eef1e0] rounded-[28px] p-8 md:p-10 min-h-[380px] flex items-center justify-center overflow-hidden">

      {/* Chart panel */}
      <div className="relative z-10 w-40 h-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-3 -translate-y-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e0603c]" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="flex-1 flex items-end justify-between gap-1.5 px-1">
          {[35, 60, 45, 80, 55, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-[#1a3a8f] rounded-t-sm opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="h-1.5 w-3/4 bg-slate-100 rounded" />
        <div className="h-1.5 w-1/2 bg-slate-100 rounded" />
      </div>

      {/* Person left (orange) */}
      <div className="va-float absolute left-4 md:left-8 bottom-8 z-20 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#f6b89a]" />
        <div className="w-16 h-20 rounded-t-2xl bg-[#e0603c] mt-0.5" />
      </div>

      {/* Person middle (navy) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 flex flex-col items-center">
        <div className="w-11 h-11 rounded-full bg-[#f6c9a0]" />
        <div className="w-18 h-24 rounded-t-2xl bg-[#1a3a8f] mt-0.5" />
      </div>

      {/* Person right (slate) */}
      <div className="va-float-delay absolute right-4 md:right-8 bottom-8 z-20 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#e3c7a8]" />
        <div className="w-16 h-20 rounded-t-2xl bg-[#334155] mt-0.5" />
      </div>

      {/* Floating icon badges */}
      <div className="va-float absolute left-6 top-10 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
        <FiCheckCircle size={18} className="text-[#1a3a8f]" />
      </div>

      <div className="va-float-delay absolute right-8 top-6 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
        <FiMessageSquare size={16} className="text-[#e0603c]" />
      </div>

      <div className="va-float absolute right-4 bottom-24 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
        <FiZap size={16} className="text-[#f4b400]" />
      </div>

      <div className="va-float-delay absolute left-2 bottom-32 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hidden md:flex">
        <FiCode size={16} className="text-[#1a3a8f]" />
      </div>
    </div>
  );
}

function FlowBox({ icon, title, subtitle, className = "" }) {
  return (
    <div
      className={`absolute bg-white border-2 border-[#0a1628] rounded-lg flex flex-col items-center justify-center text-center px-3 gap-2 ${className}`}
    >
      <span className="text-base md:text-xl font-bold text-[#0a1628] leading-tight">
        {title}
      </span>
      <span className="text-[#e0603c]">{icon}</span>
      {subtitle && (
        <span className="text-base md:text-xl font-bold text-[#0a1628] leading-tight">
          {subtitle}
        </span>
      )}
    </div>
  );
}

function FlowArrow({ direction, label, className = "" }) {
  const Icon = direction === "right" ? FiArrowRight : FiArrowLeft;
  return (
    <div className={`absolute flex flex-col items-center gap-1 ${className}`}>
      <span className="text-xs md:text-sm font-semibold text-[#0a1628] text-center whitespace-nowrap">
        {label}
      </span>
      <Icon size={26} className="text-[#0a1628]" strokeWidth={2.5} />
    </div>
  );
}

function PaymentFlowDiagram() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] md:h-[560px]">

      <FlowBox
        icon={
          <div className="flex flex-col items-center gap-2 my-2">
            <FiMonitor size={40} />
            <div className="flex gap-2">
              <FiSmartphone size={24} />
              <FiSmartphone size={24} />
            </div>
          </div>
        }
        title="Consumer"
        className="left-0 top-0 w-[24%] h-full"
      />

      <FlowBox
        icon={<FiShoppingCart size={44} className="text-[#e0603c] my-3" />}
        title="Merchant Payment Page"
        subtitle="Shopping Cart System"
        className="left-[32%] top-0 w-[34%] h-[44%]"
      />

      <FlowBox
        icon={<FiHome size={44} className="text-[#0a1628] my-3" />}
        title="Payment Company"
        subtitle="BANK"
        className="left-[32%] top-[56%] w-[34%] h-[44%]"
      />

      <FlowBox
        icon={<FiCreditCard size={44} className="text-[#0a1628] my-3" />}
        title="Payment Gateway"
        subtitle="Bank Transfer (Virtual Account)"
        className="left-[74%] top-0 w-[26%] h-full"
      />

      <FlowArrow
        direction="right"
        label="Service delivery"
        className="left-[24.5%] top-[18%] w-[7.5%]"
      />

      <FlowArrow
        direction="right"
        label={
          <>
            Request for payment
            <br />
            processing
          </>
        }
        className="left-[66%] top-[16%] w-[8%]"
      />

      <FlowArrow
        direction="left"
        label="Authentication Result"
        className="left-[66%] top-[72%] w-[8%]"
      />

      <FlowArrow
        direction="left"
        label={
          <>
            Order For payment
            <br />
            processing
          </>
        }
        className="left-[24.5%] top-[70%] w-[7.5%]"
      />

    </div>
  );
}

export default function VirtualAccount() {
  return (
    <>
      <Navbar />

      <section className="virtual-account-section bg-white pt-40 pb-24 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.2] text-[#0a1628] max-w-4xl">
            Smarter Transaction Banking with Virtual Accounts
          </h1>

          <div className="mt-8 space-y-6 max-w-4xl">
            <p className="text-slate-700 text-lg leading-relaxed">
              Corporates today need better control and visibility over their
              cash <strong className="font-semibold text-[#0a1628]">INFLOW</strong> and{" "}
              <strong className="font-semibold text-[#0a1628]">OUTFLOW</strong>
              —and liquidity positions. This has led to the adoption of
              smarter transaction banking alternatives like virtual accounts.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              Virtual Accounts allow businesses to make and receive payments
              via{" "}
              <strong className="font-semibold text-[#0a1628]">
                NEFT, RTGS, IMPS
              </strong>{" "}
              on behalf of one physical account.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              They also provide the ability to{" "}
              <strong className="font-semibold text-[#0a1628]">
                reconcile payments in real time
              </strong>
              .{" "}
              <strong className="font-semibold text-[#0a1628]">
                Kubero Pays
              </strong>{" "}
              offers on-demand Virtual Accounts to its corporate clients for
              seamless transactions.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0a1628] mb-6">
                Benefits of Virtual Accounts
              </h2>

              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#0a1628] flex-shrink-0" />
                    <span className="text-slate-700 text-lg leading-relaxed">
                      {item.text ? (
                        item.text
                      ) : (
                        <>
                          {item.pre}
                          <strong className="font-semibold text-[#0a1628]">
                            {item.bold}
                          </strong>
                          {item.post}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <BenefitsIllustration />
          </div>

          <div className="mt-20">
            <PaymentFlowDiagram />
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="/signup"
              className="px-10 py-4 rounded-lg bg-[#1a2c8f] text-white font-semibold text-base shadow-lg shadow-[#1a2c8f]/25 hover:bg-[#152574] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Sign Up Now
            </a>
          </div>

        </div>
      </section>
    </>
  );
}