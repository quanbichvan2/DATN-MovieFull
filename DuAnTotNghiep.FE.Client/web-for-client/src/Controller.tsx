import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home-page/index"
import AboutUs from "./pages/information-page/aboutUs";
import MovieList from "./pages/movieList-page/index"
import ShowScheduleMovie from "./pages/showSchedule-page/index";
import ProfilePage from "./pages/profile-page/index"
import PromotionPage from "./pages/promotion-page/index"
import BookingPage from "./pages/booking-page";
import IdentityPage from "../src/pages/identity-page/login&register"
import PaymentPage from "../src/pages/payment-page/index"
import ForgetpasswordPage from "../src/pages/identity-page/forgetpassword"
import RulePage from "../src/pages/rule-page/index"
// router ở đây
function Router() {
    return (
        <Routes>
            <Route path="/" element={< Homepage />} />
            <Route path="/home" element={< Homepage/>} />
            <Route path="/movie/:movieId" element={< BookingPage/>} />
            <Route path="/aboutUs" element={< AboutUs />} />
            <Route path="/movie-list" element={< MovieList />} />
            <Route path="/movie-list/:type" element={< MovieList />} />
            <Route path="/schedule-movie" element={< ShowScheduleMovie />} />
            <Route path="/profile" element={< ProfilePage/>} />
            <Route path="/promotion" element={< PromotionPage/>} /> 
            <Route path="/identity" element={< IdentityPage/>} />
            <Route path="/payment" element={< PaymentPage/>} />
            <Route path="/forgetpassword" element={< ForgetpasswordPage/>} />
            <Route path="/rule" element={< RulePage/>} />
        </Routes>
    );
}

export default Router;
