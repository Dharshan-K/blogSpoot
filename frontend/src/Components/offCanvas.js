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

// /** @format */
// import "bootstrap/dist/css/bootstrap.css";
// export default function OffCanvas() {
//   const divStyle = {
//     minWidth: "10%",
//   };
//   return (
//     <div>
//       {/* <div
//         class="offcanvas offcanvas-start show"
//         tabindex="-1"
//         id="offcanvas"
//         aria-labelledby="offcanvasLabel"
//         style={divStyle}
//       >
//         <div class="offcanvas-header">
//           <h5 class="offcanvas-title" id="offcanvasLabel">
//             Offcanvas
//           </h5>
//         </div>
//         <div class="offcanvas-body">
//           Content for the offcanvas goes here. You can place just about any
//           Bootstrap component or custom elements here.
//         </div>
//       </div> */}
//       <div class="container-fluid">
//         <div class="row flex-nowrap">
//           <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//             <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
//               <a
//                 href="/"
//                 class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
//               >
//                 <span class="fs-5 d-none d-sm-inline">Menu</span>
//               </a>
//               <ul
//                 class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
//                 id="menu"
//               >
//                 <li class="nav-item">
//                   <a href="#" class="nav-link align-middle px-0">
//                     <i class="fs-4 bi-house"></i>{" "}
//                     <span class="ms-1 d-none d-sm-inline">Home</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#submenu1"
//                     data-bs-toggle="collapse"
//                     class="nav-link px-0 align-middle"
//                   >
//                     <i class="fs-4 bi-speedometer2"></i>{" "}
//                     <span class="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
//                   </a>
//                   <ul
//                     class="collapse show nav flex-column ms-1"
//                     id="submenu1"
//                     data-bs-parent="#menu"
//                   >
//                     <li class="w-100">
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Item</span> 1{" "}
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Item</span> 2{" "}
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#" class="nav-link px-0 align-middle">
//                     <i class="fs-4 bi-table"></i>{" "}
//                     <span class="ms-1 d-none d-sm-inline">Orders</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#submenu2"
//                     data-bs-toggle="collapse"
//                     class="nav-link px-0 align-middle "
//                   >
//                     <i class="fs-4 bi-bootstrap"></i>{" "}
//                     <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
//                   </a>
//                   <ul
//                     class="collapse nav flex-column ms-1"
//                     id="submenu2"
//                     data-bs-parent="#menu"
//                   >
//                     <li class="w-100">
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Item</span> 1
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Item</span> 2
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a
//                     href="#submenu3"
//                     data-bs-toggle="collapse"
//                     class="nav-link px-0 align-middle"
//                   >
//                     <i class="fs-4 bi-grid"></i>{" "}
//                     <span class="ms-1 d-none d-sm-inline">Products</span>{" "}
//                   </a>
//                   <ul
//                     class="collapse nav flex-column ms-1"
//                     id="submenu3"
//                     data-bs-parent="#menu"
//                   >
//                     <li class="w-100">
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Product</span> 1
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Product</span> 2
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Product</span> 3
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" class="nav-link px-0">
//                         {" "}
//                         <span class="d-none d-sm-inline">Product</span> 4
//                       </a>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <a href="#" class="nav-link px-0 align-middle">
//                     <i class="fs-4 bi-people"></i>{" "}
//                     <span class="ms-1 d-none d-sm-inline">Customers</span>{" "}
//                   </a>
//                 </li>
//               </ul>
//               <hr />
//               <div class="dropdown pb-4">
//                 <a
//                   href="#"
//                   class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
//                   id="dropdownUser1"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   <img
//                     src="https://github.com/mdo.png"
//                     alt="hugenerd"
//                     width="30"
//                     height="30"
//                     class="rounded-circle"
//                   />
//                   <span class="d-none d-sm-inline mx-1">loser</span>
//                 </a>
//                 <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       New project...
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Profile
//                     </a>
//                   </li>
//                   <li>
//                     <hr class="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div class="col py-3">Content area...</div>
//         </div>
//       </div>
//     </div>
//   );
// }
