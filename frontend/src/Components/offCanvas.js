/** @format */

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../assets/offCanvas.css";
import { Link } from "react-router-dom";

export default function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = () => {
    localStorage.removeItem("name");
    console.log("loggedOut");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas className="bg-dark offCanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">
            <i class="bi bi-book-fill mx-2"></i>
            {localStorage.getItem("name") == "" ? (
              <span>Login</span>
            ) : (
              <span>{localStorage.getItem("name")}</span>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="nav nav-pills flex-column mb-2 text-bg-dark ">
            <li class="nav-item ">
              <Link
                to={`posts/${localStorage.getItem("name")}`}
                class="nav-link text-white"
                aria-current="page"
              >
                <i class="bi bi-house-door-fill mx-2 fs-4"></i>
                <span className="fs-5">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={`posts/${localStorage.getItem("name")}`}
                class="nav-link text-white fs-4"
              >
                <i class="bi bi-journal mx-2"></i>
                <span className="fs-5">My Blogs</span>
              </Link>
            </li>
            <li>
              <Link to="posts/create" class="nav-link text-white fs-4">
                <i class="bi bi-file-post mx-2"></i>
                <span className="fs-5">Create Post</span>
              </Link>
            </li>
            {localStorage.getItem("name") ? (
              <li>
                <Link to="#" onClick={logOut} class="nav-link text-white fs-4">
                  <i class="bi bi-box-arrow-right mx-2"></i>
                  <span className="fs-5">Log-Out</span>
                </Link>
              </li>
            ) : (
              <Link to="users/login" class="nav-link text-white fs-4">
                <i class="bi bi-box-arrow-right mx-2"></i>
                <span className="fs-5">Log-In</span>
              </Link>
            )}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
