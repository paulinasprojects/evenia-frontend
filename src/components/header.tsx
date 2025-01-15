import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

import logo from '/evenia-logo.svg';
import "@/styles/header.scss";
import UsernameMenu from "./username-menu";

// You can flip this to true to see the header when a user is logged in
const user = false;

const Header = () => {

  return ( 
    <> 
      <nav className="header">
        <Link to="/">
          <img src={logo} alt="" className="header-logo" />
        </Link>
        <div className="header-container">
          <BiSearch className="search-icon"/>
          <input type="text" placeholder="Search Event" className="header-input" />
        </div>
        {user ? (
          <>
           <UsernameMenu/>
          </>
        ) :  (
          <>
          <div className="header-button-container">
            <Link to="/register" className="create-button">Register</Link>
            <Link to="/sign-in" className="signin-button">Sign in</Link>
          </div> 
          </>
        )}
      </nav>
    </>

  )
}

export default Header