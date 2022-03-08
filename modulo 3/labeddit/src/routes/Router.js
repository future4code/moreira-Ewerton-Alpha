import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import PostPage from "../pages/PostPage/PostPage";
import ErrorPage from "../pages/ErrorPage.js/ErrorPage";
import Header from "../components/Header/Header"

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/Register" element={<RegisterPage />} />

        <Route path="/Feed" element={<FeedPage />} />

        <Route path="/Post" element={<PostPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
