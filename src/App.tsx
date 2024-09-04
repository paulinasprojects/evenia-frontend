import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import Layout from "./components/layouts/layout"
import EventDetailsPage from "./pages/event-details-page"
import UserProfile from "./pages/user-profile"
import Register from "./pages/register"
import SignIn from "./pages/sign-in"
import MyTickets from "./pages/my-tickets"

const App = () => {
  return (
   <Routes>
    <Route path="/register" element={<Layout><Register/></Layout>}/>
    <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>
    <Route path="/" element={<Layout><HomePage/></Layout>}/>
    <Route path="/user-profile/:userId" element={<Layout><UserProfile/></Layout>}/>
    <Route path="/detail/:eventId" element={<Layout><EventDetailsPage/></Layout>}/>
    <Route path="/my-tickets" element={<Layout><MyTickets/></Layout>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}


export default App
