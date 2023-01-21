import React from "react";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import FullLogin from "../../REUSABLE COMPONENTS/login/FullLgin";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";

const LoginField = () => {
  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <div className="pb-[150px]">
        <FullLogin />
      </div>
      <Footer />
    </div>
  );
};

export default LoginField;
