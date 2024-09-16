import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "@/lib/utils";
import { BankDetailData } from "@/data/events";
import IconComponent from "./icon";
import "@/styles/bank-table.scss";

const BankTable = () => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState<string | null>(null);

  const handleOpen = (id: string) => {
    setOpen((prev) => (prev === id ? null : id))
  };

  const handleClose = () => {
    setOpen(null);
  };

  useClickOutside(menuRef, handleClose);

  return (
    <div className="bank-table-container">
      <table className="bank-table">
        <thead>
          <tr>
            <th className="account-holder-name">Account's Holder Name</th>
            <th className="bank-table-bank-name">Bank Name</th>
            <th className="bank-account-number">Account Number</th>
            <th className="bank-table-dots"/>
          </tr>
        </thead>
        <tbody>
          {BankDetailData.map((account) => (
            <tr key={account.id}>
              <td className="account-name-td">{account.accountName}</td>
              <td className="bank-name-td">{account.bankName}</td>
              <td  className="account-number-td">{account.accountNumber}</td>
              <td className="manage-event-table-dots ">
                <IconComponent
                  icon={account.icon}
                  className="order-event-dots"
                  onClick={() => handleOpen(account.id)}
                />
                {open === account.id && (
                  <div className="event-dots-menu" ref={menuRef}>
                    <Link 
                      to="/bank/edit-bank" 
                      className="bank-dots-link">
                      Edit Bank
                    </Link>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BankTable