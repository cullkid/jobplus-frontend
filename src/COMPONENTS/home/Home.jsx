import React, { useState } from "react";
import Cookies from "../../REUSABLE COMPONENTS/cookie/Cookies";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import SearchHeader from "../../REUSABLE COMPONENTS/SearchHeader/SearchHeader";
import Sectors from "../../REUSABLE COMPONENTS/sectors/Sectors";

const Home = () => {
  const [cookie, setCookie] = useState(true);

  return (
    <div>
      <Navbar />
      <div>
        <SearchHeader />
        <Sectors />
        {cookie && <Cookies setCookie={setCookie} />}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
