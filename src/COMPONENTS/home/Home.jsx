import React from "react";
import Cookies from "../../REUSABLE COMPONENTS/cookie/Cookies";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
// import Pagination from "../../REUSABLE COMPONENTS/pagination/Pagination";
import SearchHeader from "../../REUSABLE COMPONENTS/SearchHeader/SearchHeader";
import Sectors from "../../REUSABLE COMPONENTS/sectors/Sectors";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <SearchHeader />
        <Sectors />
        {/* <Pagination postPerPage={postPerPage} totalPost={data.length} /> */}
        <Cookies />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
