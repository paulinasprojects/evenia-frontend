import { useNavigate } from "react-router-dom";
import { AllEventsData } from "@/data/events";

import EventCard from "./event-card";

import "@/styles/user-events.scss";
import UserEventsEmpty from "./user-events-empty";

const UserEvents = () => {
  const events = false;
  const navigate = useNavigate();

  return (
    <>
      { events ? (
        <div className="user-events-container">
        <div className="user-list-events-title-container">
          <h1 className="user-list-events-title">User List Events</h1>
        </div>
        <div className="user-list-events-card-container">
          {AllEventsData.slice(0, 4).map((event) => (
            <EventCard
              key={event.id}     
              image={event.image} 
              date={event.date}
              title={event.title}
              author={event.author}
              onClick={() => navigate("/detail/1")} 
            />
          ))}
        </div>
          <div className="user-list-event-button-container">
            <button className="see-more-button">See More</button>
          </div>
        </div> 
      ) : (
        <UserEventsEmpty/>
      )}
    </>
  )
}

export default UserEvents