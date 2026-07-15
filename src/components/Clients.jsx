import "../style/Clients.css";

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">

        {/* Left text content */}

        <div className="clients-left">

          <h2>Understanding Our Clients</h2>

          <p>
            We recognize the unique needs of our clients, delivering
            innovative payment solutions that streamline complex
            transactions. Our commitment to excellence ensures we remain at
            the forefront of the ever-evolving payments landscape. By staying
            ahead, we empower our clients with a competitive advantage in
            their industries.
          </p>

          <p>
            Backed by cutting-edge security and seamless technology, we
            provide a robust platform that enhances your business operations
            and ensures maximum efficiency.
          </p>

          <button className="clients-btn">Explore Our Approach</button>

        </div>

        {/* Right image */}

        <div className="clients-right">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80"
            alt="Client using a tablet"
          />
        </div>

      </div>
    </section>
  );
}
