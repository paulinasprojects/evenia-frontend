import "@/styles/new-withdrawal-page.scss";
import { useNavigate } from "react-router-dom";

const NewWithdrawalPage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div className="withdrawal-title-container">
        <span className="withdrawal-title">New  Withdrawal</span>
      </div>
      <div className="new-withdrawal-page-container">
        <div className="new-withdrawal-container">
          {/* Balance */}
        <div className="new-balance-container">
            <span className="my-balance">My Balance</span>
            <span className="withdrawal-balance">$ 10.000</span>
          </div>
          {/* Amount */}
          <div className="new-amount-container">
           <div className="amount-container">
           <label className="amount-label">Amount</label>
            <input type="number" className="amount-input" placeholder="$" min={1} max={100000}  />
            <label className="amount-label">Choose Bank</label>
            {/* <input type="text" width={603} height={62} className="bank-input" placeholder="Choose bank" /> */}
            <select className="bank-input">
              <option value="BCA">BCA - VIRTUAL ACCOUNT (7217288121)</option>
              <option value="BNI">BCA - VIRTUAL ACCOUNT (8567288121)</option>
            </select>
           </div>
           <div className="withdrawal-button-container">
            <button className="withdrawal-button" onClick={() => navigate("/new-withdrawal/new")}>Next</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewWithdrawalPage