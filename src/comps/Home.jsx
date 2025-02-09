import Header from "./Header";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import LeftBar from "./LeftBar.jsx";
import { useState } from "react";
export default function Home() {
  const [header, setHeader] = useState(true);
  return (
    <div className="flex flex-col min-h-[100vh]">
      {header === true && <Header />}
      <div className=" flex flex-row bg-white">
        <div className="min-w-[20%] pl-2 min-h-[100%]">
          <LeftBar />
        </div>
        <div className="min-w-[80%] pl-2 min-h-[100%]">
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}
