import WithdrawalTable from "@/components/withdrawal-table";
import "@/styles/withdrawal-page.scss";

const WithdrawalPage = () => {
    return (
      <div>
        <div className="withdrawal-title-container">
          <span className="withdrawal-title">Withdrawal</span>
        </div>
        <div className="withdrawal-page-container">
          <div className="balance-container">
            <span className="my-balance">My Balance</span>
            <span className="withdrawal-balance">$ 10.000</span>
          </div>
        <div className="orders-event-input-container">
          <div className="orders-event-second-input-container">
            <input type="text" placeholder="Search order" className="orders-input" />
            <input type="text" placeholder="Date Range" className="orders-date-range-input" />
          </div>
        </div>
        <div className="order-event-table-container">
          <WithdrawalTable/>
        </div>
        </div>
      </div>
    )
  }
  
  export default WithdrawalPage