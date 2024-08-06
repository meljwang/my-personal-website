import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";

const AppRouter = () => {
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>;
};

export default AppRouter;
