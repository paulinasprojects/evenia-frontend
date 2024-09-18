import CreateEventForm from "@/components/create-event-form"
import ProgressBar from "@/components/progress-bar"

const CreateEventPage = () => {
  return (
    <div>
      <div>
        <ProgressBar/>
      </div>
      <div>
        <CreateEventForm/>
      </div>
    </div>
  )
}

export default CreateEventPage