/** @format */

import React, { useState } from "react";
import axios from "axios";
import {
  redirect,
  RedirectFunction,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./home";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name: name, password: password };

    axios
      .post("http://localhost:5000/user/login", data)
      .then((response) => {
        console.log("response", response);
        localStorage.setItem("name", name);
        console.log("name", localStorage.getItem("name"));
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });

    // localStorage.setItem("email", email);
    // console.log(localStorage.getItem("author"));

    // Reset form fields
    setName("");
    setPassword("");
  };

  return (
    <div className="border text-center ">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="">
          <div className="mb-3">
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Name"
              className=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// <div>
//   {shouldRedirect ? (
//     <Navigate to="/home" replace={true} />
//   ) : (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   )}
// </div>;
