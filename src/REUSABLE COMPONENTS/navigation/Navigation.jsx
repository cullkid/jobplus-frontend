import React from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";

const Navigation = () => {
  return (
    <div>
      <div className="w-[450px] flex items-center justify-between mt-[15px] pb-[10px]">
        <Link className="flex items-center font-bold font-bold px-[10px] bg-slate-400 rounded-[5px] text-slate-200">
          <FaLessThan /> <span className="ml-[5px]">Previous</span>
        </Link>
        <Link className="flex items-center font-bold bg-slate-400 px-[10px] rounded-[5px] text-slate-200">
          <span className="mr-[5px]">Next </span>
          <FaGreaterThan />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
