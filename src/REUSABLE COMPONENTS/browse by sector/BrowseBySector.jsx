import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../HOOKS/useFetch";

const BrowseBySector = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/api/browse-by/sectors"
  );

  return (
    <div>
      <div className="hidden md:block">
        {/*browse sector */}
        <div className="w-[200px] py-[10px] mt-[25px] bg-slate-300">
          {loading ? (
            "loading, please wait"
          ) : (
            <>
              <div className="w-[150px] mx-auto">
                <h2 className="font-bold">Browse by sector</h2>
                {data.map((sector) => (
                  <div className="flex flex-col mt-[10px]">
                    <Link>
                      {sector.name}
                      <span className="font-bold ml-[5px]">
                        ({sector.total_jobs})
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBySector;
