import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Pages/Home";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Contact from "../Components/Pages/Contact";
import DevJokes from "../Components/Pages/DevJokes";
import DataPassing from "../Components/Pages/DataPassing";
import UseEffect from "../Components/Common/UseEffect";
import UseRef from "../Components/Common/UseRef";
import Footer from "../Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

function Container(props) {
  const { theme } = useContext(ThemeContext);
  // console.log(theme === "light");

  return (
    <div
      className={
        theme === "light"
          ? "min-h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-blue-200 background-animate"
          : "min-h-screen bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
      }
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devJokes" element={<DevJokes />} />
        <Route path="/dataPassing" element={<DataPassing />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useRef" element={<UseRef />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Container;
