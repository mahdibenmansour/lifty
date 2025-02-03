import { FaStar } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { LuBicepsFlexed } from "react-icons/lu";
import React, { useState } from "react";

export default function Cell({ exercise }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col border p-4 border-gray-200 shadow-md rounded-xl cursor-pointer group h-[180px] hover:h-auto hover:shadow-xl transition-all duration-1000 hover:p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <p className="font-semibold flex gap-2 items-center opacity-100 transition-opacity duration-100">
          {exercise.instructions.slice(0, 300) + "..."}
        </p>
      ) : (
        <>
          <p className="text-lg font-bold border-b pb-3 border-black">
            {exercise.name}
          </p>
          <p className="font-semibold flex gap-2 items-center pt-4">
            Type:{" "}
            <span className="text-green-950 first-letter:uppercase">
              {exercise.type}
            </span>
            <LuBicepsFlexed />
          </p>
          <p className="font-semibold flex gap-2 items-center">
            Equipment:{" "}
            <span className="text-green-950 first-letter:uppercase">
              {exercise.equipment}
            </span>
            <FaDumbbell />
          </p>
          <p className="font-semibold flex gap-2 items-center">
            Difficulty:{" "}
            <span className="text-green-950 first-letter:uppercase">
              {exercise.difficulty}
            </span>
            {[
              ...Array(
                exercise.difficulty === "beginner"
                  ? 1
                  : exercise.difficulty === "intermediate"
                  ? 2
                  : 3
              ),
            ].map(() => (
              <FaStar />
            ))}
          </p>
        </>
      )}
    </div>
  );
}
