
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import userimg from '/user-image.png'

import "@/styles/header.scss";

const EventsUserna = () => {
  return (
      <Menu as="div" className="events-user-button-container">
              <div className="user-button-div">
                <MenuButton className="event-menu-button">
                  <img src={userimg} alt="" className="event-user-image"/>
                  <span className="event-user-button-name">John Doe</span>
                <BiChevronDown className="event-chevron-down"/>
                </MenuButton>
              </div>
              <MenuItems className="event-menu-items">
                <MenuItem>
                  <Link to="/manage-my-events" className="menu-item">Manage My Events</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/my-tickets" className="menu-item">Tickets (1)</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/account-settings" className="menu-item">Account Settings</Link>
                </MenuItem>
                <MenuItem>
                  <button className="menu-item-button">Log out</button>
                </MenuItem>
              </MenuItems>
            </Menu> 

  )
}

export default EventsUserna