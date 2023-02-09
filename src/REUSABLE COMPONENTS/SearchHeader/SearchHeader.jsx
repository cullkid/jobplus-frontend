import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobplus from "../../image/jobplus.svg";
import "./searchHeader.css";

const SearchHeader = ({ type }) => {
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/list", { state: { job, city } });
  };

  return (
    <div>
      <div
        className={
          type === "list"
            ? "w-full h-[300px] md:h-[250px]  bg-no-repeat bg-center bg-cover  opacity box-shadow"
            : "w-full h-[370px] md:h-[300px] bg-no-repeat bg-center bg-cover  opacity box-shadow"
        }
        style={{ backgroundImage: `url(${jobplus})` }}
      >
        <div
          className={
            type === "list"
              ? "hidden"
              : "w-[450px] md:w-[1000px] mx-auto text-white text-2xl md:text-5xl font-bold py-[20px]"
          }
        >
          <h1 className="w-[600px]">
            Connecting candidates to their dream jobs
          </h1>
        </div>
        {/*flex-container */}
        <div
          className={
            type === "list"
              ? "h-auto mx-auto md:w-[1000px] flex flex-col md:flex-row items-center justify-between md:pt-[70px]"
              : "h-auto mx-auto md:w-[1000px] flex flex-col md:flex-row items-center md:mt-[15px] top-[5%] justify-between"
          }
        >
          {/*flex child-1 */}
          <div className="flex w-[435px] justify-between  flex-col py-4 md:mx-[0]">
            <label className="text-white text-2xl right-[50px]">What</label>
            <input
              type="text"
              placeholder="Job, skills or company"
              className="w-[100%] py-[10px] px-[5px]"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>

          {/*flex child-2 */}
          <div className="flex w-[435px] justify-between  flex-col py-4 md:mx-[0]">
            <label className="text-white text-2xl right-[50px]">Where</label>
            <input
              type="text"
              placeholder="Town, city or postcode"
              className="w-[100%] py-[10px] px-[5px]"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/*flex container-3 */}
          <div className="py-4 md:ml-[0] bg md:w-[90px] w-[430px]">
            <button
              onClick={handleSearch}
              className="bg-pink-600 hover:bg-pink-400 py-[10px] md:mt-[25px] text-white font-bold md:w-[100px] w-[100%]  px-[100px] md:px-[15px]"
            >
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
