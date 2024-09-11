import { Link } from "react-router-dom";

import "@/styles/order-details.scss";
import OrderDetailsTable from "@/components/order-details-table";

const OrderDetailsPage = () => {
  return (
    <div className="">
      <div className="my-tickets-back-button-container">
        <Link to="/orders">
          <button className="back-button">Back to orders</button>
        </Link>
      </div>
      <div className="order-details-container">
        <div className="order-details-title-container">
          <span className="order-number">Orders #1282882</span>
          <button className="print-invoice">Print Invoice</button>
        </div>
        <div className="order-description-container">
          <span className="order-description">
            Ordered by Jalu Wibawa (jalu.detyawibawa2013@gmail.com) on Sep 5, 2021 at 1:03 PM (WIB) <br />
            Free order Collection type: Each Attendee
          </span>
        </div>
        <div className="order-event-table-container">
        <OrderDetailsTable/>
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsPage