/** @format */

import { Link } from "react-router-dom";
import Home from "./home.js";
import "bootstrap/dist/css/bootstrap.css";
import OffCanvas from "./offCanvas.js";
// import "../index.css";

function App() {
  return (
    <div className="row">
      {/* <OffCanvas className="col" /> */}
      <Link className="col" to={`posts/${localStorage.getItem("name")}`}>
        My page
      </Link>
      <div>
        <Link to="posts/create">
          <button className="btn btn-primary">Create Post</button>
        </Link>
      </div>
      <Home className="col" />
    </div>
  );
}

export default App;
