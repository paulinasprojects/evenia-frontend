import EventTabs from "../event-tabs";

import "@/styles/events.scss";

const Events = () => {
  return (
    <div className="events-container">
      <div className="events-title-container">
        <h1 className="events-title">Trusted by <br /> Thousand of Events</h1>
      </div>
      <div>
        <EventTabs/>
      </div>
    </div>
  )
}

export default Events