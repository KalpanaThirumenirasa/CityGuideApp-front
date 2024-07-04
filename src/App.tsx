import "./App.css";
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
import { Suspense } from "react";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddHotels from "./Pages/Admin/AddHotels";
import EditHotels from "./Pages/Admin/EditHotels";
import AddEvent from "./Pages/Admin/AddEvent";
import EditEvent from "./Pages/Admin/EditEvent";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Features/store";
import Hotel from "./Pages/Registered Area/Hotel";
import { ToastContainer } from "react-toastify";
import { validateToken } from "./Features/Slices/authSlice";
import ChatBox from "./Components/ChatBox";
import { getChatUser } from "./Features/Slices/chatSlice";
import AddRestaurant from "./Pages/Admin/AddRestaurant";
import EditRestaurant from "./Pages/Admin/EditRestaurant";
import AddTouristplace from "./Pages/Admin/AddTouristplace";
import EditTouristplace from "./Pages/Admin/EditTouristplace";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, userId } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const language = localStorage.getItem("lan") || "en";
    i18n.changeLanguage(language);

    const validate = async () => {
      await dispatch(validateToken);
    };
    validate();
  }, [i18n, dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(getChatUser(userId));
    }
  }, [dispatch, userId]);

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
        <Route path="/addRestaurant" element={<AddRestaurant />}></Route>
        <Route path="/editRestaurant/:id" element={<EditRestaurant />} />
        <Route path="/addEvent" element={<AddEvent />}></Route>
        <Route path="/editEvent/:id" element={<EditEvent />}></Route>
        <Route path="/addTouristPlace" element={<AddTouristplace />}></Route>
        <Route path="/editTouristPlace/:id" element={<EditTouristplace />}></Route>
        <Route
          path="/adminDashBoard/*"
          element={
            <Suspense fallback={<Loader />}>
              <AdminDashboard />
            </Suspense>
          }
        ></Route>
        <Route path="explore/hotel" element={<Hotel />} />
      </Routes>
      {isLoggedIn && <ChatBox />}
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
