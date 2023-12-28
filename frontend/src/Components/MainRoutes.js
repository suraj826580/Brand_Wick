import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterComp from "./RegisterComp";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterComp />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
