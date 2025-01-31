import { useEffect, useState } from "react";
export default function Greeting() {
  let d = new Date().toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
  });
  const [link, setLink] = useState("");
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=36.806389&lon=10.181667&appid=817a8ab2319ccad9cf9bcf690d11b90b"
    )
      .then((res) => res.json())
      .then((data) =>
        setLink(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
      );
  }, []);
  return (
    <div className="flex flex-row ">
      <div>
        <h1 className="text-5xl">Good</h1>
        <h1 className="text-[53px] font-semibold flex  justify-center">
          {d < 12 ? "Morning" : "Evening"}
        </h1>
      </div>
      <img src={link} alt="sun" width={120} />
    </div>
  );
}
