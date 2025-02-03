import React, { useEffect, useState, useContext } from "react";
import { Context } from "../App";
import Cell from "./Cell.jsx";

export default function WorkoutEx() {
  const [exercises, setExercises] = useState([]);
  const [workout, setWorkout] = useContext(Context);
  const musclesGroup = [];
  if (workout === "Chest Day") {
    musclesGroup.push("Chest");
  } else if (workout === "Back Day") {
    musclesGroup.push("lats");
    musclesGroup.push("lower_back");
    musclesGroup.push("middle_back");
  } else if (workout === "Leg day") {
    musclesGroup.push("calves");
    musclesGroup.push("glutes");
    musclesGroup.push("quadriceps");
    musclesGroup.push("hamstrings");
  } else if (workout === "Full arms Day") {
    musclesGroup.push("biceps");
    musclesGroup.push("triceps");
    musclesGroup.push("forearms");
  } else if (workout === "Shoulders") {
    musclesGroup.push("neck");
    musclesGroup.push("traps");
  }

  useEffect(() => {
    musclesGroup.map((muscle) => {
      fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        headers: {
          "X-Api-Key": "4Sd7otTFNZCR70RfdE4Q0KkbFXVyVC5rdlWQmex7",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setExercises([...exercises, ...data]);
        });
    });
  }, [workout]);

  if (workout === "Rest Day") {
    return (
      <div className="min-w-[80%] pl-12 pt-4 min-h-[100%] flex justify-center items-center">
        Today is rest day
      </div>
    );
  }
  if (!exercises.length) {
    return (
      <div className="min-w-[80%] pl-12 pt-4 min-h-[100%] flex justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-w-[80%] pl-12 pt-4 min-h-[100%] ">
      <div className="grid grid-cols-4 gap-8 pb-8">
        {exercises.map((exercise) => (
          <Cell key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
