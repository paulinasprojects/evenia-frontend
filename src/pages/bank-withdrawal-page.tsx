import "@/styles/bank-withdrawal.scss"

const BankWithdrawalPage = () => {
  return (
    <div>
      <div className="withdrawal-title-container">
        <span className="withdrawal-title">New Withdrawal</span>
      </div>
      <div className="new-withdrawal-page-container">
        <div className="new-withdrawal-container">
          {/* Balance */}
        <div className="bank-withdrawal-container">
            <span className="my-balance">My Balance</span>
            <span className="withdrawal-balance">$ 10.000</span>
          </div>
          {/* Amount */}
          <div className="bank-withdrawal-second-container">
            <div className="bank-withdrawal-information-container">
              <span className="withdrawal-to">Withdrawal to</span>
              <div className="withdrawal-bank">
                <span>Bank</span>
                <span>BCA</span>
              </div>
              <div className="withdrawwal-bank-no">
                <span>Bank No</span>
                <span>7217288121</span>
              </div>
              <div className="withdrawal-shop-name">
                <span>Shop Name</span>
                <span>Seller Shop</span>
              </div>
            </div>
            <div className="bank-withdrawal-details-container">
              <span className="withdrawal-to">Withdrawal Details</span>
              <div className="withdrawal-bank">
                <span>Total Balance</span>
                <span>2.500</span>
              </div>
              <div className="withdrawwal-bank-no">
                <span>Fee</span>
                <span>Gratis</span>
              </div>
              <div className="withdrawal-shop-name">
                <span>Total Withdrawal</span>
                <span>2.500</span>
              </div>
            </div>
           <div className="withdrawal-button-container">
            <button className="withdrawal-button">Withdrawal</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankWithdrawalPage