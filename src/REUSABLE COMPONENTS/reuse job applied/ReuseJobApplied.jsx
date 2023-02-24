import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiEuro } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../pagination/Pagination";
import "./reuseJobApplied.css";

// const axios = require("axios");
// axios = axios();

const ReuseJobApplied = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);

  //change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(false);
        const response = await axios.get(
          "http://localhost:4000/api/user-jobs?type=Application",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
            },
          }
        );
        setData(response.data.data);
      } catch (err) {
        setLoading(true);
        setError(true);
      }
    };

    fetchJobs();
  }, []);
  console.log(data);

  return (
    <div>
      {loading ? (
        <p className="mt-[200px] text-[20px] font-bold text-red-700">
          loading...
          <span className="ml-[25px]">please wait or Login to view</span>
        </p>
      ) : (
        <>
          {firstPage.map((item) => (
            <div className="border-[1px] border-blue-400 rounded-[10px] md:w-[700px] w-[450px] mt-[25px] bg-white shadow">
              <div className="md:w-[650px] w-[400px] mx-auto">
                <article className="flex items-center justify-between pt-[5px]">
                  <h1 className="font-bold text-blue-400 text-[30px]">
                    {item.title}
                  </h1>
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
                    className="text-blue-400 font-bold ml-[10px] text-[18px]"
                  >
                    Read more...
                  </Link>
                  .
                </p>
                <Link
                  to="/apply"
                  className="flex justify-end pb-[10px] font-bold text-red-600 text-[20px]"
                >
                  See application
                </Link>
              </div>
            </div>
          ))}
        </>
      )}
      <Pagination
        postPerPage={postPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ReuseJobApplied;
