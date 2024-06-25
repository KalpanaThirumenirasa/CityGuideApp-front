import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Unregistered Area/Home";
import Login from "./Pages/Unregistered Area/Login";
import Register from "./Pages/Unregistered Area/Register";
import Explore from "./Pages/Unregistered Area/Explore";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("lan") || "en"; 
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
