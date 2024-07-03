// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Unregistered Area/Home";
import Login from "./Pages/Unregistered Area/Login";
import Register from "./Pages/Unregistered Area/Register";
import Explore from "./Pages/Unregistered Area/Explore";
import Hotels from "./Pages/Registered Area/Hotels";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import Restaurents from "./Pages/Registered Area/Restaurents";
import Loader from "./Pages/Admin/layouts/loader/Loader";
import React, { Suspense } from "react";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddHotels from "./Pages/Admin/AddHotels";
import EditHotels from "./Pages/Admin/EditHotels";
import AddEvent from "./Pages/Admin/AddEvent";
import EditEvent from "./Pages/Admin/EditEvent";
import AddTouristplace from "./Pages/Admin/AddTouristplace";
import EditTouristplace from "./Pages/Admin/EditTouristplace";
import { useSelector } from "react-redux";
import { RootState } from "./Features/store";
import Hotel from "./Pages/Registered Area/Hotel";
import { ToastContainer } from "react-toastify";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("lan") || "en";
    i18n.changeLanguage(language);
  }, [i18n]);

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/restaurents" element={<Restaurents />}></Route>
        <Route path="/addHotels" element={<AddHotels />}></Route>
        <Route path="/editHotels/:id" element={<EditHotels />} />
        <Route path="/addEvent" element={<AddEvent />}></Route>
        <Route path="/editEvent/:id" element={<EditEvent />}></Route>
        <Route path="/addTouristplace" element={<AddTouristplace />}></Route>
        <Route path="/editTouristplace/:id" element={<EditTouristplace />}></Route>
        {/* <Route path="/event" element={<Event />}></Route> */}

        <Route
          path="/adminDashBoard/*"
          element={
            <Suspense fallback={<Loader />}>
              <AdminDashboard />
            </Suspense>
          }
        ></Route>
        {isLoggedIn && <Route path="explore/hotel" element={<Hotel />} />}
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
