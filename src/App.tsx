import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Explore from "./Pages/Explore";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
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
