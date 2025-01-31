import SignIn from "./comps/signIn";
import HF from "./comps/HF";
import React, { useState } from "react";
import Home from "./comps/Home";
export default function App() {
  const [page, setPage] = useState("signin");
  return (
    // <div className="flex flex-col min-h-screen">
    //   <HF>{page === "signin" ? <SignIn /> : <Home />}</HF>
    // </div>
    <Home />
  );
}
