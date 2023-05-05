import Login from "./Login";
import Profile from "./Profile";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    //Profile
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
