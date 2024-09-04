import "@/styles/my-tickets.scss";
import eventImage from '/event-image.png';
import eventImageTwo from '/event-image-two.png'
import eventImageThree from '/event-image-three.png'
import eventImageFour from '/event-image-four.png'
import eventImageFive from '/event-image-five.png'
import eventImageSix from '/event-image-six.png'
import EventCard from "@/components/event-card";
import { useNavigate } from "react-router-dom";

const MyTickets = () => {
  
  const navigate = useNavigate();

  return (
    <div className="my-tickets-container">
      <h1 className="my-tickers-container-title">My Tickets</h1>
      <div className="my-ticket-events-container">
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImage} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImageTwo} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImageThree} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")} 
            image={eventImageFour} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageFive} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageSix} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
        </div>
        <div className="my-tickets-button-container">
          <button className="see-more-button">See More</button>
        </div>
    </div>
  )
}

export default MyTickets