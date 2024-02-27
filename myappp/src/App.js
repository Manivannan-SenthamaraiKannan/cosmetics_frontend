import "./App.css";
import {Routes, Route} from "react-router-dom";
import AdBanner from "./Layout/AdBanner";
import TopNav from "./Layout/TopNav";
import OfferCarousel from "./Components/Offer/OfferCarousel";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import ResetPassword from "./Authentication/ResetPassword";
import Footer from "./Layout/Footer";
import BrandCards from "./Components/BrandCards/BrandCards";
import SiteMap from "./Components/Footer/QuickLinks/SiteMap"

function App() {
    return (
        <div className="App">
            <AdBanner/>
            <TopNav/>
            {/*<OfferCarousel/>*/}
            {/*<BrandCards/>*/}
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/resetpassword" element={<ResetPassword/>}/>
            </Routes>
            <Routes>
                <Route path="/sitemap" element={< SiteMap/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
