import "@/styles/our-partners.scss";

import { OurPartnersData } from "@/data/events";
import ImageComponent from "../image-component";

const OurPartners = () => {
  return (
    <div className="partners-div-container">
      <div className="partners-title-container">
        <h1 className="partners-title">Our Partners</h1>
      </div>
      <div className="partners-container">
        {OurPartnersData.map((partner) => (
        <ImageComponent key={partner.image} image={partner.image}/>
        ))}
      </div>
    </div>
  )
}

export default OurPartners