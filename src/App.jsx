import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutHome from "./pages/About/AboutHome";
import Footer from "./components/Footer";
import OrderServices from "./pages/OrderOfServices/OrderServices";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import Gallery from "./pages/Gallery/Gallery";
import Events from "./pages/Events/Events";
import ContactMe from "./pages/ContactUs/ContactMe";
import SponsorPayment from "./pages/Register/SponsorPayment";
import AnnouncementDetails from "./pages/Announcments/AnnouncementDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AboutHome />} path="/about" />
          <Route element={<Events />} path="/events" />
          <Route element={<OrderServices />} path="/services" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<SponsorPayment />} path="/payment" />
          <Route element={<ContactMe />} path="/contact" />
          <Route element={<AnnouncementDetails />} path="/announcements" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
