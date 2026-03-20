// src/pages/Contact.jsx

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

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
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
          <p style={{ fontSize: '1.2rem' }}>Get in touch with our team to discuss your project</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-card">
                <h3>📍 Our Office</h3>
                <p>
                  Gideon's East Africa Build Tech Solutions Ltd<br/>
                  Nairobi, Kenya<br/>
                  East Africa
                </p>
              </div>
              <div className="info-card">
                <h3>📞 Phone</h3>
                <p>
                  <a href="tel:+254700123456">+254 700 123 456</a><br/>
                  <a href="tel:+254701987654">+254 701 987 654</a>
                </p>
              </div>
              <div className="info-card">
                <h3>✉️ Email</h3>
                <p>
                  <a href="mailto:info@gideonsea.com">info@gideonsea.com</a><br/>
                  <a href="mailto:projects@gideonsea.com">projects@gideonsea.com</a>
                </p>
              </div>
              <div className="info-card">
                <h3>🕒 Business Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br/>
                  Saturday: 10:00 AM - 2:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
