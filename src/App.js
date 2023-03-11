import "./App.css";
import ListProjects from "./pages/ListProjects";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddProject from "./pages/AddProject";
import ProjectDetail from "./pages/ProjectDetail";
import LandingPage from "./pages/LandingPage";
import Favourites from "./pages/Favourites";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsPrivate from "./components/IsPrivate";
import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from "./context/user.context";


function App() {
  const {loggedUser} = useContext(UserContext)
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={!loggedUser && <LandingPage/>} />
        <Route path="/projects" element={
       
       loggedUser && <ListProjects />
        } />
        <Route
          path="/projects/add"
          element={
            <IsPrivate>
              <AddProject />
            </IsPrivate>
          }
        />
        <Route
         path="/projects/:projectId"
         element={
          <IsPrivate>
              <ProjectDetail />
            </IsPrivate>
          } 
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
         path="/projects/favourites"
          element={
            <IsPrivate>
            <Favourites />
            </IsPrivate>
          }
           />
        <Route path="/landingpage" element={<LandingPage/>} />
        
      </Routes>
    </div>
  );
}

export default App;
