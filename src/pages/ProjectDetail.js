import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteProject, getProject } from "../api";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

 
function ProjectDetail() {
  const [project, setProject] = useState();
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetProjectDetail() {
      const response = await getProject(projectId);
      setProject(response.data);
    }

    handleGetProjectDetail();
  }, [projectId]);

  async function handleDeleteProject() {
    await deleteProject(projectId);
    navigate("/projects");
  }
  return project ? (
    <>
      <h3>{project.type}</h3>
      <p>{project.description}</p>
      <p>{project.contact}</p>
      <p>{project.location}</p>
      <div>
        <button onClick={handleDeleteProject}>Delete</button>
      </div>
      
      {project.imageUrl && (
        <img width="60%" src={project.imageUrl} alt="project" />
      )}
      <button onClick={() => navigate(`/project/${projectId}`)} >Edit</button>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;
