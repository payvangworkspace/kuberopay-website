import {
  FiLock,
  FiZap,
  FiTrendingUp,
  FiCreditCard,
  FiShield,
  FiGlobe,
  FiShoppingBag,
  FiCamera,
  FiHeart,
  FiX,
  FiSmartphone,
  FiStar,
} from "react-icons/fi";
import "../style/Infrastructure.css";

const features = [
  {
    icon: <FiLock size={22} />,
    label: "Secure Transactions",
  },
  {
    icon: <FiZap size={22} />,
    label: "Instant Processing",
  },
  {
    icon: <FiTrendingUp size={22} />,
    label: "Real-Time Analytics",
  },
  {
    icon: <FiCreditCard size={22} />,
    label: "Multiple Payment Methods",
  },
  {
    icon: <FiShield size={22} />,
    label: "Advanced Fraud Protection",
  },
  {
    icon: <FiGlobe size={22} />,
    label: "Global Payment Support",
  },
];

const tiles = [
  { color: "#f4c542", icon: <FiShoppingBag size={18} /> },
  { color: "#2f8fd6", icon: <FiCamera size={18} /> },
  { color: "#6bc2c2", icon: null },
  { color: "#e0523c", icon: <FiX size={18} /> },
  { color: "#1f2f57", icon: null },
  { color: "#f4c542", icon: <FiSmartphone size={18} /> },
  { color: "#e07a3c", icon: null },
  { color: "#6bc2c2", icon: <FiHeart size={18} /> },
  { color: "#2f8fd6", icon: <FiStar size={18} /> },
];

export default function Infrastructure() {
  return (
    <section className="infra-section">
      <div className="infra-container">

        {/* Left content */}

        <div className="infra-left">

          <h2>Powerful Payment Infrastructure</h2>

          <p>
            Build, scale, and optimize your payment experience with our secure
            and high-performance infrastructure. Designed for modern
            businesses, our platform ensures seamless transactions, real-time
            insights, and global reach.
          </p>

          <div className="infra-grid">
            {features.map((item) => (
              <div className="infra-pill" key={item.label}>
                <span className="infra-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right isometric illustration */}

        <div className="infra-right">

          <div className="device-stack">

            <div className="tablet">
              <div className="tablet-grid">
                {tiles.map((tile, i) => (
                  <div
                    className="tile"
                    key={i}
                    style={{ background: tile.color }}
                  >
                    {tile.icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="phone">
              <div className="phone-header">
                <span className="phone-logo-dot" />
                <span>LOGO</span>
              </div>
              <div className="phone-sub">yourpayapp.com</div>

              <div className="phone-field">
                <span>Card Number</span>
                <div className="phone-line" />
              </div>

              <div className="phone-row">
                <div className="phone-field small">
                  <span>MM/YY</span>
                  <div className="phone-line" />
                </div>
                <div className="phone-field small">
                  <span>CVV</span>
                  <div className="phone-line" />
                </div>
              </div>

              <button className="phone-pay-btn">Pay €30.00</button>
            </div>

            <div className="credit-card">
              <div className="credit-card-top">
                <span className="chip" />
                <span className="brand">VISA</span>
              </div>
              <div className="credit-card-number">•••• •••• •••• 4772</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
