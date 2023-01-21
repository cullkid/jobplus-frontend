import React, { useEffect, useState } from "react";
import useFetch from "../../HOOKS/useFetch";

const Sectors = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:4000/api/sectors-with-categories"
  );

  const images = [
    "https://cloudinary.hbs.edu/hbsit/image/upload/s--sFv3MZbN--/f_auto,c_fill,h_375,w_750,/v20200101/D730ED9CC0AF1A0C18B3499EF75E86D7.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pzLXZf0niMDrkwrVCR13uYVE4fkc-GzCWA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTFKp8Ehj13R8Tk8uBXU4TKg4lVwIV7k0BA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqHeY69vdMCl2L7djOc2ytl127UKIvr2vkQ&usqp=CAU",
  ];

  return (
    <div className="bg-slate-300 w-full h-[auto]">
      <div className="w-[450px] pt-[25px] md:w-[1000px] mx-auto">
        <h1 className="w-[230px] md:w-[350px] mx-auto text-2xl md:text-4xl font-bold">
          Choose your sector
        </h1>
        <h3 className="mt-[5px] w-[410px] md:w-[420px] font-bold mx-auto">
          Jobs across multiple sectors. See the latest roles now
        </h3>
        {loading ? (
          "loading please wait"
        ) : (
          <>
            <div className="md:grid grid-cols-4 place-content-between">
              {data &&
                images.map((img, index) => (
                  <div
                    key={index}
                    className="mt-[30px] w-[238px] h-[300px] md:mx-[0px] mx-auto"
                  >
                    <img
                      className="absolute block h-[150px] w-[230px] bg-no-repeat bg-center md:bg-contain brightness-50"
                      src={img}
                    />
                    <p className="text-[20px] font-bold text-white z-1 block top-[25%] left-[25%] w-[100px] text-center  relative">
                      {data[index]?.name}
                    </p>
                    <div className="relative top-[45%]">
                      {/* <SectorCount /> */}
                      <p>categories here</p>
                      <p>categories here</p>
                      <p>categories here</p>
                      <p>categories here</p>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sectors;
