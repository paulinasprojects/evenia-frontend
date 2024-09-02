import EventCard from "./event-card"
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


import "@/styles/event-card.scss";

const AllEvents = () => {
  return (
    <> 
    <div className="all-events">
      <EventCard 
        image={eventImage} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageTwo} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageThree} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageFour} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageFive} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageSix} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageSeven} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageEight} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageNine} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageTen} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
        image={eventImageEleven} 
        date="Mon, Oct 25, 8 : 30 AM" 
        title="Critical Thinking Skills For All Profesional" 
        author="Jalu Detya"/>
      <EventCard 
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