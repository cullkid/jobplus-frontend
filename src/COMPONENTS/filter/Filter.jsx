import React, { useContext, useEffect, useState } from "react";
import BrowseByLocations from "../../REUSABLE COMPONENTS/browse by location/BrowseByLocations";
import BrowseBySector from "../../REUSABLE COMPONENTS/browse by sector/BrowseBySector";
import Footer from "../../REUSABLE COMPONENTS/footer/Footer";
import Navbar from "../../REUSABLE COMPONENTS/navbar/Navbar";
import Pagination from "../../REUSABLE COMPONENTS/pagination/Pagination";
import axios from "axios";
import { useLocation } from "react-router-dom";
import jobplus from "../../image/jobplus.svg";
import "./jobs.css";
import FullFilterJobs from "../../REUSABLE COMPONENTS/fullfilter jobs/FullFilterJobs";
import { SearchContext } from "../../CONTEXT/searchContext";

const Filter = ({ type }) => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);
  const [what, setWhat] = useState(location.state.what);
  const [where, setWhere] = useState(location.state.where);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);

  //change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (what && where) {
      setLoading(true);
      setError(null);

      axios
        .get(
          `http://localhost:4000/api/jobs/search?what=${what}&where=${where}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
            },
          }
        )
        .then((response) => {
          setLoading(false);
          setData(response.data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
        });
    }
  }, [what, where]);

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    //dispatch will send the new state of (destination, date, option) to the single page that the search found
    dispatch({ type: "NEW_SEARCH", payload: { what, where } });
    // navigate("/filter", { state: { what, where } });
    dispatch({ type: "RESET_SEARCH" });
  };

  return (
    <div className="bg-gray-200">
      <Navbar />
      {/* <SearchHeader type="list" /> */}

      <div
        className={
          "w-full h-[300px] md:h-[250px]  bg-no-repeat bg-center bg-cover  opacity box-shadow"
        }
        style={{ backgroundImage: `url(${jobplus})` }}
      >
        {/*flex-container */}
        <div
          className={
            "h-auto mx-auto md:w-[1000px] flex flex-col md:flex-row items-center justify-between md:pt-[70px]"
          }
        >
          {/*flex child-1 */}
          <div className="flex w-[435px] justify-between  flex-col py-4 md:mx-[0]">
            <label className="text-white text-2xl right-[50px]">What</label>
            <input
              type="text"
              placeholder="Job, skills or company"
              className="w-[100%] py-[10px] px-[5px]"
              // onChange={(e) => setJob(e.target.value)}
              onChange={(e) => setWhat(e.target.value)}
              id="What"
            />
          </div>

          {/*flex child-2 */}
          <div className="flex w-[435px] justify-between  flex-col py-4 md:mx-[0]">
            <label className="text-white text-2xl right-[50px]">Where</label>
            <input
              type="text"
              placeholder="Town, city or postcode"
              className="w-[100%] py-[10px] px-[5px]"
              // onChange={(e) => setCity(e.target.value)}
              onChange={(e) => setWhere(e.target.value)}
              id="Where"
            />
          </div>

          {/*flex container-3 */}
          <div className="py-4 md:ml-[0] bg md:w-[90px] w-[430px]">
            <button
              onClick={handleSearch}
              className="bg-pink-600 hover:bg-pink-400 py-[10px] md:mt-[25px] text-white font-bold md:w-[100px] w-[100%]  px-[100px] md:px-[15px]"
            >
              search
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-[450px] md:w-[1000px] md:flex justify-between  mx-auto pb-[5px]">
        <div className=" w-[210px] h-">
          <BrowseBySector />
          <BrowseByLocations />
        </div>
        <div>
          {loading ? (
            "loading, please wait"
          ) : (
            <>
              {data ? (
                firstPage.map((item) => (
                  <FullFilterJobs item={item} key={item.id} />
                ))
              ) : (
                <p>Not available</p>
              )}
              <Pagination
                postPerPage={postPerPage}
                totalPosts={data.length}
                paginate={paginate}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Filter;
