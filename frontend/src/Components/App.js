/** @format */

import { Link } from "react-router-dom";
import Home from "./home.js";
// import "../index.css";

function App() {
  return (
    <div>
      <Link to={`posts/${localStorage.getItem("name")}`}>My page</Link>
      <Home />
      <h1 className="underline">hi</h1>
    </div>
  );
}

export default App;
