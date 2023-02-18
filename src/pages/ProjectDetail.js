import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteProject, getProject } from "../api";

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
    navigate("/");
  }
  return project ? (
    <>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div>
        <button onClick={handleDeleteProject}>Delete</button>
      </div>
      
      {project.imageUrl && (
        <img width="60%" src={project.imageUrl} alt="project" />
      )}
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;
