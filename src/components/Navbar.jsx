import { useState } from "react";

const navLinks = [
  {
    label: "Products",
    href: "#products",
    items: [
      { label: "Payment Gateway", href: "/payment-gateway" },
      { label: "Invoice", href: "/invoice" },
      { label: "Virtual Account", href: "/virtual-account" },
      { label: "White Label Solutions", href: "/white-label-solutions" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    items: [
      { label: "Solutions & Features", href: "/solution-and-features" },
      { label: "NFC Solution", href: "/nfc-solution" },
      { label: "Merchant Service Reseller", href: "/merchant-service-reseller" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ's", href: "/faqs" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    label: "Company",
    href: "#company",
    items: [{ label: "Company Overview", href: "/company" }],
  },
  {
    label: "Developers",
    href: "#developers",
    items: [
      { label: "Technology Stack", href: "/developer" },
    ],
  },
  { label: "Contact", href: "contact", noChevron: true },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 shrink-0">
      <img
        src="/Kuberopay_logo.png"
        alt="Kubero Pays"
        className="h-20 w-auto"
      />
    </a>
  );
}

function ChevronDown({ open }) {
  return (
    <svg
      className={`w-3 h-3 opacity-60 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavItem({ label, href, items, noChevron }) {
  if (!items) {
    return (
      <a
        href={href}
        className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
      >
        {label}
      </a>
    );
  }

  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors py-2 cursor-pointer">
        {label}
        {!noChevron && <ChevronDown />}
      </button>

      {/* Invisible bridge so the hover gap doesn't close the menu */}
      <div className="absolute left-0 top-full h-3 w-full" />

      <div
        className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1
                   group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                   transition-all duration-200 z-50"
      >
        <div className="min-w-55 bg-white rounded-2xl shadow-2xl shadow-black/30 border border-black/5 py-2 overflow-hidden">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-5 py-3 text-sm font-medium text-[#0a1628] hover:bg-[#4ecdc4]/10 hover:text-[#0f8f86] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordionItem({ label, href, items }) {
  const [open, setOpen] = useState(false);

  if (!items) {
    return (
      <a href={href} className="block text-sm text-white/80 hover:text-white py-2">
        {label}
      </a>
    );
  }

  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        className="w-full flex items-center justify-between text-sm text-white/80 hover:text-white py-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && (
        <div className="pb-3 pl-3 space-y-2">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm text-white/60 hover:text-white py-1"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-md border-b border-white/5">
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center max-w-360 mx-auto h-24 px-8 sm:px-12 lg:px-20 xl:px-28">
        {/* Logo */}
        <div className="justify-self-start">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 justify-self-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavItem {...link} />
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center justify-self-end gap-5">
          <a
            href="/signin"
            className="px-6 py-2.5 text-sm font-medium text-white/90 border border-white/20 rounded-full hover:border-[#4ecdc4]/70 hover:text-white hover:bg-[#4ecdc4]/10 transition-all duration-200 cursor-pointer"
          >
            Sign In
          </a>

          <a
            href="/signup"
            className="px-6 py-2.5 text-sm font-semibold text-[#0a1628] bg-[#4ecdc4] rounded-full shadow-md shadow-[#4ecdc4]/20 hover:bg-[#3dbdb5] hover:shadow-lg hover:shadow-[#4ecdc4]/30 hover:-translate-y-px transition-all duration-200 cursor-pointer"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white justify-self-end"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-white/5 px-8 py-4">
          {navLinks.map((link) => (
            <MobileAccordionItem key={link.label} {...link} />
          ))}

          <div className="flex gap-4 pt-5 mt-2 border-t border-white/5">
            <a
              href="/signin"
              className="flex-1 text-center px-5 py-2.5 text-sm font-medium text-white/90 border border-white/20 rounded-full"
            >
              Sign In
            </a>

            <a
              href="/signup"
              className="flex-1 text-center px-5 py-2.5 text-sm font-semibold text-[#0a1628] bg-[#4ecdc4] rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
