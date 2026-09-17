import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
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

        {/* Member Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/submit-claim" element={<SubmitClaim />} />

        {/* Staff Pages */}
        <Route path="/staff-dashboard" element={<StaffDashboard />} />
        <Route path="/staff-claims" element={<StaffClaims />} />
        <Route path="/staff-payments" element={<StaffPayments />} />
        
      </Routes>
    </BrowserRouter>
  );
}  

export default App;
