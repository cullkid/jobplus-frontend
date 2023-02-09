import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BrowseByLocations = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);

  const fetchLocations = async () => {
    try {
      setLoading(false);
      const response = await axios.get(
        "http://localhost:4000/api/browse-by/locations",
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

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="hidden md:block ">
      <div className="w-[250px] py-[10px] mt-[25px] bg-white ">
        {loading ? (
          "loading, please wait"
        ) : (
          <>
            <div className="w-[200px] mx-auto ">
              <h2 className="font-bold">Browse by location</h2>
              {data.map((list) => (
                <div className="flex flex-col mt-[10px]">
                  <Link>
                    {list.city} {list.district}
                    <span className="font-bold"> ({list.total_jobs})</span>
                  </Link>
                </div>
              ))}
            </div>
            <span>{error}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default BrowseByLocations;
