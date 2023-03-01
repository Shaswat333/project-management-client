import "./App.css";
import ListProjects from "./pages/ListProjects";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectEdit from "./pages/ProjectEdit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsPrivate from "./components/IsPrivate";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<ListProjects />} />
        <Route path="/projects" element={<ListProjects />} />
        <Route
          path="/projects/add"
          element={
            <IsPrivate>
              <AddProject />
            </IsPrivate>
          }
        />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project/:projectId" element={<ProjectEdit />} />
      </Routes>
    </div>
  );
}

export default App;
