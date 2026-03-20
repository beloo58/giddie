function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--color-primary)',
      color: 'white',
      padding: '3rem 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Gideon's East Africa</h3>
            <p>Building excellence through innovation and integrity across East Africa.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="/contact" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Contact Info</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 Nairobi, Kenya</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>📞 +254 700 123 456</p>
            <p style={{ fontSize: '0.9rem' }}>✉️ info@gideonsea.com</p>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p>&copy; {currentYear} Gideon's East Africa Build Tech Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
