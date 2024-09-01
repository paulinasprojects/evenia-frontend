import { BiSearch } from "react-icons/bi";
import "@/styles/header.scss";
import logo from '/evenia-logo.svg';

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" className="header-logo" />
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