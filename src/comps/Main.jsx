import Greeting from "./Greeting.jsx";
import IntakeComp from "./IntakeComp.jsx";
import WorkDay from "../WorkDay.jsx";
import { useState, useContext, createContext } from "react";

export default function Main() {
  return (
    <div className="flex flex-col pl-8 pt-8 h-full w-full">
      <Greeting />
      <div className="flex pt-8 gap-8 w-full">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <IntakeComp title={"Active Steps"} value={5906}>
              <img src="./shoe.png" alt="" />
            </IntakeComp>
            <IntakeComp title={"Weight"} value={"80.2 KG"}>
              <img src="./scale.png" alt="" />
            </IntakeComp>
          </div>
          <div className="flex gap-8">
            <IntakeComp title={"Water intake"} value={"5L"}>
              <img src="./water.png" alt="" />
            </IntakeComp>
            <IntakeComp title={"Calories"} value={"4901KCAL"}>
              <img src="./chocolate.png" width={60} alt="" />
            </IntakeComp>
          </div>
        </div>
        <div name="workout" className="flex w-full pr-4">
          <WorkDay />
        </div>
      </div>
    </div>
  );
}
