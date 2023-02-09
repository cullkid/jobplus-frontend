import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  //for loop
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="flex mx-auto items-center justify-center h-[55px]">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className=" h-[40px] px-[10px] flex items-center justify-center border-[2px] border-blue-500 boreder-solid  text-black font-bold"
          >
            <button
              onClick={() => paginate(number)}
              className="h-[40px] w-full flex items-center justify-center px-[10px]  text-black font-bold"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
