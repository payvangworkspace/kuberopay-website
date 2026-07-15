import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTumblr,
  FaPinterest,
  FaVimeoV,
} from "react-icons/fa";
import "../style/Excellence.css";

const stats = [
  { value: "19+", label: "Trusted by Countries", icon: <FaLinkedin /> },
  { value: "4000k", label: "Feedback", icon: <FaFacebook /> },
  { value: "12+", label: "Branches", icon: <FaTwitter /> },
  { value: "65+", label: "Experts", icon: <FaTwitter /> },
];

export default function Excellence() {
  return (
    <section className="excellence-section">

      {/* Scattered background icons */}

      <div className="excellence-bg" aria-hidden="true">
        <FaVimeoV className="bg-icon icon-vimeo" />
        <FaPinterest className="bg-icon icon-pinterest" />
        <FaInstagram className="bg-icon icon-instagram" />
        <FaLinkedin className="bg-icon icon-linkedin" />
        <FaYoutube className="bg-icon icon-youtube" />
        <FaTumblr className="bg-icon icon-tumblr" />
        <FaFacebook className="bg-icon icon-facebook" />
        <FaTwitter className="bg-icon icon-twitter" />
      </div>

      <div className="excellence-overlay" />

      <div className="excellence-container">

        <h2>We Always Strive for Excellence</h2>

        <p>
          Our commitment to quality and customer satisfaction drives us to
          deliver the best solutions for businesses worldwide.
        </p>

        <div className="excellence-stats">
          {stats.map((item) => (
            <div className="stat-box" key={item.label}>
              <span className="stat-watermark">{item.icon}</span>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
