import { useState } from "react";
import { Link } from "react-router-dom";
import { OrderEventsData } from "@/data/events";
import IconComponent from "./icon";

const OrdersEventTable = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="order-table-container">
      <table className="order-event-table">
        <thead>
          <tr>
            <th className="order-event-th-orderId">Order ID</th>
            <th className="order-event-th-event">Event</th>
            <th className="order-event-th-buyer">Buyer</th>
            <th className="order-event-th-date">Date</th>
            <th>Total</th>
            <th className="order-event-th-dots"/>
          </tr>
        </thead>
        <tbody>
          {OrderEventsData.map((event) => (
            <tr key={event.id}>
              <td className="order-orderId">{event.id}</td>
              <td className="order-event-td-event">{event.title}</td>
              <td className="order-event-td-buyer">{event.buyer}</td>
              <td className="order-event-td-date">{event.date}</td>
              <td className="order-event-td">{event.total}</td>
              
              <td className="order-event-table-dots">
                <IconComponent icon={event.icon} onClick={() => handleOpen(event.id)}/>
                  {open === event.id && (
                    <div className="dots-menu">
                      <Link to="/view-order" className="dots-link">View Order</Link>
                      <Link to="/edit-buyer-info" className="dots-link">Edit Buyer Info</Link>
                    </div>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersEventTable