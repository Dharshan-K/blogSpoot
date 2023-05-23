/** @format */

import { Link } from "react-router-dom";
import Home from "./Components/home.js";

function App() {
  return (
    <div>
      <Link to="posts/:author">My page</Link>
      <Home />
    </div>
  );
}

export default App;
