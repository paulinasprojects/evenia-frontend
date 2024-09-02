import singleEventImage from '/single-event-image.png';

const SingleDetails = () => {
  return (
    <div className='single-details-container'>
    {/* Left */}
    <div className="details-left">
        <img src={singleEventImage} alt="" className='details-image' />
    </div>
    {/* Right */}
    <div className="details-right">
      <span className='details-date'>SEP 09</span>
        <span className='details-title'>
        Learn design sprint <br />
        with Jake Knapp
      </span>
      <div className='event-details'>
        <span className='details-price'>$732.58</span>
        <span>by jaludetya</span>
      </div>
      <div className='details-page-button-container'>
        <button className='details-register-button'>Register</button>
      </div>
    </div>
  </div>
  )
}

export default SingleDetails