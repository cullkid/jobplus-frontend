import React from "react";
import { Link } from "react-router-dom";

const FullSignIn = () => {
  return (
    <div>
      <div className="w-[450px] md:w-[1000px] mx-auto">
        <h1 className="text-2xl font-bold py-[35px]">Register</h1>
        <div className="w-[350px] bg-white mx-auto mt-[80px] pb-[20px]">
          <div className="w-[300px] mx-auto">
            {/*first-name container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                placeholder="first-name"
                className="border-2 px-[10px]"
              />
            </div>
            {/*last-name container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                placeholder="last-name"
                className="border-2 px-[10px]"
              />
            </div>
            {/*email container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="border-2 px-[10px]"
              />
            </div>
            {/*password container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Password
              </label>
              <input
                type="text"
                placeholder="password"
                className="border-2 px-[10px]"
              />
            </div>
            {/*confirm-password container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Confirm Password
              </label>
              <input
                type="text"
                placeholder="confirm-password"
                className="border-2 px-[10px]"
              />
            </div>
            <button className="border-2 w-[300px] mt-[20px] text-white bg-pink-600 hover:bg-pink-400">
              Register
            </button>
            <div className="mt-[20px] flex items-center">
              <p>Already have an account? </p>
              <Link
                to="/login"
                className="ml-[5px] cursor-pointer border-b-2 border-b-blue-600 text-blue-600"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSignIn;
