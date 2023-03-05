import React, { createContext, useState } from "react";

export const JobContext = createContext();

const JobContextProvider = (props) => {
  const [savedJobsCount, setSavedJobsCount] = useState(0);

  return (
    <JobContext.Provider value={{ savedJobsCount, setSavedJobsCount }}>
      {props.children}
    </JobContext.Provider>
  );
};

export default JobContextProvider;
