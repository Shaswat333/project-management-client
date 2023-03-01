import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { editProject, getProject } from "../api";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

 
function ProjectEdit() {
  const [project, setProject] = useState();
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetProjectEdit() {
      const response = await getProject(projectId);
      setProject(response.data);
    }

    handleGetProjectEdit();
  }, [projectId]);

  async function handleEditProject() {
    await editProject(projectId);
    navigate("/AddProject");
  }
  return project ? (
    <>
      <h3>{project.type}</h3>
      <p>{project.description}</p>
      <p>{project.contact}</p>
      <p>{project.location}</p>
      <div>
        <button onClick={handleEditProject}>Edit</button>
      </div>
      
      {project.imageUrl && (
        <img width="60%" src={project.imageUrl} alt="project" />
      )}
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectEdit;
