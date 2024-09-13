import { BankDetailData } from "@/data/events";
import IconComponent from "./icon";
import "@/styles/bank-table.scss";

const BankTable = () => {
  return (
    <div className="bank-table-container">
      <table className="bank-table">
        <thead>
          <tr>
            <th className="account-holder-name">Account's Holder Name</th>
            <th className="bank-table-bank-name">Bank Name</th>
            <th className="bank-account-number">Account Number</th>
            <th className="bank-table-dots"></th>
          </tr>
        </thead>
        <tbody>
          {BankDetailData.map((account) => (
            <tr key={account.id}>
              <td className="account-name-td">{account.accountName}</td>
              <td className="bank-name-td">{account.bankName}</td>
              <td  className="account-number-td">{account.accountNumber}</td>
              <td className="order-event-table-dots">
                <IconComponent
                  icon={account.icon}
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

export default BankTable