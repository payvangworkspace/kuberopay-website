import Navbar from "./Navbar";

const sections = [
  {
    n: "1",
    title: "Information We Collect",
    body: "We may collect personal information such as your name, email, phone number, financial details, and usage data when you interact with our platform.",
  },
  {
    n: "2",
    title: "How We Use Your Information",
    body: "Your information is used to provide services, process transactions, enhance security, and improve your overall user experience.",
  },
  {
    n: "3",
    title: "Sharing of Information",
    body: "We do not sell your data. Information may be shared with trusted partners only for payment processing, compliance, or service improvements.",
  },
  {
    n: "4",
    title: "Security Measures",
    body: "We implement strict security protocols, including encryption, firewalls, and regular monitoring to protect your information.",
  },
  {
    n: "5",
    title: "Cookies",
    body: "Our platform uses cookies to personalize your experience and analyze site traffic. You can disable cookies via your browser settings.",
  },
  {
    n: "6",
    title: "Your Rights",
    body: "You have the right to access, update, or delete your personal data. Please contact our support team to exercise these rights.",
  },
  {
    n: "7",
    title: "Updates to this Policy",
    body: "Kubero Pays may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="font-sans bg-[#0a1628] min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 34px, rgba(255,255,255,0.6) 35px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-8 sm:px-12 pt-20 pb-24">
          <div className="rounded-3xl bg-white/[0.04] border border-white/5 backdrop-blur-sm px-8 sm:px-14 py-14">
            <h1 className="font-serif text-4xl sm:text-5xl text-white text-center">
              Privacy Policy
            </h1>

            <p className="mt-8 text-white/70 leading-relaxed">
              At <span className="font-semibold text-white">Kubero Pays</span>,
              we value your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you use our
              services.
            </p>

            <div className="mt-10 divide-y divide-white/5">
              {sections.map((s) => (
                <div key={s.n} className="py-8 first:pt-0 last:pb-0">
                  <h2 className="font-serif text-2xl text-[#5fb8ea]">
                    {s.n}. {s.title}
                  </h2>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[#c9a227] font-medium leading-relaxed">
                If you have any questions regarding this Privacy Policy,
                please contact us at{" "}
                <a
                  href="mailto:support@kuberopays.com"
                  className="underline underline-offset-2 hover:text-[#e0bb3f] transition-colors"
                >
                  support@kuberopays.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
