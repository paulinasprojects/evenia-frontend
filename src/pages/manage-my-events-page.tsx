import EventTable from "@/components/event-table";
import Pagination from "@/components/pagination";
import "@/styles/manage-my-events.scss";

const ManageMyEventsPage = () => {
  return (
    <div className="manage-event-container">
      <div className="manage-event-title-container">
        <span className="manage-event-title">Events</span>
        <button className="manage-event-create-event-button">Create Event</button>
      </div>
      <div className="manage-event-input-container">
        <div className="manage-event-input-second-container">
          <input type="text" placeholder="Search Events" className="manage-events-search-events" />
          <input type="text" placeholder="Organizer" className="manage-events-organizer" />
        </div>
      </div>
      <div className="event-table-container">
        <EventTable/>
      </div> 
      <div className="manage-event-pagination-container">
          <Pagination/>
        </div> 
    </div>
  )
}

export default ManageMyEventsPage