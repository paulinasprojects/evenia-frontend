import { useNavigate } from "react-router-dom"
import EventCard from "./event-card";
import {ProgrammingEventsData } from "@/data/events";

import "@/styles/event-card.scss";

const ProgrammingEvents = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="all-events">
      {ProgrammingEventsData.map((event) => (
        <EventCard
        key={event.id}
        image={event.image}
        date={event.date}
        title={event.title}
        author={event.author}
        className="event-tab-image"
        onClick={() => navigate("/detail/events/1")}
      />
      ))}
    </div>
    <div className="events-button-container">
          <button className="see-more-button">See More</button>
        </div>
    </>
  )
}

export default ProgrammingEvents