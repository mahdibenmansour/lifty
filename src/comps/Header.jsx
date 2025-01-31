import { IoIosArrowDown } from "react-icons/io";
export default function Header() {
  return (
    <header className="h-[15vh] flex flex-col content-center justify-center bg-white border-b border-gray-200 shadow-sm sticky">
      <div name="content" className="flex justify-around">
        <div name="logo" className="flex items-center justify-center gap-2">
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
              <a href="">Home</a>
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
        <div className=" text-xl flex gap-11 font-semibold items-center justify-center ">
          <a href="">Login</a>
          <button className="border border-gray-300 shadow-sm font-semibold p-3 px-6 rounded-full hover:bg-slate-500 hover:bg-opacity-20">
            SignUp
          </button>
        </div>
      </div>
    </header>
  );
}
