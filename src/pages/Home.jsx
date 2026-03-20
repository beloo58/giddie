// src/pages/Home.jsx

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="main-content">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive construction solutions for modern Africa</p>
          </div>
          
          <div className="cards">
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Project Management</h3>
              <p>Expert oversight from planning to completion, ensuring timely and within-budget delivery</p>
            </div>
            <div className="card">
              <div className="card-icon">📐</div>
              <h3>Quantity Surveying</h3>
              <p>Precise cost estimation and project valuation for optimal resource allocation</p>
            </div>
            <div className="card">
              <div className="card-icon">🔧</div>
              <h3>Smart Technology</h3>
              <p>Integration of cutting-edge technology solutions into construction processes</p>
            </div>
            <div className="card">
              <div className="card-icon">🌱</div>
              <h3>Sustainable Building</h3>
              <p>Eco-friendly construction practices that balance growth with environmental responsibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Showcase of our most impactful construction achievements</p>
          </div>
          
          <div className="projects">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60" alt="Modern Office Building" />
              <div className="project-card-content">
                <h3>Modern Office Complex</h3>
                <p>A state-of-the-art 15-story office building in the heart of Nairobi's business district</p>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=500&q=60" alt="School Infrastructure" />
              <div className="project-card-content">
                <h3>Education Campus</h3>
                <p>Comprehensive school infrastructure supporting over 2,000 students across East Africa</p>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1514432324607-2e467f4af445?auto=format&fit=crop&w=500&q=60" alt="Residential Complex" />
              <div className="project-card-content">
                <h3>Residential Complex</h3>
                <p>Sustainable mixed-use residential community with 500+ housing units and amenities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Ready to Build Your Vision?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>Let's discuss how Gideon's can turn your project into reality</p>
          <button className="btn btn-primary">Schedule a Consultation</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
