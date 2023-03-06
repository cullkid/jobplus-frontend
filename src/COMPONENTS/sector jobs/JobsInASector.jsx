import React, { useState } from "react";
import "./jobs.css";
import FullJobsInASector from "../../REUSABLE COMPONENTS/job in a sector/FullJobsInASector";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import BrowseByLocations from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";

const JobsInASector = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="bg-white">
        <h1 className="w-[450px] md:w-[1000px] mx-auto py-[25px] text-[25px] font-bold">
          Fell free to apply for any job of your choice
        </h1>
      </div>
      <div className="w-[450px] md:w-[1000px] md:flex mx-auto justify-between pb-[5px]">
        <div>
          <BrowseBySector />
          <BrowseByLocations />
        </div>
        <div>
          {/* <JobsWithdrawAndRemove /> */}
          <FullJobsInASector />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobsInASector;
