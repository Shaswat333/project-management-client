import { useState } from "react";
import { useNavigate } from "react-router";
import { createProject, uploadImage } from "../api";
import { toast } from "react-toastify";
import styled from "styled-components";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleImageSelect(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    console.log({ title, description });

    //1. Upload the image through the backend
    const uploadData = new FormData();
    uploadData.append("filename", image);
    const response = await uploadImage(uploadData);
    console.log("response from BE with image Url", response.data);

    //2. Once we get the imageUrl -> create a project
    //with title, description and imageUrl
    await createProject({
      title,
      description,
      imageUrl: response.data.fileUrl,
    });

    toast.success("Project created!");

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={handleTitleChange}
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
        Create Store
      </Button>
    </form>
  );
}

export default AddProject;
