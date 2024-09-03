import eventauthorimage from '/event-author.png';


const EventAuthorOrganization = () => {
  return (
    <div>
      <div className='event-author-container'>
        <img src={eventauthorimage} alt="" width={96} height={96} />
        <span className='event-author-name'>OrganizerIrisReading.Com</span>
        <span className='event-author-description'>Organizer of How To Improve Your Focus and Limit Distractions - Bandung</span>
      <div className='event-author-button-container'>
        <button className='event-author-follow-button'>Follow</button>
        <button className='event-author-contact-button'>Contact</button>
      </div>
      </div>
    </div>
  )
}

export default EventAuthorOrganization