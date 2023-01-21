import React from "react";
import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import BrowseByLocation from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import JobsWithdrawAndRemove from "../../REUSABLE COMPONENTS/jobs widraw and remove/JobsWithdrawAndRemove";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navigation from "../../REUSABLE COMPONENTS/navigation/Navigation";

const JobNotification = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <h1 className="w-[450px] md:w-[1000px] mx-auto py-[35px] text-[25px] font-bold">
        Notification.
      </h1>
      <div className="w-[450px] md:w-[1000px] md:flex mx-auto justify-between pb-[5px]">
        <div>
          <BrowseBySector />
          <BrowseByLocation />
        </div>
        <div>
          <JobsWithdrawAndRemove />
          <Navigation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobNotification;
