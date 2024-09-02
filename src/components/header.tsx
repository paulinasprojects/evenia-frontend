import { BiSearch } from "react-icons/bi";
import "@/styles/header.scss";
import logo from '/evenia-logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img src={logo} alt="" className="header-logo" />
      </Link>
      <div className="header-container">
        <BiSearch className="search-icon"/>
        <input type="text" placeholder="Search Event" className="header-input" />
      </div>
        <div className="header-button-container">
          <button className="create-button">Create Event</button>
          <button className="signin-button">Sign in</button>
        </div>
    </nav>
  )
}

export default Header