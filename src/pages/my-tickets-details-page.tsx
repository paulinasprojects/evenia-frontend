import { Link } from "react-router-dom"
import myticketimg from  "/my-ticket.png";
import "@/styles/my-tickets-details.scss";

const MyTicketsDetailsPage = () => {
  return (
    <div>
      <div className="my-tickets-back-button-container">
        <Link to="/my-tickets">
          <button className="back-button">Back to tickets</button>
        </Link>
      </div>
      <div className="my-ticket-container">
        <img src={myticketimg} alt="" className="my-ticket-image" />
        <div className="my-ticket-test">
          <span className="my-ticket-going-to">You're Going To</span>
          <span className="my-ticket-paid">Unpaid</span>
        </div>
        <div className="my-ticket-title-container">
          <h1 className="my-ticket-title">
            Learn design sprint <br />
            with Jake Knapp
          </h1>
        </div>
        <div className="my-ticket-author-container">
          <span className="my-ticket-author">by IrisReading.com</span>
        </div>  
        <div className="my-ticket-date-container">
          <div className="my-ticket-subtotal-container">
            <span className="my-ticket-subtotal">Subtotal</span>
            <span className="my-ticket-email">jalubold@gmail.com</span>
          </div>
          <div className="my-ticket-date-time-container">
            <span className="my-ticket-date">Date</span>
            <span className="my-ticket-time">Tue, Sep 7, 2021 1:00 AM- <br /> 2 : 00 AM </span>
          </div>
        </div>
        <div className="my-ticket-note-container">
          <span className="my-ticket-note">Note</span>
          <span className="my-ticket-pin">Pin : 8383838</span>
        </div>
        <div className="my-ticket-total-container">
          <span className="my-ticket-total">Total</span>
          <span className="my-ticket-price">$732.58</span>
        </div>
        <div className="my-ticket-pay-now">
          <button className="my-ticket-pay-now-button">Pay Now</button>
        </div>
      </div>
    </div>
  )
}

export default MyTicketsDetailsPage