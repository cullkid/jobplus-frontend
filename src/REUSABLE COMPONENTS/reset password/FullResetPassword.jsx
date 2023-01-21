import React from "react";

const FullResetPassword = () => {
  return (
    <div>
      <div className="w-[450px] md:w-[1000px] mx-auto">
        <h1 className="py-[35px] text-2xl font-bold">Password reset</h1>
        <div className="w-[350px] bg-white mx-auto mt-[80px] pb-[20px]">
          <div className="w-[300px] mx-auto">
            {/*email container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                New password
              </label>
              <input
                type="text"
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
                type="text"
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
