import "@/styles/add-bank.scss";

const AddBank = () => {
  return (
    <div className="add-bank-container">
      <div className="add-bank-account-title-container">
        <span className="add-bank-account-title">Add Bank Account</span>
        <span className="add-bank-account-description">Please fill all the required information</span>
      </div>
      <div className="add-bank-banks-container">
        <input type="text" className="add-bank-input" placeholder="Account's Holder Information"  />
        <select className="add-bank-input" defaultValue="Select Bank">
          <option value="Select Bank"  disabled hidden>Select Bank</option>
          <option value="BCA">BCA</option>
          <option value="BNI">BCA</option>
        </select>
        <input type="number" className="add-bank-input" placeholder="Account Number"  />
      </div>
      <div className="add-bank-button-container">
        <button className="add-bank-back-button">Back</button>
        <button className="add-bank-save-button">Save</button>
      </div>
    </div>
  )
}

export default AddBank