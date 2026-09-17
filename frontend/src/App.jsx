import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import StaffLogin from "./pages/StaffLogin";
import About from "./pages/About";

import Dashboard from "./pages/Dashboard";
import Claims from "./pages/Claims";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import SubmitClaim from "./pages/SubmitClaim";

import StaffPayments from "./pages/StaffPayments";
import StaffClaims from "./pages/StaffClaims";
import StaffDashboard from "./pages/StaffDashboard";

function App() {

  return(
    <BrowserRouter> 
      <Routes>

        {/* Welcome Page */}
        <Route path="/" element={<Home />} />

        {/* Member Pages */}
        <Route path="/member-login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/submit-claim" element={<SubmitClaim />} />

        {/* Staff Pages */}
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/staff-claims" element={<StaffClaims />} />
        <Route path="/staff-payments" element={<StaffPayments />} />

        {/* About us*/}
        <Route path="/about" element={<About />} />
        
      </Routes>

    </BrowserRouter>
  );
}  

export default App;
