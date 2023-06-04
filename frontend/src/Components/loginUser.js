/** @format */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, password: password };

    axios
      .post("https://blogspot-5ln6.onrender.com/user/login", data)
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("name", name);
        console.log("name", localStorage.getItem("name"));
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });

    setName("");
    setPassword("");
  };

  return (
    <div className="text-center login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="">
          <div className="mb-4 mt-3">
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Name"
              className=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              className=""
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-dark" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
