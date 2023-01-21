import React from "react";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import FieldSendApply from "../../REUSABLE COMPONENTS/field send apply/FieldSendApply";
import ExperienceSendApply from "../../REUSABLE COMPONENTS/experience send apply/ExperienceSendApply";

const SendApply = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <h1 className="py-[35px] text-2xl font-bold w-[450px] md:w-[1000px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed
        voluptatibus velit maiores in inventore corporis. Harum vero autem sit
        hic culpa sunt, illum, totam ratione, aut iste sapiente dicta in
        voluptate temporibus soluta? Officiis exercitationem eius dolorum velit
        qui nam consequatur, quisquam suscipit veritatis minima libero dicta!
        Mollitia, alias.
      </h1>
      <div className="pb-[100px]">
        <div className="md:w-[1000px] w-[450px] mx-auto md:flex justify-between">
          <article>
            <FieldSendApply />
          </article>
          <article>
            <p className="md:block hidden w-[1px] h-full border-4 border-white rounded-full"></p>
          </article>
          <article className="md:mt-[0px] mt-[50px]">
            <ExperienceSendApply />
          </article>
        </div>
        <article className="font-bold w-[450px] md:w-[1000px] mx-auto flex justify-end">
          <button className="border-2 p-[5px] w-[100px] mt-[50px] text-white bg-pink-600 hover:bg-pink-400 font-bold">
            Apply Now
          </button>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default SendApply;
