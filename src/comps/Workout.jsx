import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import LeftBar from "./LeftBar.jsx";
import WorkoutEx from "./WorkoutEx.jsx";

export default function Workout(s) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className=" flex flex-row bg-white">
        <div className="min-w-[20%] pl-2 min-h-[100%]">
          <LeftBar />
        </div>
        <WorkoutEx />
      </div>
      <Footer />
    </div>
  );
}
