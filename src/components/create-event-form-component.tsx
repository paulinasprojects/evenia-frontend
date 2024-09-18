import { useNavigate } from "react-router-dom"

const CreateEventFormComponents = () => {
  const navigate = useNavigate();

  return (
    <div className="create-event-outer-container">
      <div className="create-event-form-input-container">
        <input type="text" placeholder="Event Title" className="create-event-form-input" />
        <input type="text" placeholder="Category" className="create-event-form-input" />
      </div>
      <div className="create-event-textarea-container">
        <textarea placeholder="Description" className="create-event-textarea-description"></textarea>
        <button 
            className="continue-button" 
            onClick={() => navigate("/create-event/next")}
          >
          Continue
          </button>
      </div>
    </div>
  )
}

export default CreateEventFormComponents