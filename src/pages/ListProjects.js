import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api";

function ListProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function handleGetAllProjects() {
      const response = await getAllProjects();
      setProjects(response.data);
    }
    handleGetAllProjects();
  }, []);


  return (
    <div>
      <h2>ASTOREZ</h2>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project._id}>
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
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

export default ListProjects;
