import React from "react";
import propTypes from "prop-types";

const DropdownSelectorList = ({ value, datas, placeholder }) => {
  return (
    <div>
      <select className="w-[200px] md:w-[200px] px-4 mt-4 border-2" name="">
        <option>{placeholder}</option>
        {datas.map((data, key) => (
          <option key={key}>{data.label}</option>
        ))}
      </select>
    </div>
  );
};

DropdownSelectorList.propTypes = {
  value: propTypes.string,
  datas: propTypes.array.isRequired,
  placeholder: propTypes.string,
};

DropdownSelectorList.defaultProps = {
  value: "",
  placeholder: "",
};

export default DropdownSelectorList;
