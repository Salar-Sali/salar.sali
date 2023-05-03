import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

function Logo({ children }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="font-bold uppercase text-2xl md:text-4xl text-red-500 cursor-pointer"
      onClick={() => navigate("/")}
    >
      {children}
    </div>
  );
}

export default Logo;
