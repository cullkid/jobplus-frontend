import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../pagination/Pagination";

const Sectors = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);

  //change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        setLoading(false);
        const response = await axios.get(
          "http://localhost:4000/api/sectors-with-categories",
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
    fetchSectors();
  }, []);

  return (
    <div className="bg-slate-300 w-full h-[100%]">
      <div className="w-[450px] py-[25px] md:w-[1000px] mx-auto">
        <h1 className="w-[230px] md:w-[350px] mx-auto text-2xl md:text-4xl font-bold">
          Choose your sector
        </h1>
        <h3 className="mt-[5px] w-[410px] md:w-[420px] font-bold mx-auto">
          Jobs across multiple sectors. See the latest roles now
        </h3>
        {loading ? (
          "loading please wait"
        ) : (
          <>
            <div className="md:grid h-full grid-cols-4 place-content-between pb-[30px]">
              {firstPage.map((item) => (
                <div
                  key={item.id}
                  className="mt-[30px] w-[238px] h-[420px] md:mx-[0px] mx-auto"
                >
                  <Link>
                    {" "}
                    <img
                      className="absolute border-[1px] border-gray-600 border-solid block h-[150px] w-[230px] bg-no-repeat bg-center md:bg-contain brightness-50"
                      // src={item.image}
                      alt="avarta"
                      src={`$(http://localhost:4000/api/)uploads\image-1673717175103.jpeg`}
                    />
                  </Link>
                  <p className="text-[20px] font-bold text-white z-1 block top-[10%] left-[25%] w-[100px] text-center  relative">
                    {item.name}
                  </p>
                  <div className="relative top-[30%]">
                    {item.categories.map((category) => (
                      // categories under sectors
                      <div key={category.id} className="hover:text-gray-500">
                        <Link
                          key={category.id}
                          className="mt-[10px] font-bold text-[12px]"
                        >
                          {category.name}{" "}
                          <span className="ml-[5px] text-blue-500">
                            ({category.jobs_count})
                          </span>{" "}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <span>{error}</span>
          </>
        )}
        <Pagination
          postPerPage={postPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Sectors;

// const fetchSectors = async () => {
//   try {
//     setLoading(false);
//     const response = await axios.get(
//       "http://localhost:4000/api/sectors-with-categories",
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
//         },
//       }
//     );
//     setData(response.data.data);
//   } catch (err) {
//     setLoading(true);
//     setError(true);
//   }
// };

// useEffect(() => {
//   fetchSectors();
// }, []);
