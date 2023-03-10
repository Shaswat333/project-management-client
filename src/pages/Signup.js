import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup, uploadImageUrl } from "../api";
import { toast } from "react-toastify";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] =useState(null);

  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePaswordChange(event) {
    setPassword(event.target.value);
  }
  function handleImageUrlSelect(event) {
    setImageUrl(event.target.files[0]);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await signup({ username ,email, password,imageUrl });
      if (response.data.message) {
        toast.info(response.data.message);
        setUsername("");
        setPassword("");
        setEmail("");
        setImageUrl(null);
      } else {
        toast.success("User created");
        navigate("/");
      }
    } catch (e) {
      toast.error(`error ${e}`);
    }
    const uploadData = new FormData();
    uploadData.append("filename", imageUrl);
    const response = await uploadImageUrl(uploadData);
    console.log("response from BE with image Url", response.data);
  }
   

  return (
    <>
      <h3>Signup</h3>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={handlePaswordChange}
        />
        <label htmlFor="imageUrl">Photo</label>
        <input id="imageUrl" type="file" onChange={handleImageUrlSelect} />

        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Signup;
