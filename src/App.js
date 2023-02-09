import react from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./PAGES/login/LoginPage";
import HomePage from "./PAGES/home/HomePage";
import JobNotificationPage from "./PAGES/job notification/JobNotificationPage";
import JobApplyPage from "./PAGES/jobs application/JobApplyPage";
import JobListPage from "./PAGES/list jobs/JobListPage";
import ProfilePage from "./PAGES/profile/ProfilePage";
import SavedJobsPage from "./PAGES/saved jobs/SavedJobsPage";
import SignIn from "./PAGES/sign in/SignInPage";
import ResetPasswordPage from "./PAGES/reset password/ResetPasswordPage";
import SendApplyPage from "./PAGES/send apply/SendApplyPage";
import Single from "./PAGES/singlepage/Single";

function App() {
  return (
    <div className="">
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<JobListPage />} />
          <Route path="/apply" element={<JobApplyPage />} />
          <Route path="/notify" element={<JobNotificationPage />} />
          <Route path="/save" element={<SavedJobsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/sendapply" element={<SendApplyPage />} />
          <Route path="/find/:id" element={<Single />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
