import React, { createContext, useEffect, useState } from "react";
// import DropdownSelectorList from "../../REUSABLE COMPONENTS/dropdown list selector/DropdownSelectorList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../CONTEXT/AuthContext";
import FullLogin from "../../REUSABLE COMPONENTS/login/FullLgin";

const FullProfile = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);
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

  const { user } = createContext(AuthContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/profiles",
        profiles
      );

      localStorage.setItem("eze-token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  //fetch sector
  useEffect(() => {
    const fetchSectors = async () => {
      try {
        setLoading(false);
        const response = await axios.get("http://localhost:4000/api/sectors", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
          },
        });
        setData(response.data.data);
      } catch (err) {
        setLoading(true);
        setError(true);
      }
    };
    fetchSectors();
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="w-[450px] md:w-[1000px] mx-auto pb-[5px]">
        <h1 className="py-[35px] text-2xl font-bold">Profile</h1>
        {loading ? (
          <div>
            <h1 className="text-center text-[20px]">
              Please sing in to set your job alert
            </h1>
            <FullLogin />
          </div>
        ) : (
          <div>
            <h1 className="text-center text-[20px] w-[350px] mx-auto py-[30px]">
              Chose your career path to receive your dream jobs alerts,
              according to your career sectors
            </h1>
            <article className="w-[450px] mx-auto bg-white pb-[10px]">
              <form onSubmit={handleSubmit} className="w-[300px] mx-auto">
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
                    <p className="ml-[5px]">Permanent</p>
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
                  <p className="mt-4 font-bold">Chose sector</p>
                  <select
                    name="select"
                    id=""
                    className="w-[200px] md:w-[200px] px-4  border-2"
                  >
                    {data.map((item) => (
                      <option value="select">{item.name}</option>
                    ))}
                  </select>
                  {/* <DropdownSelectorList
                datas={[
                  { value: 1, label: "Technology" },
                  { value: 2, label: "Engineering" },
                  { value: 3, label: "Health" },
                ]}
                placeholder="sectors"
              /> */}
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
                    type="submit"
                    className="font-bold  mt-[15px] w-[300px] py-[3px] text-white bg-pink-600 hover:bg-pink-400"
                  >
                    Submites
                  </button>
                </div>
              </form>
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullProfile;
