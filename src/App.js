import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Courses from "./screens/Courses";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Login} exact />
      <Route path="/Dashboard" Component={Home} exact />
      <Route path="/courses" Component={Courses} exact />
    </Routes>
  );
}

export default App;
