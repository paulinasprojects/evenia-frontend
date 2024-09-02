import "@/styles/our-partners.scss";

import redditLogo from '/reddit-logo.png';
import amazonLogo from '/amazon-logo.png';
import ebayLogo from '/ebay-logo.png';
import airbnbLogo from '/airbnb-logo.png';
import shopifyLogo from '/shopify-logo.png';
import disneyLogo from '/disney-logo.png';
import yahooLogo from '/yahoo-logo.png';
import usaTodayLogo from '/usa-today-logo.png';

const OurPartners = () => {
  return (
    <div className="partners-div-container">
      <div className="partners-title-container">
        <h1 className="partners-title">Our Partners</h1>
      </div>
      <div className="partners-container">
        <img src={redditLogo} alt="" />
        <img src={amazonLogo} alt="" />
        <img src={ebayLogo} alt="" />
        <img src={airbnbLogo} alt="" />
        <img src={shopifyLogo} alt="" />
        <img src={disneyLogo} alt="" />
        <img src={yahooLogo} alt="" />
        <img src={usaTodayLogo} alt="" />
      </div>
    </div>
  )
}

export default OurPartners