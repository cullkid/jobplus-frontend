import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";

const FullResetPassword = () => {
  return (
    <div>
      <div className="w-[450px] md:w-[1000px] mx-auto">
        <div className="w-[350px] pt-[40px] relative bg-white mx-auto mt-[80px] pb-[20px]">
          <div className="h-[80px] w-[350px] absolute top-[-25px]">
            <RiLockPasswordFill className="bg-gray-600 text-gray-400 w-[60px] h-[60px] border-[2px] mx-auto rounded-full " />
          </div>
          <div className="w-[300px] mx-auto">
            {/*email container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                New password
              </label>
              <input
                type="password"
                placeholder="new-password"
                className="border-2 px-[10px]"
              />
            </div>
            {/*password container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                confirm-new Password
              </label>
              <input
                type="password"
                placeholder="confirm-new password"
                className="border-2 px-[10px]"
              />
            </div>
            <button className="border-2 w-[300px] mt-[20px] text-white bg-pink-600 hover:bg-pink-400">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullResetPassword;
