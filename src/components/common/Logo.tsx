import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setHeader } from "../../feature/headerSlice";
import { TabsNames } from "./TabsNames";

type Props = {
  children: React.ReactNode;
};

function Logo({ children }: Props) {
  const dispatch = useDispatch();

  const handleTabClick = (tab: string) => {
    dispatch(setHeader(tab));
  };
  return (
    <Link
      className="font-bold uppercase text-2xl md:text-4xl text-red-500 cursor-pointer"
      to="/"
      onClick={() => handleTabClick(TabsNames.HOME)}
    >
      {children}
    </Link>
  );
}

export default Logo;
