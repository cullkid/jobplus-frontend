import React from "react";
import DropdownSelectorList from "../../REUSABLE COMPONENTS/dropdown list selector/DropdownSelectorList";

const FullProfile = () => {
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
                placeholder="desired job tittle"
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
                placeholder="min per annum salary"
                className="border-2 px-4 py-[3px] w-[300px]"
              />
            </div>
            {/*checkbox container */}
            <div className="mt-[15px]">
              <label className="font-bold" htmlFor="">
                Job type
              </label>
              <article className="flex items-center mt-[5px]">
                <input type="checkbox" />
                <p className="ml-[5px]">permanent</p>
              </article>
              <article className="flex items-center mt-[5px]">
                <input type="checkbox" />
                <p className="ml-[5px]">Temporary</p>
              </article>
              <article className="flex items-center mt-[5px]">
                <input type="checkbox" />
                <p className="ml-[5px]">Contract</p>
              </article>
            </div>
            {/*selector container */}
            <div className="">
              <DropdownSelectorList
                datas={[
                  { value: 1, label: "Technology" },
                  { value: 2, label: "Engineering" },
                  { value: 3, label: "Health" },
                ]}
                placeholder="Choose a sector"
              />
            </div>
            {/*textarea container */}
            <div className="mt-[15px]">
              <p className="font-bold">Experience</p>
              <textarea className="border-2" name="" cols="30"></textarea>
            </div>
            <button className="border-2 mt-[15px] w-[300px] py-[3px] text-white bg-pink-600 hover:bg-pink-400">
              Submit
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FullProfile;
