import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";
import { toast } from "react-toastify";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormGroup} from 'reactstrap';
import {Button } from 'reactstrap';


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
 

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await signup({ username ,email, password });
      if (response.data.message) {
        toast.info(response.data.message);
        setUsername("");
        setPassword("");
        setEmail("");
        
      } else {
        toast.success("User created");
        navigate("/");
      }
      } catch (e) {
        toast.error(`error ${e}`);
      }
      
  }
   

  return (
    <>
      <h3>Signup</h3>
      <form onSubmit={handleSubmitForm}>
        <FormGroup>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
        
          onChange={handleUsernameChange}
        />
        </FormGroup>
        <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        </FormGroup>
        <FormGroup>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={handlePaswordChange}
        />
        </FormGroup>
        <FormGroup>
        <label htmlFor="imageUrl">Photo</label>
        </FormGroup>
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account?</p>
      <Button>
      <Link to="/login">Login</Link>
      </Button>
    </>
  );
}

export default Signup;
