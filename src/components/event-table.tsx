import "@/styles/event-table.scss";
import { BsThreeDots } from "react-icons/bs";

import { ManageMyEventsData } from "@/data/events";


const EventTable = () => {
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
              <BsThreeDots className="manage-event-dots" />
            </td>
        </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default EventTable