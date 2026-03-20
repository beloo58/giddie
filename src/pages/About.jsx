// src/pages/About.jsx

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {
  return (
    <div className="main-content">
      <Navbar />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(12, 61, 116, 0.8) 0%, rgba(42, 110, 187, 0.7) 100%), url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80")',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Gideon's East Africa</h1>
          <p style={{ fontSize: '1.2rem' }}>Building excellence through innovation and integrity</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '2rem', textAlign: 'center' }}>
            Gideon's East Africa Build Tech Solutions Ltd is a leading construction and technology company dedicated to transforming the built environment across East Africa. With over a decade of experience, we combine traditional construction expertise with modern technology to deliver world-class projects.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <div className="split-item">
              <h3>Our Mission</h3>
              <p>To deliver innovative, sustainable, and cost-effective construction solutions that enhance quality of life and economic growth across East Africa. We are committed to exceeding client expectations through integrity, expertise, and cutting-edge technology.</p>
              <div className="quote">
                "Excellence is not an act, but a habit." 
                <div className="quote-author">- Aristotle</div>
              </div>
            </div>
            <div className="split-item">
              <h3>Our Vision</h3>
              <p>To be the most trusted and innovative construction partner in East Africa, recognized for delivering projects that combine environmental responsibility with technological advancement. We envision a region transformed by sustainable infrastructure that supports prosperity and community development.</p>
              <div className="quote">
                "The best way to predict the future is to build it."
                <div className="quote-author">- Peter Drucker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p>Experienced professionals driving innovation in construction</p>
          </div>
          
          <div className="team">
            <div className="team-card">
              <div className="team-photo">👨‍💼</div>
              <h3>Samuel Kipchoge</h3>
              <p>Chief Executive Officer</p>
            </div>
            <div className="team-card">
              <div className="team-photo">👩‍💼</div>
              <h3>Grace Mwangi</h3>
              <p>Chief Operations Officer</p>
            </div>
            <div className="team-card">
              <div className="team-photo">👨‍💼</div>
              <h3>David Okonkwo</h3>
              <p>Technical Director</p>
            </div>
            <div className="team-card">
              <div className="team-photo">👩‍💼</div>
              <h3>Amina Hassan</h3>
              <p>Head of Sustainability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
          </div>
          
          <div className="cards">
            <div className="card">
              <div className="card-icon">💼</div>
              <h3>Integrity</h3>
              <p>We operate with transparency and honesty in all our dealings</p>
            </div>
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Innovation</h3>
              <p>We embrace technology to improve construction processes</p>
            </div>
            <div className="card">
              <div className="card-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>Environmental responsibility is central to our operations</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in every project</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
