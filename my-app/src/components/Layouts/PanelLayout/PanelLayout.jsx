import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../Partials";

const PanelLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default PanelLayout;
