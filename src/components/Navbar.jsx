import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Gideon's East Africa" className="navbar-brand-icon" />
        <span>Gideon's</span>
      </Link>
      <div className="navbar-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <a href="/#services">Services</a>
        <a href="/#projects">Projects</a>
        <Link to="/contact">Contact</Link>
        <Link to="/contact" className="navbar-cta">Get a Quote</Link>
      </div>
    </nav>
  )
}

export default Navbar
