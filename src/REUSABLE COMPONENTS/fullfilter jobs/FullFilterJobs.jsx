import React, { useContext, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiEuro } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const FullSearchJobs = ({ item, type }) => {
  return (
    <div>
      <div className="border-[1px] border-blue-400 rounded-[10px] md:w-[700px] w-[450px] mt-[25px] bg-white shadow">
        <div className="md:w-[650px] w-[400px] mx-auto">
          <article className="flex items-center justify-between pt-[5px]">
            <Link to="/apply" className="font-bold text-blue-400 text-[30px]">
              {item.title}
            </Link>
            <AiFillStar size={30} />
          </article>

          {/* {item.companies.map((company) => (
                  <h6 className="mt-[10px]">
                    Posted by
                    <span className="text-blue-400 ml-[5px]">
                      {company.name}
                    </span>
                  </h6>
                ))} */}
          <h6 className="mt-[10px] text-[20px]">
            posted by:{" "}
            <span className="text-blue-400 ml-[5px]">UXins, flacs</span>{" "}
          </h6>

          {/*grid container */}
          <main className="grid grid-cols-2 mt-[15px]">
            {/*grid child-1 */}
            <article className="flex items-center">
              <BiEuro size={25} />
              <p className="ml-[5px]">{item.salary_type}</p>
            </article>
            {/*grid child-2 */}
            <article className="flex items-center justify-self-end">
              <BiTimeFive size={25} />
              <p className="ml-[5px] ">{item.job_types}</p>
            </article>
            {/*grid child-3 */}
            <article className="flex items-center">
              <GrLocation size={25} />
              <p className="ml-[5px]">
                Heyes, <span className="font-bold">Uxbridge</span>
              </p>
            </article>
          </main>
          <p className="mt-[15px] text-[15px]">
            {item.description}
            <Link
              to="/apply"
              className="text-[18px] font-bold ml-[10px] text-blue-400"
            >
              Read more...
            </Link>
            .
          </p>
          <Link className="flex justify-end pb-[10px] font-bold text-red-600 text-[20px]">
            Save
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullSearchJobs;
