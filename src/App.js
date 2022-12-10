import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./login";
import Admin from "./admin";
import MainPage from "./mainPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replice to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
