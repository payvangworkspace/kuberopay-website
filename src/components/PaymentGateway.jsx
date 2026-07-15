import { FiCheck, FiCreditCard, FiShoppingCart, FiDollarSign } from "react-icons/fi";
import Navbar from "./Navbar";

const checklist = [
  {
    text: "Widest range of payment options: Debit & Credit Card, Net Banking, Mobile Wallet, UPI & EMI.",
  },
  {
    pre: "A high-speed, ",
    bold: "Fast, Seamless checkout",
    post: " with zero redirect.",
  },
  {
    text: "Pay via QR Code, SMS, Web Link.",
  },
  {
    pre: "Transparent and timely ",
    bold: "Kubero Pays Settlement",
    post: " and payouts.",
  },
  {
    text: "Comprehensive MIS Reporting and Insights with Live Dashboard.",
  },
];

function PaymentIllustration() {
  return (
    <div className="relative bg-gradient-to-br from-[#eef0ff] to-[#f6e9f7] rounded-[32px] p-10 md:p-14 min-h-[420px] flex items-center justify-center overflow-hidden">

      {/* Soft background blob */}
      <div className="absolute w-72 h-72 rounded-full bg-white/60 blur-2xl" />

      {/* Phone / checkout card */}
      <div className="relative z-10 w-56 h-96 bg-gradient-to-b from-[#5b4fd6] to-[#3f35b0] rounded-[28px] shadow-2xl p-6 flex flex-col items-center justify-center gap-6">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
          <FiShoppingCart size={26} className="text-[#5b4fd6]" />
        </div>

        <div className="w-full space-y-2">
          <div className="h-2 rounded-full bg-white/25 w-full" />
          <div className="h-2 rounded-full bg-white/25 w-3/4" />
        </div>

        <div className="w-full mt-4">
          <div className="flex justify-between text-[10px] text-white/70 mb-1">
            <span>Processing</span>
            <span>100%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-full bg-[#4ecdc4] rounded-full" />
          </div>
        </div>

        <div className="w-10 h-10 rounded-full bg-[#4ecdc4] flex items-center justify-center mt-2">
          <FiCheck size={20} className="text-[#0a1628]" />
        </div>
      </div>

      {/* Credit card overlapping left */}
      <div className="absolute left-8 md:left-12 top-1/3 z-20 w-40 h-24 rounded-2xl bg-gradient-to-br from-[#ff8a5c] to-[#e0524a] shadow-2xl -rotate-12 p-4 flex flex-col justify-between">
        <div className="w-8 h-5 rounded bg-white/40" />
        <div className="h-1.5 w-20 bg-white/40 rounded" />
      </div>

      {/* Coins floating right */}
      <div className="absolute right-6 md:right-10 top-10 z-20 flex flex-col gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f4c542] to-[#c8992f] shadow-lg flex items-center justify-center">
          <FiDollarSign size={18} className="text-white" />
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f4c542] to-[#c8992f] shadow-lg flex items-center justify-center ml-6">
          <FiDollarSign size={14} className="text-white" />
        </div>
      </div>

      {/* Small card icon bottom right */}
      <div className="absolute right-10 bottom-10 z-20 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-6">
        <FiCreditCard size={22} className="text-[#5b4fd6]" />
      </div>
    </div>
  );
}

export default function PaymentGateway() {
  return (
    <>
      <Navbar />

      <section className="bg-white pt-40 pb-24 px-8 sm:px-12 lg:px-20 xl:px-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.2] text-[#0a1628]">
              The One-Stop Solution For Accepting Payments Online
            </h1>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Payment gateway is software that authorizes payments for online
              merchants and e-businesses. It performs the crucial role of
              processing and authorizing transactions between customers and
              merchants.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Payment gateways encrypt sensitive information such as credit
              card numbers to guarantee secure transmission of payment
              details between the customer and merchant.
            </p>

            <ul className="mt-8 space-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 text-[#c9a227]">
                    <FiCheck size={18} strokeWidth={3} />
                  </span>
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

            <a
              href="/signup"
              className="inline-block mt-10 px-8 py-4 rounded-lg bg-[#1a2c8f] text-white font-semibold text-base shadow-lg shadow-[#1a2c8f]/25 hover:bg-[#152574] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              Sign Up Now
            </a>
          </div>

          {/* Right illustration */}
          <PaymentIllustration />

        </div>
      </section>
    </>
  );
}