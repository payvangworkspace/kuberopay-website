import Navbar from "./Navbar";

const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  userCheck: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <circle cx="10" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 13l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.5v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16.7" r="1.1" fill="currentColor" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <path d="M4 12a8 8 0 0 1 13.66-5.66L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 4v4h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a8 8 0 0 1-13.66 5.66L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20v-4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gavel: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
      <path d="M14.5 6.5l3 3-8 8-3-3 8-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12.5 4.5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3.5 15.5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

function Card({ icon, title, children }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-[0_8px_30px_rgba(10,22,40,0.08)] hover:shadow-[0_12px_36px_rgba(10,22,40,0.12)] hover:-translate-y-0.5 transition-all duration-200">
      <div className="text-[#2f9fe0]">{icon}</div>
      <h3 className="mt-5 font-serif text-xl text-[#0a1628]">{title}</h3>
      <div className="mt-4 text-[#0a1628]/60 leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsAndConditions() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />

      <section
        className="pt-20"
        style={{
          background:
            "linear-gradient(180deg, #cfe8fb 0%, #bfe0fa 45%, #e9f4fc 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-8 sm:px-12 py-24">
          <div className="text-center">
            <h1 className="inline-flex items-center gap-4 font-serif text-4xl sm:text-5xl text-[#1f6fd6]">
              <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10 text-[#2f7fe0]" fill="currentColor">
                <path d="M6 2.5h9.5L20 7v14.5H6a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 6 2.5z" opacity="0.15" />
                <rect x="4.5" y="2.5" width="9" height="18" rx="1.5" />
              </svg>
              Terms &amp; Conditions
            </h1>
            <p className="mt-5 text-lg text-[#0a1628]/60">
              Welcome to <span className="font-semibold text-[#0a1628]">Kubero Pays</span>. Please read these terms carefully.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card icon={icons.shield} title="Acceptance of Terms">
              By accessing our services, you agree to comply with these
              Terms &amp; Conditions. If you do not agree, please
              discontinue use.
            </Card>

            <Card icon={icons.userCheck} title="User Responsibilities">
              <ul className="space-y-2.5">
                {[
                  "Provide valid and accurate information.",
                  "Avoid misuse or exploitation of services.",
                  "Respect local and international laws.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mt-1 shrink-0 text-[#2f9fe0]" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card icon={icons.lock} title="Privacy Policy">
              Your data security is our priority. We collect, store, and
              process information in line with our{" "}
              <a href="/privacy-policy" className="text-[#2f7fe0] font-semibold underline underline-offset-2">
                Privacy Policy
              </a>
              .
            </Card>

            <Card icon={icons.alert} title="Limitation of Liability">
              Kubero Pays shall not be liable for losses or damages arising
              from unauthorized access or use of our services.
            </Card>

            <Card icon={icons.refresh} title="Changes to Terms">
              We may update these Terms from time to time. Changes take
              effect immediately upon posting.
            </Card>

            <Card icon={icons.gavel} title="Governing Law">
              These Terms are governed by and construed in accordance with
              the laws of India.
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
