import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api";
import React from "react";
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



function ListProjects() {
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
      <h1>STORES</h1>

      <ul>
        {projects.map((project) => {
          return (
            <Card
              color="info"
              inverse
              style={{
                width: '40rem',
              }}
            >                  
              {project.imageUrl && (
                
                <img
                  style={{ width: "100%" }}
                  src={project.imageUrl}
                  alt="project"
                />
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
              <CardText>
              <h3>{project.description}</h3> 
              </CardText>
              <Button>
              <Link to={`/projects/${project._id}`}>
                Details
              </Link>
              </Button>
              </CardBody>
              </Card>
          );
        })}
      </ul>
    </div>
  );
}

export default ListProjects;