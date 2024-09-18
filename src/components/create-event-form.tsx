import uploadImage from '/upload-image.png';
import CreateEventFormComponents from "./create-event-form-component";
import "@/styles/create-event-form.scss";

const CreateEventForm = () => {
  return (
    <div className="create-event-form-container">
      <div className="create-event-title-container">
        <span className="create-event-title">Event</span>
        <span className="create-event-description">Please fill all the required information</span>
      </div>
      <div className="create-event-container">
        {/* Left */}
        <div className="create-event-input-container">
          <label htmlFor="inputField" className="input-field-image">
            <img src={uploadImage} alt="" />
          </label>
          <input type="file"  className="file-button" title=" " style={{display: "none"}} id="inputField"/>
        </div>
        {/* Right */}
        <div>
          <CreateEventFormComponents/>
        </div>
      </div>
    </div>
  )
}

export default CreateEventForm