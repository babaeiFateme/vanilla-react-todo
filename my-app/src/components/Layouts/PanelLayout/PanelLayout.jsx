import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../Partials";

const PanelLayout = ({ children }) => {
    return (
        <main>
            <Sidebar />
            <div className="content">
                <Header />
                <div className="wrapper">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default PanelLayout;
