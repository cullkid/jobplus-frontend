import React from "react";
import FullResetPassword from "../../REUSABLE COMPONENTS/reset password/FullResetPassword";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";

const ResetPasswordField = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="pb-[200px]">
        <FullResetPassword />
      </div>
      <Footer />
    </div>
  );
};

export default ResetPasswordField;
