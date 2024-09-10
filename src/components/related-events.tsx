import { useNavigate } from "react-router-dom";
import eventImage from '/event-image.png';
import eventImageTwo from '/event-image-two.png'
import eventImageThree from '/event-image-three.png'
import eventImageFour from '/event-image-four.png'

import EventCard from "./event-card";

const RelatedEvents = () => {
  
  const navigate = useNavigate();

  return (
    <div className="related-events-container">
      <div className="related-events-title-container">
        <h1 className="related-events-title">Related Events</h1>
      </div>
      <div className="related-event-card-container">
        <EventCard 
          onClick={() => navigate("/detail/events/1")} 
          image={eventImage} 
          date="Mon, Oct 25, 8 : 30 AM" 
          title="Critical Thinking Skills For All Profesional" 
          author="Jalu Detya"
        />
          <EventCard
          onClick={() => navigate("/detail/events/1")} 
          image={eventImageTwo} 
          date="Mon, Oct 25, 8 : 30 AM" 
          title="Critical Thinking Skills For All Profesional" 
          author="Jalu Detya"
        />
        <EventCard
          onClick={() => navigate("/detail/events/1")} 
          image={eventImageThree} 
          date="Mon, Oct 25, 8 : 30 AM" 
          title="Critical Thinking Skills For All Profesional" 
          author="Jalu Detya"
        />
        <EventCard
          onClick={() => navigate("/detail/events/1")} 
          image={eventImageFour} 
          date="Mon, Oct 25, 8 : 30 AM" 
          title="Critical Thinking Skills For All Profesional" 
          author="Jalu Detya"
        />
      </div>
        <div className="related-events-button-container">
          <button className="see-more-button">See More</button>
        </div>
    </div>
  )
}

export default RelatedEvents