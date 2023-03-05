import React from "react";
// import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import BrowseByLocation from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import ReuseJobApplied from "../../REUSABLE COMPONENTS/reuse job applied/ReuseJobApplied";

const JobApplied = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="bg-white">
        <h1 className="w-[450px] md:w-[1000px] mx-auto py-[25px] text-[25px] font-bold">
          Applied Jobs
        </h1>
      </div>
      <div className="w-[450px] md:w-[1000px] md:flex mx-auto justify-between pb-[5px]">
        <div>
          {/* <BrowseBySector /> */}
          <BrowseByLocation />
        </div>
        <div>
          <ReuseJobApplied />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobApplied;
