import "@/styles/create-event-date-time.scss";
import { useNavigate } from "react-router-dom";

const CreateEventDateTime = () => {
  const navigate = useNavigate();

  const onDateFocus = (e: React.ChangeEvent<HTMLInputElement>) => (e.target.type = "date");
  const onTimeFocus = (e: React.ChangeEvent<HTMLInputElement>) => (e.target.type = "time");
  const onDateBlur = (e: React.ChangeEvent<HTMLInputElement>) => (e.target.type = "text");

  return (
    <div className="create-event-next-form-container">
      <div className="create-event-title-container">
        <span className="create-event-title">Date & Time</span>
        <span className="create-event-description">Please fill all the required information</span>
      </div>
      <div className="create-event-start-container">
        <span className="create-event-start-title">Start</span>
      </div>
      <div className="create-event-date-container">
        <input type="text" placeholder="Event Start - End" className="create-event-date-input" onFocus={onDateFocus} onBlur={onDateBlur} />
        <input type="text" placeholder="Start Time - End" className="create-event-date-input" onFocus={onTimeFocus} onBlur={onDateBlur}  />
      </div>
      <div className="create-event-date-button-container">
        <button className="create-event-date-button-back" onClick={() => navigate("/create-event")}>Back</button>
        <button className="create-event-date-continue" onClick={() => navigate("/create-event/add-ticket")}>Continue</button>
      </div>
    </div>
  )
}

export default CreateEventDateTime