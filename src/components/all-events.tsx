import { useNavigate } from "react-router-dom";
import { AllEventsData } from "@/data/events";
import EventCard from "./event-card";

import "@/styles/event-card.scss";


const AllEvents = () => {
  const navigate = useNavigate();

  return (
      <> 
        <div className="all-events">
          {AllEventsData.map((event) => (
            <EventCard
              key={event.id}
              image={event.image} 
              date={event.date}
              title={event.title}
              author={event.author}
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

export default AllEvents