import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import Layout from "./components/layouts/layout"
import EventsLayout from "./components/layouts/events-layout"
import EventDetailsPage from "./pages/event-details-page"
import UserProfile from "./pages/user-profile"
import Register from "./pages/register"
import SignIn from "./pages/sign-in"
import MyTickets from "./pages/my-tickets"
import MyTicketsDetailsPage from "./pages/my-tickets-details-page"
import AccountSettings from "./pages/account-settings"
import ManageMyEventsPage from "./pages/manage-my-events-page"
import OrdersPage from "./pages/orders-page"
import OrderDetailsPage from "./pages/order-details.page"
import WithdrawalPage from "./pages/withdrawal-page"
import NewWithdrawalPage from "./pages/new-withdrawal-page"
import BankWithdrawalPage from "./pages/bank-withdrawal-page"
import BankPage from "./pages/bank-page"
import AddBank from "./pages/add-bank-page"
import EditBankPage from "./pages/edit-bank"
import CreateEventPage from "./pages/create-event-page"
import CreateEventNextPage from "./pages/create-event-next"
import CreateEventAddTicket from "./pages/create-event-add-ticket"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout><HomePage/></Layout>}/>
    <Route path="/register" element={<Layout><Register/></Layout>}/>
    <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>
    <Route path="/user-profile/:userId" element={<Layout><UserProfile/></Layout>}/>
    <Route path="/account-settings" element={<Layout><AccountSettings/></Layout>}/>
    <Route path="/create-event" element={<EventsLayout><CreateEventPage/></EventsLayout>}/>
    <Route path="/create-event/next" element={<EventsLayout><CreateEventNextPage/></EventsLayout>}/>
    <Route path="/create-event/add-ticket" element={<EventsLayout><CreateEventAddTicket/></EventsLayout>}/>
    <Route path="/detail/events/:eventId" element={<Layout><EventDetailsPage/></Layout>}/>
    <Route path="/my-tickets" element={<Layout><MyTickets/></Layout>}/>
    <Route path="/manage-my-events" element={<EventsLayout><ManageMyEventsPage/></EventsLayout>}/>
    <Route path="/orders" element={<EventsLayout><OrdersPage/></EventsLayout>}/>
    <Route path="/detail/orders/:orderId" element={<EventsLayout><OrderDetailsPage/></EventsLayout>}/>
    <Route path="/withdrawal" element={<EventsLayout><WithdrawalPage/></EventsLayout>}/>
    <Route path="/new-withdrawal" element={<EventsLayout><NewWithdrawalPage/></EventsLayout>}/>
    <Route path="/new-withdrawal/new" element={<EventsLayout><BankWithdrawalPage/></EventsLayout>}/>
    <Route path="/my-tickets/:ticketId" element={<Layout><MyTicketsDetailsPage/></Layout>}/>
    <Route path="/bank" element={<EventsLayout><BankPage/></EventsLayout>}/>
    <Route path="/bank/add-bank" element={<EventsLayout><AddBank/></EventsLayout>}/>
    <Route path="/bank/edit-bank" element={<EventsLayout><EditBankPage/></EventsLayout>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}


export default App
