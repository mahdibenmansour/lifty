import SignIn from "./comps/signIn";
import Workout from "./comps/Workout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./comps/SignUp";
import Home from "./comps/Home";
import { useState, createContext } from "react";
export const Context = createContext();

export default function App() {
  const [workout, setWorkout] = useState("");
  return (
    <Context.Provider value={[workout, setWorkout]}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}
