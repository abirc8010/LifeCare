import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import Nutrition from "./components/Nutrition.jsx";
import About from "./components/About.jsx";
import BookingPage from "./components/Booking/Booking.jsx";
import Consultancy from "./components/Consultancy/Consultancy.jsx";
export default function(){
    return (
     <BrowserRouter>
     <Header/>
       <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/services" element={<Services/>}>
          </Route>
          <Route path="/nutrition" element={<Nutrition/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/video" element={<Consultancy/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
          <Route path="/booking/:consultID" element={<Consultancy/>}></Route>          
      </Routes>
     </BrowserRouter>
  );
}
