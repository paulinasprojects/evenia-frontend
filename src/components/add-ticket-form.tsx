
import "@/styles/add-ticket.scss";
import Slider from "./slider";
import { useNavigate } from "react-router-dom";

const AddTicketForm = () => {
  const navigate = useNavigate();

  return (
    <div className="add-ticket-form-container">
      <div className="add-ticket-title-container">
        <span className="create-event-title">Add Ticket</span>
        <span className="create-event-description">Please fill all the required information</span>
      </div>
      <div className="add-ticket-price-input-container">
        <input type="text" placeholder="Price" className="price-input" />
      </div>
      <div className="switch-container">
        <label htmlFor="" className="free-ticket">Free Ticket</label>
          <Slider/>
      </div>
      <div className="add-ticket-price-input-container">
        <input type="number" placeholder="Quantity" className="price-input" />
      </div>
      <div className="add-ticket-date-time-container">
        <input type="date" placeholder="Event Start - End" className="price-input"  />
        <input type="time" placeholder="Start Time - End" className="price-input"/>
      </div>
      <div className="add-ticket-button-container">
        <button 
          className="create-event-date-button-back" 
          onClick={() => navigate("/create-event/next")}
          >
            Back
          </button>
          <button 
            className="create-event-date-continue" 
            onClick={() => navigate("/create-event/add-link")}
          >
            Continue
          </button>
      </div>
    </div>
  )
}

export default AddTicketForm