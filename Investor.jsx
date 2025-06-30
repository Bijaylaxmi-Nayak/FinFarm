import React from "react";
import "./Investor.css";
import logo from "./logo.png"; // Import the logo image

const Investor = () => {
  return (
    <div className="investor-container">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="FinFarm Logo" className="logo" /> {/* Replaced text logo */}
        <nav className="nav-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Investment Opportunities</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Invest in Sustainable Aquaculture</h2>
        <p>Grow your wealth while supporting eco-friendly fish farming projects.</p>
        <button className="explore-button">Explore Investment Opportunities</button>
      </section>

      {/* Why Invest Section */}
      <section className="why-invest">
        <h3>Why Invest in Aquaculture?</h3>
        <p>Aquaculture is one of the fastest-growing food sectors, with high ROI and sustainability benefits.</p>
        <ul>
          <li>📈 Strong market demand</li>
          <li>🌱 Eco-friendly and sustainable</li>
          <li>💰 Potential for high returns</li>
        </ul>
      </section>

      {/* Investment Opportunities */}
      <section className="investment-section">
        <h3>Investment Opportunities</h3>
        <div className="investment-cards">
          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Farm" className="card-image" />
            <h4>EcoFish Farm</h4>
            <p>ROI: 12% | Investment: $5,000</p>
            <button className="details-button">View Details</button>
          </div>

          <div className="card">
            <img src="https://via.placeholder.com/300" alt="Farm" className="card-image" />
            <h4>BlueOcean Hatchery</h4>
            <p>ROI: 15% | Investment: $8,000</p>
            <button className="details-button">View Details</button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">1️⃣ Browse & Select a Farm</div>
          <div className="step">2️⃣ Invest & Track Progress</div>
          <div className="step">3️⃣ Earn Returns & Withdraw Profits</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3>What Our Investors Say</h3>
        <p>"I doubled my investment within a year! FinFarm is a game-changer." - Sarah K.</p>
      </section>

      {/* Call-to-Action */}
      <section className="cta">
        <h3>Start Investing Today</h3>
        <button className="cta-button">Join Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 FinFarm. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Investor;
