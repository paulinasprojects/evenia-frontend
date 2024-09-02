import { FaCalendarMinus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";


const EventDescription = () => {
  return (
    <div className="event-description-container">
      {/* Left */}
      <div className="event-description-left">
        <span>
          Learn how to sharpen your focus so you can get more done! <br />
          This class is ideal for students, professionals and lifelong <br />
          learners. About this event This is an online event.
        </span>
        <span className="event-description-learn">What You'll Learn:</span>
        <span>
            How to be more productive through increased focus. <br />
            Apps and online tools that improve your concentration. <br />
            How to trick yourself into paying more attention to tasks at hand.
        </span>
      </div>
      {/* Right */}
      <div className="event-description-right">
        <span className="event-description-date-time">
            <FaCalendarMinus className="calendar-icon"/>
            Date and time : <br />
            Thu, September 9, 2021 <br />
            1:00 AM – 1:30 AM WIB <br />
        </span>
        <span className="event-description-date-time">
          <FaLocationDot className="calendar-icon"/>
          Location : <br />
          ONLINE
        </span>
      </div>
    </div>
  )
}

export default EventDescription