import { useState } from "react";
import { useNavigate } from "react-router";
import { createProject, uploadImage } from "../api";
import { toast } from "react-toastify";
import styled from "styled-components";
import React from "react";
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

function AddProject() {
  const [type, setType] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  

  const navigate = useNavigate();

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

  async function handleSubmitForm(event) {
    event.preventDefault();
    console.log({ type,contact,location, description, image });

    //1. Upload the image through the backend
    const uploadData = new FormData();
    uploadData.append("filename", image);
    const response = await uploadImage(uploadData);
    console.log("response from BE with image Url", response.data);

    //2. Once we get the imageUrl -> create a project
    //with title, description and imageUrl
    await createProject({
      type,
      contact,
      location,
      description,
      imageUrl: response.data.fileUrl,
    });

    toast.success("Project created!");

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmitForm}>
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
        CreateStore
      </Button>
    </form>
  );
}

export default AddProject;
