import BankTable from "@/components/bank-table";
import Pagination from "@/components/pagination";
import "@/styles/bank-page.scss";
import { useNavigate } from "react-router-dom";

const BankPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bank-page-container">
      <div className="bank-title-container">
        <span className="bank-title">Bank</span>
        <button className="add-bank-button" onClick={() => navigate("/bank/add-bank")}>Add Bank</button>
      </div>
      <div className="bank-page-table-container">
        <BankTable/>
      </div>
      <div className="bank-page-pagination-container">
        <Pagination/>
      </div>
    </div>
  )
}

export default BankPage