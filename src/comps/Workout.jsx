import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import LeftBar from "./LeftBar.jsx";

export default function Workout() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className=" flex flex-row bg-white">
        <div className="min-w-[20%] pl-2 min-h-[100%]">
          <LeftBar />
        </div>
        <div className="min-w-[80%] pl-2 min-h-[100%]"></div>
      </div>
      <Footer />
    </div>
  );
}
