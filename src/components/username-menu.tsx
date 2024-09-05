import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import userimg from '/user-image.png'

import "@/styles/header.scss";

const UsernameMenu = () => {


  return (
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
                  <Link to="/user-profile" className="menu-item">Account Settings</Link>
                </MenuItem>
                <MenuItem>
                  <button className="menu-item-button">Log out</button>
                </MenuItem>
              </MenuItems>
            </Menu> 

  )
}

export default UsernameMenu