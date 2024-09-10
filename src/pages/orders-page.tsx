import OrdersEventEmpty from "@/components/order-events-empty";
import OrdersEventTable from "@/components/orders-event-table";
import Pagination from "@/components/pagination";
import "@/styles/orders-page.scss";

const orders = true;

const OrdersPage = () => {
  return (
    <div>
      <div className="orders-title-container">
        <span className="orders-title">Orders</span>
      </div>
        {orders ? (
          <>
        <div className="orders-event-input-container">
          <div className="orders-event-second-input-container">
            <input type="text" placeholder="Search order number, email, name" className="orders-input" />
            <input type="text" placeholder="Date Range" className="orders-date-range-input" />
          </div>
        </div>
        <div className="order-event-table-container">
          <OrdersEventTable/>
        </div>
        <div className="manage-event-pagination-container">
          <Pagination/>
        </div> 
          </>
        ) : (
        <OrdersEventEmpty/>
        )}
    </div>
  )
}

export default OrdersPage