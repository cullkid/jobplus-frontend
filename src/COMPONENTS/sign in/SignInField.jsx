import React from "react";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import FullSignIn from "../../REUSABLE COMPONENTS/sign in/FullSignIn";

const SignInField = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="pb-[120px]">
        <FullSignIn />
      </div>
      <Footer />
    </div>
  );
};

export default SignInField;
