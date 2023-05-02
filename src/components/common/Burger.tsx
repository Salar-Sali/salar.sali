import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Burger() {
  return (
    <div className="flex md:hidden  px-2 py-1.5 rounded hover:bg-gray-500 hover:duration-150 hover:ease-in-out">
      <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
    </div>
  );
}

export default Burger;
