import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home-page"
import Layout from "./components/layouts/layout"
import EventDetailsPage from "./pages/event-details-page"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout><HomePage/></Layout>}/>
    <Route path="/user-profile" element={<span>User Profile Page</span>}/>
    <Route path="/detail/:eventId" element={<Layout><EventDetailsPage/></Layout>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  )
}


export default App
