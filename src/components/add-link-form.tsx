import "@/styles/add-link-form.scss";
import { useNavigate } from "react-router-dom";

const AddLinkForm = () => {
  const navigate = useNavigate();

  return (
    <div className="add-link-form-container">
      <div className="add-ticket-title-container">
        <span className="create-event-title">Put Link Here</span>
        <span className="create-event-description">Please fill all the required information</span>
      </div>
      <div className="add-link-form-input-container">
        <input type="text" placeholder="URL" className="add-link-input" />
        <textarea placeholder="Additional information" className="add-link-description"></textarea>
      </div>
      <div className="add-link-button-container">
        <button 
          className="add-link-back-button" 
          onClick={() => navigate("/create-event/add-ticket")}
        >
          Back
        </button>
        <button className="add-link-save-button">Save</button>
      </div>
    </div>
  )
}

export default AddLinkForm