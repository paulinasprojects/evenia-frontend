const OrderDetailsTable = () => {
  return (
    <div className="order-table-container">
      <table className="order-details-event-table">
        <thead>
          <tr>
            <th className="order-attendee">Attende</th>
            <th  className="order-time">Time</th>
            <th  className="order-paid">Paid</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Sep 5, 2021 at 1:03 PM (WIB)</td>
            <td>$750</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderDetailsTable