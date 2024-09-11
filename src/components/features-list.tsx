import { IconType } from "react-icons"

interface FeaturesListProps {
  icon: IconType;
  title: string;
  description: string;
}


const FeaturesList = ({icon: Icon, title, description}: FeaturesListProps) => {
  return ( 
    <div className="features-list">
      <div className="features-list-container">
        <div className="features-round">
          <Icon className="features-globe"/>
        </div>
      </div>
      <div className="features-text">
        <span className="features-create">{title}</span>
        <span className="features-donations">{description}</span>
      </div>
    </div>
  )
}

export default FeaturesList;