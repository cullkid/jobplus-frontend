import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../CONTEXT/AuthContext";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";

const FullLgin = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        credentials
      );

      localStorage.setItem("eze-token", response.data.token);

      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="w-[450px] md:w-[1000px] mx-auto">
        <div className="w-[350px] bg-white mx-auto pt-[40px] mt-[80px] pb-[20px] relative">
          <div className="h-[80px] w-[350px] absolute top-[-25px]">
            <BsFillPersonFill className="bg-gray-600 text-gray-400 w-[60px] h-[60px] border-[2px] mx-auto rounded-full " />
          </div>
          <div className="w-[300px] mx-auto pb-[20px] ">
            {/*email container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="border-2 px-[10px]"
                onChange={handleChange}
                id="email"
              />
            </div>
            {/*password container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="border-2 px-[10px]"
                onChange={handleChange}
                id="password"
              />
            </div>
            <button
              onClick={handleClick}
              className="border-2 w-[300px] mt-[20px] text-white bg-pink-600 hover:bg-pink-400"
            >
              Login
            </button>
            {error && (
              <span className="text-red-600">Something went wrong</span>
            )}
          </div>
          <div className="mt-[20px] flex items-center">
            {/* <p>Don't have an account yet? </p> */}
            <Link
              to="/resetpassword"
              className="cursor-pointer text-center w-full font-bold  text-gray-600"
            >
              FORGOT PASSWORD?
            </Link>
          </div>
          <div className="mt-[20px] flex items-center justify-end w-[300px]">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullLgin;
