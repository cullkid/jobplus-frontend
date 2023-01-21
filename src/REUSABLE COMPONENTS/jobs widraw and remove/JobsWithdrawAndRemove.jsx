import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiEuro } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const JobsWithdrawAndRmove = ({ type }) => {
  return (
    <div>
      <div className="border-[3px] border-blue-400 rounded-[10px] w-[450px] mt-[25px] bg-slate-300">
        <div className="w-[400px] mx-auto">
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
          <p className="mt-[10px] text-[11px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            repudiandae iste assumenda
            <Link className="font-bold">Read more...</Link>.
          </p>
          <Link
            className={
              type === "withdraw"
                ? "flex justify-end pb-[10px]  text-red-600"
                : "hidden"
            }
          >
            Withdraw application
          </Link>
          <Link
            className={
              type === "withdraw"
                ? "hidden"
                : "flex justify-end pb-[10px]  text-red-600"
            }
          >
            Remove
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsWithdrawAndRmove;
