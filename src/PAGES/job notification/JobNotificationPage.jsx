import React, { useState } from "react";
import JobNotification from "../../COMPONENTS/job notification/JobNotification";
import Cookies from "../../REUSABLE COMPONENTS/cookie/Cookies";

const JobNotificationPage = () => {
  const [cookie, setCookie] = useState(true);

  return (
    <div>
      <JobNotification />
      {cookie && <Cookies setCookie={setCookie} />}
    </div>
  );
};

export default JobNotificationPage;
