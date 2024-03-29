import React from "react";
import BrowseByLocations from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import SearchHeader from "../../REUSABLE COMPONENTS/SearchHeader/SearchHeader";
import JobLists from "../../REUSABLE COMPONENTS/job list/JobLists";

const JobList = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <SearchHeader type="list" />
      <div className="relative w-[450px] md:w-[1000px] md:flex justify-between  mx-auto pb-[5px]">
        <div className=" w-[210px] h-">
          <BrowseBySector />
          <BrowseByLocations />
        </div>
        <div>
          <JobLists />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobList;
