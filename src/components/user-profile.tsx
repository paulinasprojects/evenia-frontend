import userImage from '/user-image.png';

import "@/styles/user-profile.scss";

const UserProfile = () => {
  return (
    <div>
      <div className='user-profile-container'>
        <img src={userImage} alt="" width={86} height={86} />
        <span className='user-profile-name'>John Doe</span>
        <span className='user-profile-description'>Organizer of How To Improve Your Focus and Limit Distractions - Bandung</span>
      <div className='user-profile-button-container'>
        <button className='user-profile-follow-button'>Follow</button>
        <button className='user-profile-contact-button'>Contact</button>
      </div>
      </div>
  </div>
  )
}

export default UserProfile