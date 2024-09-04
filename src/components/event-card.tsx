import "@/styles/event-card.scss";

interface EventCardProps {
  date?: string;
  title?: string;
  author?: string;
  image?: string;
  type?: "Paid" | "Unpaid";
  onClick?: () => void;
}


const EventCard = ({ date, title, author, image, type, onClick }: EventCardProps) => {
  return (
    <div className="event-card-container" onClick={onClick}>
      <img src={image} alt="" />
      <div className="event-card">
      <span>{type}</span>
        <span className="event-date">{date}</span>
        <span className="event-title">{title}</span>
        <span className="event-author">{author}</span>
      </div>
    </div>
  )
}

export default EventCard