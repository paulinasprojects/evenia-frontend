import { WithdrawalsData } from "@/data/events"
import IconComponent from "./icon"

const WithdrawalTable = () => {
  return (
    <div className="withdrawal-table-container">
      <table className="withdrawal-table">
        <thead>
          <tr>
            <th className="withdrawal-th-id">ID</th>
            <th className="withdrawal-date">Date</th>
            <th className="withdrawal-total">Total</th>
            <th className="withdrawal-method">Method</th>
            <th className="withdrawal-status">Status</th>
            <th className="withdrawal-dots"/>
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
              <td className="withdrawal-table-dots-container">
                <IconComponent
                  icon={withdrawal.icon}
                  className="withdrawal-table-dots"
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