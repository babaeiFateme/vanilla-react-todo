import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";


import AppRoute from "./AppRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>
);
