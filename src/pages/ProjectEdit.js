import React from 'react'
import {useEffect, useState} from "react";
import {useNavigate,useParams} from "react-router";
import {editProject, getProject} from "../api";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;
  color: green;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

function ProjectEdit() {
  
  const [project, setProject] = useState();
  const {projectId} = useParams();
  const navigate= useNavigate();
  const [type,setType]= useState();
  const [contact,setContact]= useState();
  const [location,setLocation]= useState();
  const [description,setDescription]= useState();
  const [image,setImage]= useState();

  useEffect(() => {
    async function handleGetProjectEdit() {
      const response = await getProject(projectId);
      setProject(response.data);
    }
    handleGetProjectEdit();
  }, [projectId]);

  async function handleEditProject() {
    await editProject(projectId, {
      project,
      projectId,
      type,
      contact,
      location,
      description,
      image,
    });
    navigate("/projects/add");
  }
  function handleTypeChange(event) {
    setType(event.target.value);
  }
  function handleContactChange(event) {
    setContact(event.target.value);
  }
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleImageSelect(event) {
    setImage(event.target.files[0]);
  }
  return project? (
    <form onSubmit={handleEditProject}>
    <label htmlFor="type">Type</label>
    <input
      id="type"
      type="text"
      value={type}
      onChange={handleTypeChange}
    />
    <label htmlFor="contact">Contact</label>
    <input
      id="contact"
      type="text"
      value={contact}
      onChange={handleContactChange}
    />
    <label htmlFor="location">Location</label>
    <input
      id="location"
      type="text"
      value={location}
      onChange={handleLocationChange}
  />
  <label htmlFor="description">Description</label>
  <input
    id="description"
    type="text"
    value={description}
    onChange={handleDescriptionChange}
  />
  <label htmlFor="image">Image</label>
  <input id="image" type="file" onChange={handleImageSelect} />
  <Button className="button" type="submit">
    Restore
  </Button>
  </form>

  ):(
    <p>Loading...</p>
  );

  }
export default ProjectEdit;