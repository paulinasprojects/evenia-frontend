import { useNavigate } from "react-router-dom"
import { DesignEventsData} from "@/data/events"
import EventCard from "./event-card"

import "@/styles/event-card.scss"

const DesignEvents = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="all-events">
        {DesignEventsData.map((event) => (
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

export default DesignEvents