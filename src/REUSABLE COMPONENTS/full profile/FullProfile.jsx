import React, { useState } from "react";
import DropdownSelectorList from "../../REUSABLE COMPONENTS/dropdown list selector/DropdownSelectorList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FullProfile = () => {
  const [title, setTitle] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [jobType, setJobType] = useState("");
  const [credentials, setCredentials] = useState({
    permanent: undefined,
    temporary: undefined,
    contract: undefined,
  });
  const [sector, setSector] = useState("");
  const [experience, setExperience] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const profiles = {
    title,
    minPrice,
    jobType,
    credentials,
    sector,
    experience,
  };

  console.log(profiles);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/profiles",
        profiles
      );

      localStorage.setItem("eze-token", res.data.token);

      // navigate("/");
    } catch (err) {
      // setError(true);
    }
  };

  return (
    <div className="bg-gray-200">
      <div className="w-[450px] md:w-[1000px] mx-auto pb-[5px]">
        <h1 className="py-[35px] text-2xl font-bold">Profile</h1>
        <article className="w-[450px] mx-auto bg-white pb-[10px]">
          <div className="w-[300px] mx-auto">
            {/*job desired container */}
            <div className="flex flex-col pt-[20px]">
              <label className="font-bold" htmlFor="">
                Desired job tittle
              </label>
              <input
                type="text"
                placeholder="job_tittle"
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 px-4 py-[3px] w-[300px]"
              />
            </div>
            {/*min per annum container */}
            <div className="flex flex-col mt-[15px]">
              <label className="font-bold" htmlFor="">
                Min per annum salary
              </label>
              <input
                type="text"
                placeholder="min_salary"
                onChange={(e) => setMinPrice(e.target.value)}
                className="border-2 px-4 py-[3px] w-[300px]"
              />
            </div>
            {/*checkbox container */}
            <div className="mt-[15px]">
              <label className="font-bold" htmlFor="">
                Job type
              </label>
              <article className="flex items-center mt-[5px]">
                <input
                  type="checkbox"
                  value="permanent"
                  onChange={handleChange}
                  id="permanent"
                />
                <p className="ml-[5px]">permanent</p>
              </article>
              <article className="flex items-center mt-[5px]">
                <input
                  type="checkbox"
                  value="temporary"
                  onChange={handleChange}
                  id="temporary"
                />
                <p className="ml-[5px]">Temporary</p>
              </article>
              <article className="flex items-center mt-[5px]">
                <input
                  type="checkbox"
                  value="contract"
                  onChange={handleChange}
                  id="contract"
                />
                <p className="ml-[5px]">Contract</p>
              </article>
            </div>
            {/*selector container */}
            <div className="" onChange={(e) => setSector(e.target.value)}>
              <DropdownSelectorList
                datas={[
                  { value: 1, label: "Technology" },
                  { value: 2, label: "Engineering" },
                  { value: 3, label: "Health" },
                ]}
                placeholder="sectors"
              />
            </div>
            {/*textarea container */}
            <div className="mt-[15px]">
              <p className="font-bold">Experience</p>
              <textarea
                onChange={(e) => setExperience(e.target.value)}
                className="border-2"
                name=""
                cols="30"
              ></textarea>
            </div>
            <div className="pb-[15px]">
              <button
                onClick={handleClick}
                className="font-bold  mt-[15px] w-[300px] py-[3px] text-white bg-pink-600 hover:bg-pink-400"
              >
                Submit
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FullProfile;
