import { FiArrowRight } from "react-icons/fi";
import "../style/Services.css";

const services = [
  {
    title: "Drag-and-Drop Functionality",
    description:
      "Effortlessly manage your workflow with intuitive drag-and-drop features.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
  },
  {
    title: "Transparent Pricing",
    description:
      "Straightforward pricing model with no hidden fees.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80",
  },
  {
    title: "Enterprise-Grade Security & Speed",
    description:
      "Top-tier security, efficiency, and reliability for every transaction.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
  },
  {
    title: "Advanced Dashboard",
    description:
      "Gain real-time insights and analytics to make informed decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* Heading */}

        <div className="services-heading">
          <h2>Why Choose Our Services?</h2>
          <p>
            Discover the features that make our platform efficient, secure,
            and user-friendly. These services are designed to enhance your
            workflow and provide exceptional support.
          </p>
        </div>

        {/* Cards */}

        <div className="services-grid">

          {services.map((item) => (
            <div className="service-card" key={item.title}>

              <div className="service-image-wrap">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="service-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <button className="service-link">
                  Learn More
                  <FiArrowRight />
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
