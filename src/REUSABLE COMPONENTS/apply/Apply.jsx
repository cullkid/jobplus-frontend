import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { BiEuro } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div>
      <div>
        <div className="md:w-[450px] w-[400px] mt-[25px] bg-white">
          <div className="md:w-[400px] w-[350px] mx-auto">
            <article className="flex items-center justify-between pt-[5px]">
              <h1 className="font-bold text-blue-400">
                Regulatory Affairs Senior Manager
              </h1>
              <AiFillStar />
            </article>
            <h6 className="mt-[10px]">
              Posted by <span className="text-blue-400">Koco Media</span>
            </h6>
            {/*grid container */}
            <main className="grid grid-cols-2 mt-[15px]">
              {/*grid child-1 */}
              <article className="flex items-center">
                <BiEuro />
                <p className="ml-[5px]">Salary negociable</p>
              </article>
              {/*grid child-2 */}
              <article className="flex items-center">
                <BiTimeFive />
                <p className="ml-[5px]">Contract, full-time</p>
              </article>
              {/*grid child-3 */}
              <article className="flex items-center">
                <GrLocation />
                <p className="ml-[5px]">
                  Heyes, <span className="font-bold">Uxbridge</span>
                </p>
              </article>
            </main>
            {/*button */}
            <div className="py-4 md:ml-[0] bg w-full">
              <Link
                to="/sendapply"
                className="bg-pink-600 hover:bg-pink-400 py-[3px] text-white font-bold md:py-[5px] px-[5px] md:px-[150px]"
              >
                Apply Now
              </Link>
            </div>
            <p className="mt-[15px] text-[13px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              qui optio, deleniti cupiditate aspernatur delectus earum modi ut
              libero nemo! Adipisci qui optio, deleniti cupiditate aspernatur
              delectus earum modi ut libero nemo!
              <span className="ml-[5px] text-[15px] font-bold">
                See more...
              </span>
            </p>
            <h2 className="text-2xl font-bold mt-[20px]">Required Skills</h2>
            <ul className="grid grid-cols-3 gap-[15px] mt-[15px]">
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
              <li>Skills</li>
            </ul>
            {/*button */}
            <div className="py-4 md:ml-[0]  w-full ">
              <Link
                to="/sendapply"
                className="bg-pink-600 hover:bg-pink-400 py-[3px] text-white font-bold px-[5px]  md:py-[5px]  md:px-[150px]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
