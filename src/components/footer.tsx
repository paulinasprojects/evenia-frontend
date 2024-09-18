import "@/styles/footer.scss";
import { Link } from "react-router-dom";
import logo from '/evenia-logo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} alt="" className="footer-logo" />
      </Link>
      <div className="footer-links">
        <Link to="/" className="footer-link">Home</Link>
        <Link to="/create-event" className="footer-link">Create Event</Link>
        <Link to="/" className="footer-link">Sign Up</Link>
        <Link to="/" className="footer-link">Explore Events</Link>
      </div>
    </div>
  )
}

export default Footer