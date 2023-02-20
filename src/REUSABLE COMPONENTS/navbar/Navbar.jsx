import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { TiTimes } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const [dropList, setDropList] = useState(false);
  const handleClick = () => setDropList(!dropList);
  const closeNav = () => setDropList(!dropList);

  return (
    <div className="bg-gray-900">
      {/*container-grid */}
      <div className="grid grid-cols-4 w-[1000px] mx-auto justify-between">
        {/*grid-child */}
        <div className="col-start-1 col-end-2 md:col-start-1 md:col-end-3 flex">
          {/*amburger */}
          <div
            onClick={handleClick}
            className="ml-[15px] md:hidden z-10 flex items-center font-bold"
          >
            {/*passing argument to translate the hamburger into x when the droplist is open*/}
            {!dropList ? (
              <AiOutlineMenu size={25} className="text-white" />
            ) : (
              <TiTimes size={25} className="text-white" />
            )}
          </div>

          <div className="flex items-center text-white font-bold ml-[10px]">
            <h2 className="text-2xl">JOBPLUS</h2>
          </div>

          {/*menu */}
          <ul className="hidden md:flex items-center justify-between w-[350px] ml-[20px] text-white font-bold">
            <Link
              to="/"
              className="py-4 hover:bg-white hover:text-blue-500 px-2"
            >
              Home
            </Link>
            <Link
              to="/list"
              className="py-4 hover:bg-white hover:text-blue-500 px-2"
            >
              Job Listing
            </Link>

            <Link
              to="/applied"
              className="py-4 hover:bg-white hover:text-blue-500 px-2"
            >
              Job Applied
            </Link>
          </ul>

          <ul
            className={
              !dropList
                ? "hidden"
                : "absolute top-0 left-0 w-full h-[450px] bg-blue-500 flex flex-col justify-center items-center"
            }
          >
            <Link
              onClick={closeNav}
              to="/"
              className="text-white font-bold text-3xl py-[30px]"
            >
              Home
            </Link>
            <Link
              onClick={closeNav}
              to="/list"
              className="text-white font-bold text-3xl py-[30px]"
            >
              Job Listing
            </Link>
            <Link
              onClick={closeNav}
              to="/applied"
              className="text-white font-bold text-3xl py-[30px]"
            >
              Jobs Applied
            </Link>
          </ul>
        </div>

        {/*grid-child */}
        <div className="col-start-2 col-end-3 mr-[35px] md:mr-[5px] md:col-start-4 md:col-end-5 my-auto">
          {/* icons*/}
          <ul className="flex items-center justify-end text-2xl text-white">
            <Link to="/list" className="mr-[20px]">
              <AiOutlineSearch />
            </Link>
            <Link to="/notify" className="mr-[20px]">
              <Badge color="secondary" badgeContent={0} showZero>
                <FaBell />
              </Badge>
            </Link>
            <Link to="/save" className="mr-[20px]">
              <Badge color="secondary" badgeContent={1} showZero>
                <AiFillStar />
              </Badge>
            </Link>
            <Link to="/profile" className="mr-[20px]">
              <BsFillPersonFill />
            </Link>
            <Link to="/login">
              <FiLogIn />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
