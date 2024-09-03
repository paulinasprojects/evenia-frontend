import { BiChevronDown, BiSearch } from "react-icons/bi";
import {Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Link } from "react-router-dom";
import userimg from '/user-image.png'
import "@/styles/header.scss";
import logo from '/evenia-logo.svg';

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
                  <Link to="/" className="menu-item">Tickets (1)</Link>
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
            <button className="create-button">Create Event</button>
            <button className="signin-button">Sign in</button>
          </div> 
          </>
        )}
      </nav>
    </>

  )
}

export default Header