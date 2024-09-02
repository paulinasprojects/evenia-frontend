import "@/styles/event-card.scss";

interface EventCardProps {
  date?: string;
  title?: string;
  author?: string;
  image?: string;
  onClick?: () => void;
}


const EventCard = ({ date, title, author, image, onClick }: EventCardProps) => {
  return (
    <div className="event-card-container" onClick={onClick}>
      <img src={image} alt="" />
      <div className="event-card">
        <span className="event-date">{date}</span>
        <span className="event-title">{title}</span>
        <span className="event-author">{author}</span>
      </div>
    </div>
  )
}

export default EventCard