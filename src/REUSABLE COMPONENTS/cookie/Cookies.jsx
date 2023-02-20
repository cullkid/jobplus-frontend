import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import "./cookie.css";

const Cookies = ({ setCookie }) => {
  const handleClick = (e) => {
    e.preventDefault();

    setCookie(false);
  };

  return (
    <div className="bg-slate-300 h-[150px]">
      <div className="position h-[150px] bg-gray-500 rounded-[5px] w-[700px] ml-[30px]">
        <div className="h-full w-full flex items-center justify-around">
          <p className="text-gray-800 w-[500px] text-[25px] font-bold">
            Jobplus uses cookies. By continuing you are agreeing to our cookies
            policy and privacy. <span className="border-b-2"> Learn more.</span>
          </p>
          <FaRegTimesCircle
            className="text-gray-800 text-[25px] font-bold cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Cookies;
