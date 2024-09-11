import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import logo from '/evenia-logo.svg';
import classNames from "@/lib/utils";
import EventsUsernameMenu from "./events-username-menu";
import "@/styles/header.scss";

const user = true;

const navigation = [
  {
    href: "/manage-my-events",
    name: "Event"
  },
  {
    href: "/orders",
    name: "Orders"
  },
  {
    href: "/withdrawal",
    name: "Withdrawal"
  },
  {
    href: "/bank",
    name: "Bank"
  },
]

const EventsHeader = () => {
 const { pathname } = useLocation();

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img src={logo} alt="" className="header-logo" />
        </Link>
        <div className="events-header-container">
          {navigation.map((navitem) => (
            <Link 
              key={navitem.name} 
              to={navitem.href} 
              className={classNames(navitem.href === pathname ? "path-event-link"
                : 
                "event-link", "event-link")}
              >
                  {navitem.name}
            </Link>
          ))}
        </div>
        {user ? (
          <>
            <EventsUsernameMenu/>
          </>
        ) : (
          <div className="header-button-container">
          <Link to="/register" className="create-button">Register</Link>
          <Link to="/sign-in" className="signin-button">Sign in</Link>
        </div> 
        )}
      </nav>
    </>
  )
}

export default EventsHeader