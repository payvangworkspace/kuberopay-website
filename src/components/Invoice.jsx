import {
  FiShare2,
  FiUsers,
  FiCheck,
  FiSmartphone,
  FiCreditCard,
  FiShoppingCart,
  FiDollarSign,
} from "react-icons/fi";
import Navbar from "./Navbar";
import "../style/Invoice.css";

const features = [
  {
    icon: <FiShare2 size={22} />,
    title: "Workflow Automation",
    pre: "Automate recurring tasks like invoice generation and reminders. ",
    bold: "Kubero Pays Invoice",
    post: " lets you focus on growth while automation handles the manual tasks.",
  },
  {
    icon: <FiUsers size={22} />,
    title: "Seamless Collaboration",
    pre: "Communicate with your clients in real-time. Share invoices, discuss pricing, and finalize deals securely inside the ",
    bold: "Client Portal",
    post: ".",
  },
];

function InvoiceIllustration() {
  return (
    <div className="relative bg-gradient-to-br from-[#f3f4fb] to-[#eef0fa] rounded-[32px] p-10 md:p-14 min-h-[460px] flex items-center justify-center overflow-hidden">

      {/* Soft background blob */}
      <div className="absolute w-72 h-72 rounded-full bg-white/70 blur-2xl" />

      {/* Person */}
      <div className="relative z-20 flex flex-col items-center -mr-10">
        <div className="w-16 h-16 rounded-full bg-[#f6b89a]" />
        <div className="w-24 h-32 rounded-t-[40px] bg-[#e0603c] mt-1" />
        <div className="w-32 h-20 rounded-b-2xl bg-[#1a2744] -mt-2" />
      </div>

      {/* Checkmark badge */}
      <div className="inv-float absolute left-10 md:left-16 top-16 z-20 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center">
        <FiCheck size={22} className="text-[#e0603c]" strokeWidth={3} />
      </div>

      {/* Phone card */}
      <div className="inv-checkout-card relative z-10 w-64 bg-white rounded-[26px] shadow-2xl p-5 -ml-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e0603c]" />
          <div className="h-1.5 w-16 bg-slate-200 rounded" />
          <span className="text-slate-300 text-lg leading-none">⋮</span>
        </div>

        <div className="bg-gradient-to-br from-[#e0603c] to-[#c8462a] rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-6">
            <span className="text-white/80 text-xs font-semibold tracking-wide">
              BANK
            </span>
            <div className="w-6 h-4 rounded bg-white/40" />
          </div>
          <p className="text-white text-sm tracking-widest mb-2">
            4356 XXXX XXXX 1342
          </p>
          <p className="text-white/60 text-[10px] uppercase tracking-wide">
            Card Holder
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-[#fde8e1] flex items-center justify-center flex-shrink-0">
            <FiShoppingCart size={16} className="text-[#e0603c]" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-full bg-slate-200 rounded" />
            <div className="h-1.5 w-2/3 bg-slate-100 rounded" />
          </div>
        </div>

        <button className="w-full py-3 rounded-xl bg-[#e0603c] text-white font-bold text-sm">
          PAY
        </button>
      </div>

      {/* Credit card floating behind */}
      <div className="absolute right-6 md:right-10 top-8 z-0 w-40 h-24 rounded-2xl bg-slate-300/70 shadow-xl rotate-12" />

      {/* Coins */}
      <div className="inv-float absolute right-4 md:right-8 top-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-br from-[#f0876a] to-[#d9553a] shadow-lg flex items-center justify-center">
        <FiDollarSign size={16} className="text-white" />
      </div>
      <div className="inv-float-delay absolute right-10 md:right-16 bottom-16 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-[#f0876a] to-[#d9553a] shadow-lg flex items-center justify-center">
        <FiDollarSign size={20} className="text-white" />
      </div>

      {/* Coin stack */}
      <div className="absolute right-8 md:right-14 bottom-8 z-10 flex flex-col-reverse">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-16 h-3 rounded-full bg-[#e0603c] -mb-1.5 opacity-90"
          />
        ))}
      </div>

      {/* Wallet */}
      <div className="absolute left-8 md:left-12 bottom-10 z-10 w-24 h-16 rounded-xl bg-[#1a2744] shadow-xl">
        <div className="w-6 h-6 rounded-full bg-white/10 mt-3 ml-3" />
      </div>

      {/* Small phone icon badge */}
      <div className="inv-float absolute left-6 top-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hidden md:flex">
        <FiSmartphone size={16} className="text-[#e0603c]" />
      </div>

      {/* Small card badge */}
      <div className="inv-float-delay absolute right-2 top-6 z-20 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center hidden md:flex">
        <FiCreditCard size={16} className="text-[#1a2744]" />
      </div>
    </div>
  );
}

export default function Invoice() {
  return (
    <>
      <Navbar />

      <section className="invoice-section bg-white pt-40 pb-24 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.2] text-[#0a1628]">
              Smart GST Invoicing Software to Get Paid Faster
            </h1>

            <p className="mt-8 text-slate-700 text-lg leading-relaxed">
              <strong className="font-semibold text-[#0a1628]">
                Kubero Pays
              </strong>{" "}
              provides powerful invoicing software that helps you create
              professional invoices, automate payment reminders, and get paid
              faster online. Manage everything from anywhere, anytime.
            </p>

            <div className="mt-10 space-y-8">
              {features.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#eaf1ff] flex items-center justify-center flex-shrink-0 text-[#2563eb]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2563eb]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-base leading-relaxed">
                      {item.pre}
                      <strong className="font-semibold text-[#0a1628]">
                        {item.bold}
                      </strong>
                      {item.post}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-4 rounded-lg bg-[#1a2c8f] text-white font-semibold text-base shadow-lg shadow-[#1a2c8f]/25 hover:bg-[#152574] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Right illustration */}
          <InvoiceIllustration />

        </div>
      </section>
    </>
  );
}
