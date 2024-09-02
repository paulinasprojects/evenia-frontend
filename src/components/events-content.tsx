
interface EventContentProps {
  content: React.ReactNode;
}

const EventContent = ({ content }: EventContentProps) => {
  return (
    <div>{content}</div>
  )
}

export default EventContent