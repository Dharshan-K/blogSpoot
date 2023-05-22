/** @format */

import React, { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to the server
    console.log("Email:", email);
    console.log("Password:", password);

    const data = { email: email, password: password };

    axios
      .post("http://localhost:5000/users/login", data)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.setItem("author", name);
    console.log(localStorage.getItem("author"));

    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
