import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../App";
import About from "../page/About";
import Photos from "../page/Photos/Photos.Page";
import PhotosById from "../page/Photos/[id]";
import FoodById from "../page/[id]";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/store/:id" element={<FoodById />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/photos/:id" element={<PhotosById />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
