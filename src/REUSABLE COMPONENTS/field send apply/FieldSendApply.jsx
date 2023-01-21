import React, { useState } from "react";

const FieldSendApply = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="w-[350px] bg-white mx-auto mt-[80px] pb-[20px]">
        <div className="w-[300px] mx-auto pb-[20px]">
          {/*name container */}
          <div className="flex flex-col pt-[20px]">
            <label className="font-bold" htmlFor="">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border-2 px-[10px]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {/*email container */}
          <div className="flex flex-col pt-[20px]">
            <label className="font-bold" htmlFor="">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="border-2 px-[10px]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {/*nimber container */}
          <div className="flex flex-col pt-[20px]">
            <label className="font-bold" htmlFor="">
              Number
            </label>
            <input
              type="type"
              placeholder="Numer"
              className="border-2 px-[10px]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldSendApply;
