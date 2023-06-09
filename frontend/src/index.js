/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyPage from "./Components/myPage";
import CreateForm from "./Components/createuser";
import LoginForm from "./Components/loginUser";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import "../index.css";
import App from "./Components/App";
import Home from "./Components/home";
import MyComponent from "./Components/blogEditor";
import GetBlog from "./Components/GetBlog";
import OffCanvas from "./Components/offCanvas";
// import reportWebVitals from './reportWebVitals';
const forEdit = true;
const forCreate = false;

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "users/createUser", element: <CreateForm /> },
  { path: "users/login", element: <LoginForm /> },
  { path: "home", element: <Home /> },
  { path: "posts/:author", element: <MyPage /> },
  { path: "posts/edit/:id", element: <MyComponent edit={forEdit} /> },
  { path: "posts/create", element: <MyComponent edit={forCreate} /> },
  { path: "post/:id", element: <GetBlog /> },
  { path: "offcanvas", element: <OffCanvas /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
