import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./App";

const workoutSplits = [
  { day: "Monday", workout: "Chest Day", image: "./chest-muscle.svg" },
  { day: "Tuesday", workout: "Back Day", image: "./back.png" },
  { day: "Wednesday", workout: "Leg day", image: "" },
  { day: "Thursday", workout: "Full arms Day", image: "" },
  { day: "Friday", workout: "Shoulders", image: "" },
  { day: "Saturday", workout: "Leg day", image: "" },
  { day: "Sunday", workout: "Rest", image: "" },
];

export default function WorkDay() {
  const [workout, setWorkout] = useContext(Context);

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const todayWorkout = workoutSplits.find((split) => split.day === today);
    setWorkout(todayWorkout && todayWorkout.workout);
  }, []);

  return (
    <div className="flex flex-col  justify-center border-gray-200 border rounded-xl text-white ">
      <h1 className="text-4xl  text-[#023021] mb-4 ml-4 ">Today is</h1>
      <Link to="/workout">
        <div className="text-3xl font-semibold bg-[#023021] text-center p-4 rounded-r-full shadow-xl  w-[250px] relative cursor-pointer">
          <p className="mr-11">{workout}</p>
          <div className=" ml-16 flex items-center justify-center p-1 absolute right-[-3px] top-[-2px]  hover:shadow-2xl hover:rounded-full hover:rotate-[360deg] transition-all duration-700">
            <div className="rounded-full bg-[#EAF7F9] h-[64px] w-[64px] bg-opacity-100 overflow-hidden">
              <img src="./back.png" alt="" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
