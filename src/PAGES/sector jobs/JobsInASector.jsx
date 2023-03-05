import React, { useState } from "react";
import FullJobsInASector from "../../REUSABLE COMPONENTS/job in a sector/FullJobsInASector";

const JobsInASector = () => {
  const [sectorId, setSetorId] = useState([]);
  return (
    <div>
      <FullJobsInASector sectorId={sectorId} />
    </div>
  );
};

export default JobsInASector;
