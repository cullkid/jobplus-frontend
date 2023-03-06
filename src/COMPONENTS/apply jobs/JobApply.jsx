import React from "react";
import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import BrowseByLocations from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import Apply from "../../REUSABLE COMPONENTS/apply/Apply";
import NavBar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";

const JobApply = () => {
  return (
    <div className="bg-slate-200">
      <NavBar />
      <div className="w-[450px] md:w-[1000px] mx-auto md:flex justify-between pb-[8px]">
        <div>
          <BrowseBySector />
          <BrowseByLocations />
        </div>
        <div>
          <Apply />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobApply;
