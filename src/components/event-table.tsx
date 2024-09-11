import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from '@/lib/utils';
import { ManageMyEventsData } from "@/data/events";
import IconComponent from "./icon";

import "@/styles/event-table.scss";

const EventTable = () => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState<string | null>(null);

  const handleOpen = (id: string) => {
     setOpen((prev) => (prev === id ? null : id)); 
  };

  const handleClose = () => {
    setOpen(null);
  };

  useClickOutside(menuRef, handleClose);

  const copyURL = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setOpen(null);
  };

  return (
   <div className="event-table-container">
     <table className="event-table">
      <thead>
      <tr>
          <th className="event-th-event">Event</th>
          <th className="event-th-sold">Sold</th>
          <th className="event-th-price">Price</th>
          <th className="event-th-published">Published</th>
          <th className="event-th-dots"></th>
        </tr>
      </thead>
      <tbody>
        {ManageMyEventsData.map((event) => (
          <tr key={event.id} className="manage-event-tr">
            <td className="manage-event-td">
              <img src={event.image} alt="" className="manage-event-td-image" />
              <div className="manage-event-div">
              <span className="manage-event-table-date">{event.date}</span>
              <span className="manage-event-table-title">Critical Thinking Skills <br /> For All Profesiona</span>
              <span className="manage-event-table-author">Event by: {event.author}</span>
              </div>
            </td>
            <td className="manage-event-table-sold">{event.sold}</td>
            <td className="manage-event-table-price">{event.price}</td>
            <td className="manage-event-table-published">
              {event.published} <br />
            </td>
            <td className="manage-event-table-dots">
              <IconComponent 
                icon={event.icon} 
                onClick={() => handleOpen(event.id)} 
              />
                {open === event.id && (
                 <div className="event-dots-menu" ref={menuRef}>
                    <Link to="/view-event" className="event-dots-link">View Event</Link>
                    <Link to="/edit-event" className="event-dots-link">Edit Event</Link>
                    <button className="event-dots-link" onClick={copyURL}>Copy URL</button>
               </div> 
                )}
            </td>
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  );
};

export default EventTable;