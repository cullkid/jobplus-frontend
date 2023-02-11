import React, { useEffect, useState } from "react";
import "./jobsNotification.css";
import { AiFillStar } from "react-icons/ai";
import { BiEuro } from "react-icons/bi";
import { BiTimeFive } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../pagination/Pagination";

const JobsNotification = ({ type }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(3);

  // const indexOfLastPage = currentPage * postPerPage;
  // const indexOfFirstPage = indexOfLastPage - postPerPage;
  // const firstPage = data.slice(indexOfFirstPage, indexOfLastPage);
  // console.log(firstPage);

  // //change page function
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(false);
        const response = await axios.get(
          "http://localhost:4000/api/user-jobs?type=notification",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
            },
          }
        );
        setData(response.data.data);
        console.log(data);
      } catch (err) {
        setLoading(true);
        setError(true);
      }
    };

    fetchJobs();
  }, []);

  return <div></div>;
};

export default JobsNotification;

// const fetchJobs = async () => {
//   try {
//     setLoading(false);
//     const response = await axios.get(
//       "http://localhost:4000/api/jobs-with-companies",
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
//         },
//       }
//     );
//     setData(response.data.data);
//     console.log(data);
//   } catch (err) {
//     setLoading(true);
//     setError(true);
//   }
// };

// useEffect(() => {
//   fetchJobs();
// }, []);
