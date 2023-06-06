import React from "react";
import Header from "../Components/Header/Header";
import Home from "../Components/Pages/Home";
import Blogs from "../Components/Pages/Blogs";
import Contact from "../Components/Pages/Contact";
import DevJokes from "../Components/Pages/DevJokes";
import DataPassing from "../Components/Pages/DataPassing";
import Footer from "../Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function Container(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/devJokes" element={<DevJokes />} />
        <Route path="/dataPassing" element={<DataPassing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Container;
