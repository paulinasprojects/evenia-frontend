import { GoGlobe } from "react-icons/go";
import { TbArrowUpRight } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";

import "@/styles/features.scss";

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
        <div className="features-list">
            <div className="features-list-container">
                <div className="features-round">
                  <GoGlobe className="features-globe"/>
                </div>
              </div>
              <div className="features-text">
                <span className="features-create">Create Your Event</span>
                <span className="features-donations">Donations and distributions can be <br /> seen transparently</span>
              </div>
          </div>
        <div className="features-list">
            <div className="features-list-container">
                <div className="features-round">
                  <TbArrowUpRight className="features-globe"/>
                </div>
              </div>
              <div className="features-text">
                <span className="features-create">Share Your Event</span>
                <span className="features-donations">The simplest and quickest way to <br />share your event</span>
              </div>
          </div>
        <div className="features-list">
            <div className="features-list-container">
                <div className="features-round">
                  <FaRegCreditCard className="features-globe"/>
                </div>
              </div>
              <div className="features-text">
                <span className="features-create">Sell Your Tickets</span>
                <span className="features-donations">Easily sell your event tickets  <br /> online and reach your audience</span>
              </div>
          </div>
     </div>
    </div>
  )
}

export default Features