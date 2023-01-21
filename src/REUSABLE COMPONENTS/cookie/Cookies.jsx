import React from "react";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const Cookies = () => {
  const [cookies, setCookies] = useState(false);
  const closeCookie = () => setCookies(!cookies);
  return (
    <div>
      <div
        onClick={closeCookie}
        className="static bg-blue-500 flex items-center justify-between px-8 py-2 w-[450px] pt-[25px] md:w-[1000px] mx-auto"
      >
        <p className="text-white">
          Jobplus uses cookies. By continuing you are agreeing to our use of
          cookies. <span className="border-b-2"> Learn more.</span>
        </p>
        <FaRegTimesCircle
          className="text-white font-bold"
          onClick={closeCookie}
        />
      </div>
    </div>
  );
};

export default Cookies;
