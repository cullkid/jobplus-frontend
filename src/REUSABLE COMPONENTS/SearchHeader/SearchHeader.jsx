import React from "react";
import jobplus from "../../image/jobplus.svg";

const SearchHeader = ({ type }) => {
  return (
    <div>
      <div
        className={
          type === "list"
            ? "w-full h-[250px] bg-no-repeat bg-center bg-cover  opacity"
            : "w-full h-[400px] bg-no-repeat bg-center bg-cover  opacity"
        }
        style={{ backgroundImage: `url(${jobplus})` }}
      >
        <h1
          className={
            type === "list"
              ? "hidden"
              : "w-[450px] md:w-[1000px] mx-auto text-white text-2xl md:text-5xl font-bold py-[20px]"
          }
        >
          Connecting candidates to their dream jobs
        </h1>
        {/*flex-container */}
        <div
          className={
            type === "list"
              ? "h-auto mx-auto md:w-[1000px] flex flex-col md:flex-row items-center justify-between md:pt-[70px]"
              : "h-auto mx-auto md:w-[1000px] flex flex-col md:flex-row items-center md:mt-[65px] top-[5%] justify-between"
          }
        >
          {/*flex child-1 */}
          <div className="flex w-[335px] justify-between flex flex-col md:flex-row py-4 md:mx-[0]">
            <label className="text-white text-2xl right-[50px]">What</label>
            <input
              type="text"
              placeholder="Job, skills or company"
              className="w-[250px] px-[5px]"
            />
          </div>

          {/*flex child-2 */}
          <div className="flex w-[335px] justify-between flex flex-col md:flex-row py-4 md:mx-[0]">
            <label className="text-white text-2xl right-[50px]">Where</label>
            <input
              type="text"
              placeholder="Town, city or postcode"
              className="w-[250px] px-[5px]"
            />
          </div>

          {/*flex container-3 */}
          <div className="py-4 md:ml-[0] bg md:w-[90px] w-[335px]">
            <button className="bg-pink-600 hover:bg-pink-400 py-[3px] text-white font-bold px-[100px] md:px-[15px]">
              search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
