import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/register",
        { username, password, confirmPassword }
      )
      .then((res) => {
        console.log(res.data);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("Failed to sign up, try again.");
      });
  };

  return (
    <div className="card-body bg-gray-800 min-w-100 w-1/3 m-auto mt-15 rounded-2xl">
      <p className="w-9/10 px-5 my-5 text-4xl text-start font-bold">Register</p>
      <p className="text-red-400">{errMsg}</p>
      <form className="flex flex-col justify-center items-center gap-5 rounded ">
        <input
          className="w-9/10 rounded p-3 bg-gray-700"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          className="w-9/10 rounded p-3 bg-gray-700"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="w-9/10 rounded p-3 bg-gray-700"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button onClick={(e) => handleRegister(e)} className="btn w-9/10">
          Sign Up
        </button>
      </form>
      <div className="flex flex-col items-center gap-2 mt-2">
        <h2>Alrealdy have an account?</h2>
        <button className="btn w-1/2" onClick={() => navigate("/login")}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
