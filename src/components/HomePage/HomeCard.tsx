import React, { useEffect, useState } from "react";

type Props = {
  amount: string;
  category: string;
  children: React.ReactNode;
};

function HomeCard({ amount, category, children }: Props) {
  const [activeComponent, setActiveComponent] = useState(0);
  const rotateClasses = [
    "rotate-0",
    "rotate-[360deg]",
    "-rotate-0",
    "rotate-[360deg]",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveComponent((activeComponent + 1) % 4);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [activeComponent]);

  return (
    <div
      className=" w-4/5 md:w-1/5 xl:w-1/6 border border-red-500 border-dotted	 rounded-tr-xl 
    px-4 py-8  text-center
    relative 
    hover:scale-90 hover:border-solid duration-250 ease-in-out"
    >
      <div
        className={`${
          rotateClasses[activeComponent % 4]
        } p-3.5 md:p-5 w-3 h-3 md:w-6 md:h-6 bg-red-500 rounded duration-150 ease-in-out 
        flex justify-center items-center
        absolute left-[10%] -top-[10%]  md:-top-[12%]
        `}
      >
        {children}
      </div>
      <h3 className="text-4xl mb-2 font-extrabold	">{amount}</h3>
      <h4 className="text-lg sm:text-base lg:text-xl capitalize text-ellipsis overflow-hidden">
        {category}
      </h4>
    </div>
  );
}

export default HomeCard;
