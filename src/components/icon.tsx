import { IconType } from "react-icons"

interface IconProps {
  icon: IconType;
  onClick: () => void;
}



const IconComponent = ({icon: Icon , onClick}: IconProps) => {
  return (
   <Icon onClick={onClick}/>
  )
}

export default IconComponent