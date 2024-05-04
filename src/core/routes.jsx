import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../App";
import About from "../page/About";
import Comments from "../page/Comments/Comments.Page";
import CommentsById from "../page/Comments/[id]";
import Error from "../page/Error.Page";
import Menu from "../page/Menu";
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
        <Route path="/menu" element={<Menu />} />

        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/:id" element={<CommentsById />} />

        <Route path="/404" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
