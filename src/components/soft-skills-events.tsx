import { useNavigate } from "react-router-dom";
import EventCard from "./event-card";
import { SoftSkillsEventsData } from "@/data/events";

import "@/styles/event-table.scss";

const SoftSkillsEvents = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="all-events">
        {SoftSkillsEventsData.map((event) => (
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

export default SoftSkillsEvents