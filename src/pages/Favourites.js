import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Favourites() {
    const [projects, setProjects] = useState([]);


useEffect(() => {
    async function handleGetAllProjects() {
      const response = await getAllProjects();
      setProjects(response.data);
    }
    handleGetAllProjects();
  }, []);

  if (!projects) return <>Loading...</>

  return (
    <div>
        <ul>
        {projects.map((project) => {
          return (
            <li key={project._id}>
              <Link to={`/projects/${project._id}`}>
                 <h3>{project.type}</h3> 
              </Link>
              {project.imageUrl && (
                <img
                  style={{ width: "20%" }}
                  src={project.imageUrl}
                  alt="project"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Favourites;
