import {
  FiArrowRight,
  FiShield,
  FiBarChart2,
  FiCreditCard,
} from "react-icons/fi";
import "../style/Features.css";

const features = [
  {
    title: "PCI DSS Level 1 Compliant",
    subtitle: "SECURE PAYMENTS",
    icon: <FiShield size={24} />,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80",
    description:
      "Enterprise-grade payment security with fraud detection, tokenization, and complete PCI compliance.",
  },
  {
    title: "Online, In-store & Mobile",
    subtitle: "MULTI-CHANNEL SUPPORT",
    icon: <FiCreditCard size={24} />,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    description:
      "Accept payments everywhere with one unified platform built for businesses of every size.",
  },
  {
    title: "Real-Time Analytics",
    subtitle: "POWERFUL DASHBOARD",
    icon: <FiBarChart2 size={24} />,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
    description:
      "Monitor every transaction, customer insight, and settlement with live reporting.",
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">

        {/* Heading */}

        <div className="features-heading">
          <span className="features-eyebrow">Kubero Pays</span>

          <h2>
            Smarter Payments,
            <br />
            Trusted by Thousands
          </h2>

          <p>
            At Kubero Pays we empower your business with secure, fast and seamless
            payment solutions. Whether you're scaling up or just getting
            started, our platform is designed to support your growth with
            modern infrastructure and world-class reliability.
          </p>
        </div>

        {/* Cards */}

        <div className="features-grid">

          {features.map((item) => (
            <div className="feature-card" key={item.title}>

              <div className="feature-image-wrap">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="feature-body">

                <div className="feature-tag">
                  {item.icon}
                  <span>{item.subtitle}</span>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button className="feature-link">
                  Learn More
                  <FiArrowRight />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}

        <div className="features-banner">

          <h3>Join thousands of businesses using Kubero Pays</h3>

          <p>
            Scale faster with secure payment infrastructure, global coverage,
            instant settlements and detailed analytics.
          </p>

          <button className="banner-btn">
            Learn More About Us
          </button>

        </div>

      </div>
    </section>
  );
}
