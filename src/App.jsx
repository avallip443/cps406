import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import BugsPage from "./pages/BugsPage/BugsPage";
import HomePage from "./pages/HomePage/HomePage";
import StatsPage from "./pages/StatsPage/StatsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/bugs" element={<BugsPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </>
  );
}

export default App;
