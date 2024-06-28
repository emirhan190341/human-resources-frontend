import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import ActivatePage from "./pages/ActivationPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import JobApplyPage from "./pages/JobApplyPage";



function App() {
  const jobSeeker = useSelector(
    (state: RootState) => state.jobSeeker.jobSeeker
  );

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!jobSeeker ? <LoginPage /> : <Navigate to="/profile" />}
        />
        <Route
          path="/signup"
          element={
            !jobSeeker ? <RegisterPage /> : <Navigate to="/activate-account" />
          }
        />

        <Route
          path="/profile"
          element={jobSeeker ? <ProfilePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/activate-account"
          element={
            !jobSeeker?.accountVerified ? <ActivatePage /> : <Navigate to="/" />
          }
        />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:code" element={<JobPage />} />
        <Route path="/job/apply-job/:code" element={<JobApplyPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
