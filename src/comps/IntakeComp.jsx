export default function IntakeComp({ title, value, children }) {
  return (
    <div className="flex border rounded-xl h-[150px] relative w-[380px] border-gray-200 p-8">
      {" "}
      <div className="flex  flex-col">
        <p className=" text-3xl text-gray-600">{title}</p>
        <h1 className="text-4xl font-bold text-[#023021]">{value}</h1>
      </div>
      <div className=" ml-16 flex items-center justify-center p-1 absolute right-5">
        <div className="rounded-full bg-[#EAF7F9] h-[80px] w-[80px]">
          {children}
        </div>
      </div>
    </div>
  );
}
