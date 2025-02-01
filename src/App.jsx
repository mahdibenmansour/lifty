import SignIn from "./comps/signIn";
import Workout from "./comps/Workout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./comps/SignUp";
import Home from "./comps/Home";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </Router>
  );
}
