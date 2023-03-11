import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteProject, getProject } from "../api";
import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText } from "reactstrap";
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
    <Card
              color="info"
              inverse
              style={{
                width: '30rem',
              }}
            >                  
                {project.imageUrl && (
                  <img width="100%" src={project.imageUrl} alt="project" />
                )}

              <CardBody>
                <CardTitle tag="h5">
                
                 <h3>{project.type}</h3> 
                
                </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
               <h2>{project.location}</h2> 
              </CardSubtitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
               <h2>{project.contact}</h2> 
              </CardSubtitle>
              <CardText>
              <h3>{project.description}</h3> 
              </CardText>
              <div>
                 <button onClick={handleDeleteProject}>Delete</button>
              </div>
              </CardBody>
              </Card>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;
