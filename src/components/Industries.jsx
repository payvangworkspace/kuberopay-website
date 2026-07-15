import { FiCreditCard, FiActivity, FiShield, FiGrid, FiCode } from "react-icons/fi";
import "../style/Industries.css";

const cards = [
  {
    icon: <FiCreditCard size={30} />,
    title: "Accept All Payment Modes",
    description:
      "Support domestic & international cards, EMIs (card-based & cardless), netbanking from 58 banks to offer the most extensive payment options.",
  },
  {
    icon: <FiActivity size={30} />,
    title: "All-in-One Dashboard",
    description:
      "Gain valuable business insights with detailed reports on payments, settlements, refunds, and more, helping you make better decisions.",
  },
  {
    icon: <FiShield size={30} />,
    title: "Robust Security",
    description:
      "Ensure total safety with PCI-DSS Level 1 compliance, regular third-party audits, and a dedicated internal security team.",
  },
  {
    icon: <FiGrid size={30} />,
    title: "Multi-Channel Processing",
    description:
      "Process payments in-store, online, and via mobile seamlessly, with the flexibility and scalability to support your growth.",
  },
  {
    icon: <FiCode size={30} />,
    title: "Built for Developers",
    description:
      "Use clean, robust APIs, plugins, and libraries across major platforms and languages, so you can focus on building great products.",
  },
];

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-container">

        <span className="industries-eyebrow">Industries We Empower</span>

        <h2>
          Future-Ready Payment Solutions
          <br />
          for Every Sector
        </h2>

        <p>
          Kubero Payss provides tailored payment infrastructure that adapts
          to your industry's specific needs — secure, scalable, and globally
          connected.
        </p>

        <div className="industries-grid">
          {cards.map((item) => (
            <div className="industry-card" key={item.title}>
              <span className="industry-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
