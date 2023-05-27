import React from "react";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import Register from "../../REUSABLE COMPONENTS/register/Register";

const RegisterField = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="pb-[120px]">
        <Register />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterField;
