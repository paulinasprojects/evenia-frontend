import { WithdrawalsData } from "@/data/events"
import IconComponent from "./icon"

const WithdrawalTable = () => {
  return (
    <div className="order-table-container">
      <table className="order-event-table">
        <thead>
          <tr>
            <th className="withdrawal-th-id">ID</th>
            <th className="withdrawal-date">Date</th>
            <th>Total</th>
            <th className="withdrawal-method">Method</th>
            <th className="withdrawal-status">Status</th>
            <th className="withdrawal-dots"></th>
          </tr>
        </thead>
        <tbody>
          {WithdrawalsData.map((withdrawal) => (
            <tr key={withdrawal.id}>
              <td className="withdrawal-id">{withdrawal.id}</td>
              <td className="withdrawal-td">{withdrawal.date}</td>
              <td className="withdrawal-td">{withdrawal.total}</td>
              <td className="withdrawal-td">{withdrawal.method}</td>
              <td className="withdrawal-td-status">{withdrawal.status}</td>
              <td className="order-event-table-dots">
                <IconComponent
                  icon={withdrawal.icon}
                  className="order-event-dots"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WithdrawalTable