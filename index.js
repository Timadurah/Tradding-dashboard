import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./screen/app";
import "./screen/css/style.css";
import "./screen/css/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
