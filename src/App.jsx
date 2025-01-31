import SignIn from "./comps/signIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./comps/SignUp";
import React, { useState } from "react";
import Home from "./comps/Home";
export default function App() {
  const [page, setPage] = useState("signin");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
