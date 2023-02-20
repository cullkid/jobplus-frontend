import React, { useState } from "react";
import JobApplied from "../../COMPONENTS/job applied/JobApplied";
import Cookies from "../../REUSABLE COMPONENTS/cookie/Cookies";

const JobApplyPage = () => {
  const [cookie, setCookie] = useState(true);

  return (
    <div>
      <JobApplied />
      {cookie && <Cookies setCookie={setCookie} />}
    </div>
  );
};

export default JobApplyPage;
