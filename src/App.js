import "./App.css";
import { Route, Routes } from "react-router-dom";
import SplashPage from "./Pages/SplashPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import MainDashboard from "./Pages/MainDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SplashPage />} exact></Route>
        <Route path="/userDetails" element={<UserDetailsPage />}></Route>
        <Route path="/mainDashboard" element={<MainDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
