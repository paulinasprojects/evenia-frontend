import EventAuthorOrganization from '@/components/event-author-organization';
import EventDescription from '@/components/event-description';
import RelatedEvents from '@/components/related-events';
import SingleDetails from '@/components/single-details';

import "@/styles/details-page.scss";

const EventDetailsPage = () => {
  return (
    <>
      <SingleDetails/>
      <EventDescription/>
      <RelatedEvents/>
      <EventAuthorOrganization/>
    </>
  )
}

export default EventDetailsPage