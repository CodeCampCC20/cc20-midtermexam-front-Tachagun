import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setErrMsg("");
    e.preventDefault();
    axios
      .post(
        "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login",
        { username, password }
      )
      .then((res) => {
        console.log(res.data);

        if (res.data.message === "Login Success") {
          navigate("/todos");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrMsg("Login Failed, try again...");
      });
  };

  return (
    <div className="card-body bg-gray-800 min-w-100 w-1/3 m-auto mt-15 rounded-2xl">
      <p className="w-9/10 px-5 my-5 text-4xl text-start font-bold">Welcome</p>
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
        <button onClick={(e) => handleLogin(e)} className="btn w-9/10">
          Login
        </button>
      </form>
      <div className="flex flex-col items-center gap-2 mt-2">
        <h2>No Account?</h2>
        <button className="btn w-1/2" onClick={() => navigate("/register")}>
          Sign Up Here
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
