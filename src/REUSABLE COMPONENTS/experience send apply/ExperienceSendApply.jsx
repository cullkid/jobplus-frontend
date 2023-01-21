import React from "react";
import DropdownSelectorList from "../../REUSABLE COMPONENTS/dropdown list selector/DropdownSelectorList";

const ExperienceSendApply = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <article className=" w-[250px]">
            <p className="font-bold">Resume : </p>
            <input type="file" />
          </article>
          <article className="w-[250px]">
            <p className="font-bold">Cover letter : </p>
            <input type="file" />
          </article>
        </div>
        <article className="mt-[75px]">
          <p className="font-bold">
            DO you have or legalize to work in your current country of resident?
            <DropdownSelectorList
              datas={[
                { value: 1, label: "Yes" },
                { value: 2, label: "No" },
              ]}
              placeholder="Choose"
            />
          </p>
        </article>
        <article className="mt-[75px]">
          <p className="font-bold">
            Would you be needing a visa sponsorship in the feature?
            <DropdownSelectorList
              datas={[
                { value: 1, label: "Yes" },
                { value: 2, label: "No" },
              ]}
              placeholder="Choose"
            />
          </p>
        </article>
        <article className="mt-[75px]">
          <p className="font-bold">
            Are you willing to relocate if needed?
            <DropdownSelectorList
              datas={[
                { value: 1, label: "Yes" },
                { value: 2, label: "No" },
              ]}
              placeholder="Choose"
            />
          </p>
        </article>
        <article className="mt-[30px]">
          <p className="font-bold">What is your years of Experience?</p>
          <input type="number" />
        </article>
      </div>
    </div>
  );
};

export default ExperienceSendApply;
