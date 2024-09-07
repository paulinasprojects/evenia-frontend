import { useNavigate } from "react-router-dom";
import { TicketEvents } from "@/data/events";
import EventCard from "@/components/event-card";

import "@/styles/my-tickets.scss";

const MyTicketsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="my-tickets-container">
      <h1 className="my-tickers-container-title">My Tickets</h1>
      <div className="my-ticket-events-container">
        {TicketEvents.map((event) => (
          <EventCard
            key={event.id}
            type={event.type}
            image={event.image}
            date={event.date}
            title={event.title}
            author={event.author}
            onClick={() => navigate("/my-tickets/1")}
          />
        ))}
        </div>
        <div className="my-tickets-button-container">
          <button className="see-more-button">See More</button>
        </div>
    </div>
  )
}

export default MyTicketsPage