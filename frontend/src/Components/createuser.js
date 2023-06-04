/** @format */

import { useState } from "react";
import axios from "axios";
// import "../assets/login.css";

export default function CreateForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const divStyle = {
    marginTop: "25vh",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name: name, email: email, password: password };

    // console.log('Name:', name);
    console.log("Email:", email);
    console.log("Password:", password);

    axios
      .post("https://blogspot-5ln6.onrender/user/createUser", data)
      .then((response) => {
        console.log("response", response);
      });

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="text-center" style={divStyle}>
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            className=" mt-3"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            className="mb-4 mt-4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            className="mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-dark" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}
