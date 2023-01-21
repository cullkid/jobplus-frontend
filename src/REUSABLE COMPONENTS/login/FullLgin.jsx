import React, { useState } from "react";
import { Link } from "react-router-dom";

const FullLgin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="w-[450px] md:w-[1000px] mx-auto">
        <h1 className="py-[35px] text-2xl font-bold">Login</h1>
        <div className="w-[350px] bg-white mx-auto mt-[80px] pb-[20px]">
          <div className="w-[300px] mx-auto pb-[20px]">
            {/*email container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="border-2 px-[10px]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="border-2 w-[300px] mt-[20px] text-white bg-pink-600 hover:bg-pink-400">
              Login
            </button>
            <div className="mt-[20px] flex items-center">
              {/* <p>Don't have an account yet? </p> */}
              <Link
                to="/resetpassword"
                className="ml-[5px] cursor-pointer border-b-2 border-blue-600 text-blue-600"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-[20px] flex items-center">
              <p>Don't have an account yet? </p>
              <Link
                to="/register"
                className="ml-[5px] cursor-pointer border-b-2 border-b-blue-600 text-blue-600"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullLgin;
