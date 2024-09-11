import { IconType } from "react-icons"

interface IconProps {
  icon: IconType;
  onClick: () => void;
  className?: string;
}



const IconComponent = ({icon: Icon , onClick}: IconProps) => {
  return (
   <Icon onClick={onClick}/>
  )
}

export default IconComponent