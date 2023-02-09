import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoSignIn } from "react-icons/go";

const FullSignIn = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        credentials
      );

      localStorage.setItem("eze-token", response.data.token);

      navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <div className="w-[450px] md:w-[1000px] mx-auto">
        <div className="w-[350px] relative pt-[40px] bg-white mx-auto mt-[80px] pb-[20px]">
          <div className="h-[80px] w-[350px] absolute top-[-25px]">
            <GoSignIn className="bg-gray-600 text-gray-400 w-[60px] h-[60px] border-[2px] mx-auto rounded-full " />
          </div>
          <form className="w-[300px] mx-auto" onSubmit={handleSubmit}>
            {/*username container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Username
              </label>
              <input
                type="text"
                placeholder="username"
                id="username"
                className="border-2 px-[10px]"
                onChange={handleChange}
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
                id="email"
                className="border-2 px-[10px]"
                onChange={handleChange}
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
                id="password"
                className="border-2 px-[10px]"
                onChange={handleChange}
              />
            </div>
            {/*confirm-password container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="confirm-password"
                id="confirm-password"
                className="border-2 px-[10px]"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="border-2 w-[300px] mt-[20px] text-white bg-pink-600 hover:bg-pink-400"
            >
              Register
            </button>
            {error && (
              <span className="text-red-600">Something went wrong</span>
            )}
          </form>
          <div className="mt-[20px] flex items-center w-[300px] justify-end">
            <Link to="/login" className="ml-[5px] cursor-pointer text-gray-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSignIn;
