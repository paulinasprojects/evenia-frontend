import { useNavigate } from "react-router-dom";
import eventImage from '/event-image-seven.png';
import eventImageTwo from '/event-image-eight.png'
import eventImageThree from '/event-image-nine.png'
import eventImageFour from '/event-image-ten.png'
import EventCard from "./event-card";

import "@/styles/user-events.scss";

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
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImage} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"
          />
            <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImageTwo} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"
          />
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImageThree} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"
          />
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImageFour} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"
          />
        </div>
          <div className="user-list-event-button-container">
            <button className="see-more-button">See More</button>
          </div>
        </div> 
      ) : (
        <div className="user-no-events-container">
          <div className="user-no-events-title-container">
            <h1 className="user-no-events-title">No Events Yet</h1>
            <span className="user-no-events-description">The organizer don't have any events yet. Check back later!</span>
          </div>
        </div>
      )}
    </>
  )
}

export default UserEvents