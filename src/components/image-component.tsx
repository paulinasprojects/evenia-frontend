
interface ImageComponentProps {
  image: string;
}

const ImageComponent = ({ image }: ImageComponentProps) => {
  return (
    <img src={image} alt="" />
  )
}

export default ImageComponent