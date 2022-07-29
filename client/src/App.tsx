import { observer } from "mobx-react-lite";
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Context } from ".";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

//TODO: replace routes to the component
function App() {
  //const navigate = useNavigate()
  const { store } = useContext(Context);
  if (!!localStorage.getItem("token")) {
    store.setAuth(true);
  }
  // if (!store.isAuth) {
  //   navigate('/login')
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
