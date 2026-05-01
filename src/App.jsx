// import Header from "./components/Header";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import AboutHome from "./pages/About/AboutHome";
// import Footer from "./components/Footer";
// import OrderServices from "./pages/OrderOfServices/OrderServices";
// import Login from "./pages/Register/Login";
// import Register from "./pages/Register/Register";
// import Gallery from "./pages/Gallery/Gallery";
// import Events from "./pages/Events/Events";
// import ContactMe from "./pages/ContactUs/ContactMe";
// import SponsorPayment from "./pages/Register/SponsorPayment";
// import AnnouncementDetails from "./pages/Announcments/AnnouncementDetails";
// import PrayerRequest from "./pages/Prayer/PrayerRequest";
// import WhatsappFloat from "./components/WhatsappFloat";
// import Verses from "./pages/Verses/Verses";
// import Profile from "./pages/Profile/Profile";
// import AdminLayout from "./Layouts/AdminLayout";
// import Users from "./pages/AdminPage/Users/UsersList"
// import Dashboard from "./pages/adminpage/Dashboard";
// import PrayerRequestAdmin from "./pages/AdminPage/PrayerRequestAdmin";
// import OrderofServiceList from "./pages/AdminPage/OrderOfService/OrderofServiceList";
// import OrderOfServiceAdd from "./pages/AdminPage/OrderOfService/OrderOfServiceAdd";
// import OrderOfServiceEdit from "./pages/AdminPage/OrderOfService/OrderOfServiceEdit";
// import UsersList from "./pages/AdminPage/Users/UsersList";
// import UsersEdit from "./pages/AdminPage/Users/UsersEdit";
// import PrayerRequestList from "./pages/AdminPage/PrayerRequest/PrayerRequestList";
// import PrayerRequestEdit from "./pages/AdminPage/PrayerRequest/PrayerRequestEdit";
// import EventList from "./pages/AdminPage/EventPage/EventList";
// import EventAdd from "./pages/AdminPage/EventPage/EventAdd";
// import EventEdit from "./pages/AdminPage/EventPage/EventEdit";
// import EventsSection from "./pages/AdminPage/EventPage/EventsSection";
// import AnnounsmentList from "./pages/AdminPage/Announsment/AnnounsmentList";
// import AnnounsmentAdd from "./pages/AdminPage/Announsment/AnnounsmentAdd";
// import AnnounsmentEdit from "./pages/AdminPage/Announsment/AnnounsmentEdit";
// import MinistriesList from "./pages/AdminPage/Ministries/MinistriesList";
// import MinistriesAdd from "./pages/AdminPage/Ministries/MinistriesAdd";
// import MinistriesEdit from "./pages/AdminPage/Ministries/MinistriesEdit";
// import GalleryList from "./pages/AdminPage/GalleryPage/GalleryList";
// import GallerySection from "./pages/AdminPage/GalleryPage/GallerySection";
// import SponsorList from "./pages/AdminPage/Sponsor/SponsorList";
// import SponsorEdit from "./pages/AdminPage/Sponsor/SponsorEdit";
// import ContactList from "./pages/AdminPage/Contact/ContactList";
// import ContactEdit from "./pages/AdminPage/Contact/ContactEdit";
// import VerseList from "./pages/AdminPage/BibleVerse/VerseList";
// import VerseAdd from "./pages/AdminPage/BibleVerse/VerseAdd";
// import VerseEdit from "./pages/AdminPage/BibleVerse/VerseEdit";
// import Logout from "./pages/AdminPage/Auth/Logout";
// import { useState, useEffect } from "react";





// function App() {
 
//   return (

    
//     <BrowserRouter>
  
//       <Routes>

//         {/* PUBLIC ROUTES */}
//         <Route
//           path="/*"
//           element={
//             <>
//               <Header />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<AboutHome />} />
//                 <Route path="/events" element={<Events />} />
//                 <Route path="/services" element={<OrderServices />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/payment" element={<SponsorPayment />} />
//                 <Route path="/contact" element={<ContactMe />} />
//                 <Route path="/announcement-details" element={<AnnouncementDetails />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/prayer-request" element={<PrayerRequest />} />
//                 <Route path="/bible-verses" element={<Verses />} />
//                 <Route path="/profile" element={<Profile />} />
//               </Routes>
//               <WhatsappFloat />
//               <Footer />
//             </>
//           }
//         />

//         {/* ADMIN ROUTES */}
//         <Route path="/admin" element={<AdminLayout />}>
//           <Route path="dashboard" element={<Dashboard/>} />
//           {/* <Route path="users" element={<Userslist/>}/> */}
//           <Route path="users" element={<UsersList/>}/>
//           <Route path="users/edit/:id" element={<UsersEdit />} />
//           <Route path="/admin/services" element={<OrderofServiceList />} />
// <Route path="/admin/services/add" element={<OrderOfServiceAdd />} />
// <Route path="/admin/services/edit/:id" element={<OrderOfServiceEdit />} />
// <Route path="prayer-requests" element={<PrayerRequestList />} />
// <Route path="prayer-requests/edit/:id" element={<PrayerRequestEdit />} />
// <Route path="events" element={<EventList />} />
// <Route path="events/add" element={<EventAdd />} />
// <Route path="events/edit/:id" element={<EventEdit />} />
// <Route path="events/section" element={<EventsSection/>}/>
// <Route path="announcements" element={<AnnounsmentList />} />
// <Route path="announcements/add" element={<AnnounsmentAdd />} />
// <Route path="announcements/edit/:id" element={<AnnounsmentEdit />} />
// <Route path="ministries" element={<MinistriesList />} />
// <Route path="ministries/add" element={<MinistriesAdd />} />
// <Route path="ministries/edit/:id" element={<MinistriesEdit />} />
// <Route path="gallery" element={<GalleryList />} />
// <Route path="gallery/section" element={<GallerySection />} />
// <Route path="sponsors" element={<SponsorList />} />
// <Route path="sponsors/edit/:id" element={<SponsorEdit />} />
// <Route path="contact" element={<ContactList />} />
// <Route path="contact/edit/:id" element={<ContactEdit />} />
// <Route path="bible-verses" element={<VerseList />} />
// <Route path="bible-verses/add" element={<VerseAdd />} />
// <Route path="bible-verses/edit/:id" element={<VerseEdit />} />


//         </Route>
// <Route path="/admin/logout" element={<Logout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

// PUBLIC
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
import PrayerRequest from "./pages/Prayer/PrayerRequest";
import WhatsappFloat from "./components/WhatsappFloat";
import Verses from "./pages/Verses/Verses";
import Profile from "./pages/Profile/Profile";

// ADMIN
import AdminLayout from "./Layouts/AdminLayout";
import Dashboard from "./pages/adminpage/Dashboard";
import UsersList from "./pages/AdminPage/Users/UsersList";
import UsersEdit from "./pages/AdminPage/Users/UsersEdit";
import OrderofServiceList from "./pages/AdminPage/OrderOfService/OrderofServiceList";
import OrderOfServiceAdd from "./pages/AdminPage/OrderOfService/OrderOfServiceAdd";
import OrderOfServiceEdit from "./pages/AdminPage/OrderOfService/OrderOfServiceEdit";
import PrayerRequestList from "./pages/AdminPage/PrayerRequest/PrayerRequestList";
import PrayerRequestEdit from "./pages/AdminPage/PrayerRequest/PrayerRequestEdit";
import EventList from "./pages/AdminPage/EventPage/EventList";
import EventAdd from "./pages/AdminPage/EventPage/EventAdd";
import EventEdit from "./pages/AdminPage/EventPage/EventEdit";
import EventsSection from "./pages/AdminPage/EventPage/EventsSection";
import AnnounsmentList from "./pages/AdminPage/Announsment/AnnounsmentList";
import AnnounsmentAdd from "./pages/AdminPage/Announsment/AnnounsmentAdd";
import AnnounsmentEdit from "./pages/AdminPage/Announsment/AnnounsmentEdit";
import MinistriesList from "./pages/AdminPage/Ministries/MinistriesList";
import MinistriesAdd from "./pages/AdminPage/Ministries/MinistriesAdd";
import MinistriesEdit from "./pages/AdminPage/Ministries/MinistriesEdit";
import GalleryList from "./pages/AdminPage/GalleryPage/GalleryList";
import GallerySection from "./pages/AdminPage/GalleryPage/GallerySection";
import SponsorList from "./pages/AdminPage/Sponsor/SponsorList";
import SponsorEdit from "./pages/AdminPage/Sponsor/SponsorEdit";
import ContactList from "./pages/AdminPage/Contact/ContactList";
import ContactEdit from "./pages/AdminPage/Contact/ContactEdit";
import VerseList from "./pages/AdminPage/BibleVerse/VerseList";
import VerseAdd from "./pages/AdminPage/BibleVerse/VerseAdd";
import VerseEdit from "./pages/AdminPage/BibleVerse/VerseEdit";
import Logout from "./pages/AdminPage/Auth/Logout";

// LOADER
import Loader from "./components/Admin/Loader";


// ADMIN-ONLY LOADER WRAPPER
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // ✅ ONLY ADMIN ROUTES
  //   if (location.pathname.startsWith("/admin")) {
  //     setLoading(true);

  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 400);

  //     return () => clearTimeout(timer);
  //   }
  // }, [location]);

  useEffect(() => {
  const isAdmin = location.pathname.startsWith("/admin");
  const isLogout = location.pathname === "/admin/logout";

  if (isAdmin && !isLogout) {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }
}, [location]);
  return (
    <>
      {/*  Loader only for admin */}
      {/* {loading && location.pathname.startsWith("/admin") && <Loader />} */}
      {loading &&
  location.pathname.startsWith("/admin") &&
  location.pathname !== "/admin/logout" && <Loader />}

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutHome />} />
                <Route path="/events" element={<Events />} />
                <Route path="/services" element={<OrderServices />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/payment" element={<SponsorPayment />} />
                <Route path="/contact" element={<ContactMe />} />
                <Route path="/announcement-details" element={<AnnouncementDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/prayer-request" element={<PrayerRequest />} />
                <Route path="/bible-verses" element={<Verses />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
              <WhatsappFloat />
              <Footer />
            </>
          }
        />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="users" element={<UsersList />} />
          <Route path="users/edit/:id" element={<UsersEdit />} />

          <Route path="services" element={<OrderofServiceList />} />
          <Route path="services/add" element={<OrderOfServiceAdd />} />
          <Route path="services/edit/:id" element={<OrderOfServiceEdit />} />

          <Route path="prayer-requests" element={<PrayerRequestList />} />
          <Route path="prayer-requests/edit/:id" element={<PrayerRequestEdit />} />

          <Route path="events" element={<EventList />} />
          <Route path="events/add" element={<EventAdd />} />
          <Route path="events/edit/:id" element={<EventEdit />} />
          <Route path="events/section" element={<EventsSection />} />

          <Route path="announcements" element={<AnnounsmentList />} />
          <Route path="announcements/add" element={<AnnounsmentAdd />} />
          <Route path="announcements/edit/:id" element={<AnnounsmentEdit />} />

          <Route path="ministries" element={<MinistriesList />} />
          <Route path="ministries/add" element={<MinistriesAdd />} />
          <Route path="ministries/edit/:id" element={<MinistriesEdit />} />

          <Route path="gallery" element={<GalleryList />} />
          <Route path="gallery/section" element={<GallerySection />} />

          <Route path="sponsors" element={<SponsorList />} />
          <Route path="sponsors/edit/:id" element={<SponsorEdit />} />

          <Route path="contact" element={<ContactList />} />
          <Route path="contact/edit/:id" element={<ContactEdit />} />

          <Route path="bible-verses" element={<VerseList />} />
          <Route path="bible-verses/add" element={<VerseAdd />} />
          <Route path="bible-verses/edit/:id" element={<VerseEdit />} />

        </Route>

        {/* LOGOUT (NO HEADER / FOOTER) */}
        <Route path="/admin/logout" element={<Logout />} />

      </Routes>
    </>
  );
}


//  MAIN APP
export default function App() {
  
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
