import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdBanner from "./Layout/AdBanner";
import TopNav from "./Layout/TopNav";
import Offer from "./Components/Offer/Offer";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Resetpassword from "./Authentication/ResetPassword";
import Footer from "./Layout/Footer";


function App() {
  return (
    <div className="App">
      <AdBanner />
      <TopNav />
      <Offer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
