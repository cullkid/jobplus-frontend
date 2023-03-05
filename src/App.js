import react from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./PAGES/login/LoginPage";
import HomePage from "./PAGES/home/HomePage";
import JobNotificationPage from "./PAGES/job notification/JobNotificationPage";
import JobAppliedPage from "./PAGES/jobs applied/JobAppliedPage";
import JobListPage from "./PAGES/list jobs/JobListPage";
import ProfilePage from "./PAGES/profile/ProfilePage";
import SavedJobsPage from "./PAGES/saved jobs/SavedJobsPage";
import SignIn from "./PAGES/sign in/SignInPage";
import ResetPasswordPage from "./PAGES/reset password/ResetPasswordPage";
import SendApplyPage from "./PAGES/send apply/SendApplyPage";
import Single from "./PAGES/singlepage/Single";
import JobApply from "./COMPONENTS/apply jobs/JobApply";
import FilterJobs from "./PAGES/filter jobs/FilterJobs";
import JobsInASector from "./PAGES/sector jobs/JobsInASector";

function App() {
  return (
    <div className="">
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<JobListPage />} />
          <Route path="/applied" element={<JobAppliedPage />} />
          <Route path="/notify" element={<JobNotificationPage />} />
          <Route path="/save" element={<SavedJobsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/sendapply" element={<SendApplyPage />} />
          <Route path="/find/:id" element={<Single />} />
          <Route path="/apply" element={<JobApply />} />
          <Route path="/filter" element={<FilterJobs />} />
          <Route path="/sector/:id" element={<JobsInASector />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
