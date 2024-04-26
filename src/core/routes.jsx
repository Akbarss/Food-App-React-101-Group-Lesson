import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../App";
import About from "../page/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
