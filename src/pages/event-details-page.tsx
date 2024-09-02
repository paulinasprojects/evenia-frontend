import EventDescription from '@/components/event-description';
import SingleDetails from '@/components/single-details';

import "@/styles/details-page.scss";

const EventDetailsPage = () => {
  return (
    <>
      <SingleDetails/>
      <EventDescription/>
    </>
  )
}

export default EventDetailsPage