// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// // const axios = require("axios");
// // axios = axios();

// const BrowseBySector = () => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState([false]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchLocations = async () => {
//       try {
//         setLoading(false);
//         const response = await axios.get(
//           "http://localhost:4000/api/browse-by/sectors",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
//             },
//           }
//         );
//         setData(response.data.data);
//       } catch (err) {
//         setLoading(true);
//         setError(true);
//       }
//     };

//     fetchLocations();
//   }, []);
//   // console.log(data);

//   return (
//     <div>
//       <div className="hidden md:block">
//         {/*browse sector */}
//         <div className="w-[250px] py-[10px] mt-[25px] bg-white">
//           {loading ? (
//             "loading, please wait"
//           ) : (
//             <>
//               <div className="w-[200px] mx-auto ">
//                 <h2 className="font-bold">Browse by sector</h2>
//                 {data.map((sector) => (
//                   <div className="flex flex-col mt-[10px]">
//                     <Link>
//                       {sector.name}
//                       <span className="font-bold ml-[5px]">
//                         ({sector.total_jobs})
//                       </span>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//               <span>{error}</span>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseBySector;
