import { GoGlobe } from "react-icons/go";
import { TbArrowUpRight } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";

import "@/styles/features.scss";
import FeaturesList from "../features-list";

const Features = () => {
  return (
    <div className="features-container">
     <div className="features-title">
        <h1>
            Create Your Online <br />
            Event Only In 5 Minutes
          </h1>
     </div>
     <div className="features-lists">
          <FeaturesList 
            icon={GoGlobe} 
            title="Create Your Event" 
            description="Donations and distributions can be seen transparently"
          />
          <FeaturesList 
            icon={TbArrowUpRight} 
            title="Share Your Event" 
            description="The simplest and quickest way to share your event"
          />
          <FeaturesList 
            icon={FaRegCreditCard} 
            title="Sell Your Tickets" 
            description="Easily sell your event tickets online and reach your audience"
          />
     </div>
    </div>
  )
}

export default Features