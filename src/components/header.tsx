import { BiChevronDown, BiSearch } from "react-icons/bi";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from "react-router-dom";
import userimg from '/user-image.png'
import logo from '/evenia-logo.svg';
import "@/styles/header.scss";

const user = true;

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
            <Menu as="div" className="user-button-container">
              <div className="user-button-div">
                <MenuButton className="menu-button">
                  <img src={userimg} alt="" className="user-image"/>
                  <span className="user-button-name">John Doe</span>
                <BiChevronDown className="chevron-down"/>
                </MenuButton>
              </div>
              <MenuItems className="menu-items">
                <MenuItem>
                  <Link to="/" className="menu-item">Manage My Events</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/my-tickets" className="menu-item">Tickets (1)</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/" className="menu-item">Account Settings</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/" className="menu-item">Log out</Link>
                </MenuItem>
              </MenuItems>
            </Menu>
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