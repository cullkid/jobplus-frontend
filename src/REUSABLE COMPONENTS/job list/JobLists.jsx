import React, { useContext, useEffect, useState } from "react";
import "./jobs.css";
import { AiFillStar } from "react-icons/ai";
import { BiEuro } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../pagination/Pagination";
import { JobContext } from "../../CONTEXT/JobContext";

const JobLists = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { savedJobsCount, setSavedJobsCount } = useContext(JobContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);

  //change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //fetch jobs function
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(false);
        const response = await axios.get(
          "http://localhost:4000/api/jobs-with-companies-and-skills",
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

  // save job function
  const handleSaveJob = async (item) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user-jobs",
        { user_id: item.user_id, job_id: item },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
          },
        }
      );
      console.log(response.data); // log response data for testing purposes
      setSavedJobsCount(savedJobsCount + 1);
    } catch (err) {
      console.log(err);
    }
  };

  // // Function to handle read more click
  const handleReadMoreClick = (jobId) => {
    navigate(`/jobDetail/${jobId}`);
  };

  return (
    <div data-testid="element">
      {loading ? (
        "loading, please wait"
      ) : (
        <>
          {firstPage.map((item) => (
            <div
              key={item.id}
              className="border-[1px] border-blue-400 rounded-[10px] md:w-[700px] w-[450px] mt-[25px] bg-white shadow"
            >
              <div className="md:w-[650px] w-[400px] mx-auto">
                <article className="flex items-center justify-between pt-[5px]">
                  <Link
                    to="/apply"
                    className="font-bold text-blue-400 text-[30px]"
                  >
                    {item.title}
                  </Link>
                  <AiFillStar size={30} />
                </article>

                <h6 className="mt-[10px] text-[20px]">
                  {/* //UXins, flacs */}
                  posted by:
                  <span className="text-blue-400 ml-[5px]">
                    {item.company[0].name}
                  </span>
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
                      {item.company[0].city}{" "}
                      <span className="font-bold">
                        {" "}
                        {item.company[0].district}
                      </span>
                    </p>
                  </article>
                </main>
                <p className="mt-[15px] text-[15px]">
                  {item.description}
                  <Link
                    to={`/jobDetail/${item.id}`}
                    onClick={() => handleReadMoreClick(item.id)}
                    className="text-[18px] font-bold ml-[10px] text-blue-400"
                  >
                    Read more...
                  </Link>
                  .
                </p>
                <Link
                  onClick={() =>
                    handleSaveJob(
                      //   {
                      //   user_id: item.user_id,
                      //   job_id: item.id,
                      //   type: "Saved",
                      // }
                      item
                    )
                  }
                  className="flex justify-end pb-[10px] font-bold text-red-600 text-[20px]"
                >
                  Save
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

export default JobLists;
