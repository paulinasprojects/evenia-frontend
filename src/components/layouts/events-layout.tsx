import EventsHeader from "../events-header"
import Footer from "../footer"


interface EventsLayoutProps {
  children: React.ReactNode;
}

const EventsLayout = ({ children }: EventsLayoutProps) => {
  return (
    <div className="main-layout">
      <EventsHeader/>
      <div className="children-container">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default EventsLayout