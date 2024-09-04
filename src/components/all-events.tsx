import { useNavigate } from "react-router-dom";
import eventImage from '/event-image.png';
import eventImageTwo from '/event-image-two.png'
import eventImageThree from '/event-image-three.png'
import eventImageFour from '/event-image-four.png'
import eventImageFive from '/event-image-five.png'
import eventImageSix from '/event-image-six.png'
import eventImageSeven from '/event-image-seven.png'
import eventImageEight from '/event-image-eight.png'
import eventImageNine from '/event-image-nine.png'
import eventImageTen from '/event-image-ten.png'
import eventImageEleven from '/event-image-eleven.png'
import eventImageTwelve from '/event-image-twelve.png'

import EventCard from "./event-card"


import "@/styles/event-card.scss";


const AllEvents = () => {
  const navigate = useNavigate();

  return (
      <> 
        <div className="all-events">
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
          <EventCard 
            onClick={() => navigate("/detail/1")} 
            image={eventImageSeven} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageEight} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageNine} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageTen} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageEleven} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"/>
          <EventCard
            onClick={() => navigate("/detail/1")}  
            image={eventImageTwelve} 
            date="Mon, Oct 25, 8 : 30 AM" 
            title="Critical Thinking Skills For All Profesional" 
            author="Jalu Detya"
          />
        </div>
        <div className="events-button-container">
          <button className="see-more-button">See More</button>
        </div>
    </>
  )
}

export default AllEvents