/** @format */

import { Link } from "react-router-dom";
import Home from "./home.js";
import "bootstrap/dist/css/bootstrap.css";
import OffCanvas from "./offCanvas.js";
// import "../index.css";

function App() {
  return (
    <div className="row">
      <OffCanvas className="col" />
      <Home className="col" />
    </div>
  );
}

export default App;
