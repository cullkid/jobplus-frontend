import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../HOOKS/useFetch";

const BrowseByLocations = () => {
  const { data, loading } = useFetch(
    "http://localhost:4000/api/browse-by/locations"
  );

  return (
    <div className="hidden md:block">
      <div className="w-[200px] py-[10px] mt-[25px] bg-slate-300">
        {loading ? (
          "loading, please wait"
        ) : (
          <>
            <div className="w-[150px] mx-auto">
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
          </>
        )}
      </div>
    </div>
  );
};

export default BrowseByLocations;
