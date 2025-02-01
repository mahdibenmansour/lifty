import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
export default function Header() {
  return (
    <header className="h-[15vh] flex flex-col content-center justify-center bg-white border-b border-gray-200 shadow-sm sticky">
      <div name="content" className="flex justify-center relative">
        <div
          name="logo"
          className="flex items-center justify-center gap-2 absolute left-36"
        >
          <a href="">
            <img src="/dumbbell.svg" width={60} height={60} alt="" />
          </a>
          <p className="flex items-center justify-center text-black text-2xl font-bold">
            Lifty
          </p>
        </div>
        <div name="list" className="flex items-center justify-center">
          <ul className="flex gap-8 text-black text-2xl">
            <li>
              <Link to="/home">
                <a href="">Home</a>
              </Link>
            </li>
            <li>
              <a href="" className="flex justify-center items-center gap-1">
                Features
                <IoIosArrowDown size={30} />
              </a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
