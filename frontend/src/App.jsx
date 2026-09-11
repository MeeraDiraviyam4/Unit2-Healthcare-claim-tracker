import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Claims from "./pages/Claims";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import SubmitClaim from "./pages/SubmitClaim";

function App() {

  return(
    <BrowserRouter> {/* wraps the application to enable routing functionality */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/submit-claim" element={<SubmitClaim />} />
      </Routes>
    </BrowserRouter>
  );
}  

export default App;
