import { HiOutlineDocumentText } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { PiHouseSimple } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
export default function LeftBar() {
  return (
    <div className="flex flex-col bg-white w-[20vw] h-[85vh]  ml-4 mt-4 gap-4">
      <div
        className="flex flex-col w-[100%] p-7 bg-gray-200 border border-gray-100 rounded-3xl bg-opacity-10 "
        name="profile"
      >
        <div className="flex flex-col items-center gap-3 justify-center ">
          <div className="rounded-full overflow-hidden w-[100px] h-[100px]">
            <img
              src="https://i.pinimg.com/736x/4f/4e/22/4f4e2213fadd0f38dc79d215bc9b2641.jpg"
              alt="profile pic"
            />
          </div>
          <p className="text-2xl first-letter:uppercase">Mahdi Ben Mansour</p>
          <p className="text-sm text-gray-400">Active Member</p>
        </div>
      </div>
      <div>
        <p className="pt-11 pl-3">MENU</p>
        <ul className="flex flex-col gap-2 text-xl my-4">
          <li className="flex gap-2 items-center hover:shadow-xl rounded-3xl cursor-pointer hover:bg-[#2AAE74] p-4 mr-8">
            <PiHouseSimple />
            Dashboard
          </li>
          <li className="flex gap-2 items-center hover:shadow-xl rounded-3xl cursor-pointer hover:bg-[#2AAE74] p-4 mr-8">
            <CiDumbbell size={29} />
            Workout
          </li>
          <li className="flex gap-2 items-center hover:shadow-xl rounded-3xl cursor-pointer hover:bg-[#2AAE74] p-4 mr-8">
            <IoCalendarOutline />
            Schedule
          </li>
          <li className="flex gap-2 items-center hover:shadow-xl rounded-3xl cursor-pointer hover:bg-[#2AAE74] p-4 mr-8">
            <HiOutlineDocumentText />
            Program
          </li>
        </ul>
        <div
          className="flex flex-col w-[100%] h-[220px] p-7 border-gray-100 rounded-3xl bg-opacity-10 "
          name="profile"
        >
          <div className="flex flex-col content-center items-center justify-center ">
            <p className="text first-letter:uppercase text-black font-semibold">
              Not a member?
            </p>
            <button className="rounded-2xl  p-4 px-2 mt-2 bg-black hover:bg-opacity-80 text-white">
              Upgrade to Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
