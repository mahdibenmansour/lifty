import Greeting from "./Greeting.jsx";
import IntakeComp from "./IntakeComp.jsx";

export default function Main() {
  return (
    <div className="flex flex-col ml-8 mt-8 h-full ">
      <Greeting />
      <div className="flex mt-8 gap-8">
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
        <div name="calendar" className="flex bg-gray-500"></div>
      </div>
    </div>
  );
}
