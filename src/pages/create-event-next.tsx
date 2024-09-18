import CreateEventDateTime from "@/components/create-event-date-time"
import ProgressBar from "@/components/progress-bar"

const CreateEventNextPage = () => {
  return (
    <div>
      <div>
        <ProgressBar/>
      </div>
      <div>
        <CreateEventDateTime/>
      </div>
    </div>
  )
}

export default CreateEventNextPage