import { BsThreeDots } from "react-icons/bs";
import { OrderEventsData } from "@/data/events";

const OrdersEventTable = () => {
  return (
    <div className="event-table-container">
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
                <BsThreeDots className="order-event-dots"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersEventTable