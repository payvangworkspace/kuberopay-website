import { FiMapPin, FiPhone, FiMail, FiCreditCard } from "react-icons/fi";
import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">
          <div className="footer-logo-icon">
            <FiCreditCard size={22} />
          </div>
          <div>
            <h3>Kubero Pays</h3>
            <span>SIMPLIFY. INTEGRATE. SCALE.</span>
          </div>
        </div>

        {/* Contact details */}

        <div className="footer-contact">

          <div className="contact-row">
            <FiMapPin className="contact-icon" />
            <p>
              113 Lakeshore Rd, West, Suite-163,
              <br />
              Temporary Address
            </p>
          </div>

          <div className="contact-row">
            <FiPhone className="contact-icon" />
            <a href="tel:+16476190777">+1-647-619-0777</a>
          </div>

          <div className="contact-row">
            <FiMail className="contact-icon" />
            <a href="mailto:info@kuberopays.com">info@kuberopays.com</a>
          </div>

          <div className="contact-row">
            <FiCreditCard className="contact-icon" />
            <span className="lei-text">LEI: 9845007B948E6F7FB644</span>
          </div>

        </div>

      </div>

      {/* Bottom bar */}

      <div className="footer-bottom">
        <p>© 2026 Kubero Pays. All rights reserved.</p>
        <p>Kubero Pays is a trademark of Kubero Pays Inc.</p>
      </div>

    </footer>
  );
}
