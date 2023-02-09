import React from "react";
import NavBar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import BrowseByLocation from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import JobsWithdrawAndRemove from "../../REUSABLE COMPONENTS/jobs widraw and remove/JobsWithdrawAndRemove";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import { AiFillStar } from "react-icons/ai";

const SavedJobs = () => {
  return (
    <div className="bg-gray-200">
      <NavBar />
      <div className="bg-white">
        <h1 className="w-[450px] md:w-[1000px] mx-auto py-[25px] text-[20px] font-bold bg-white">
          Saved Jobs.
        </h1>
      </div>
      <div className="w-[450px] md:w-[1000px] md:flex mx-auto justify-between pb-[5px]">
        <div>
          <BrowseBySector />
          <BrowseByLocation />
        </div>
        <div>
          <div className="flex items-center justify-between mt-[25px]">
            <article className="flex  items-center">
              <AiFillStar size={35} />
              <h2 className="ml-[5px] text-[20px]">1 saved job</h2>
            </article>
            <button className="bg-gray-300 flex items-center mr-[10px] px-[5px] rounded-[5px]">
              Remove all
            </button>
          </div>
          <JobsWithdrawAndRemove />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedJobs;
