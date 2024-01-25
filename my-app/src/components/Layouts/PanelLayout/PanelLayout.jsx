import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../Partials";

const PanelLayout = ({ children }) => {
    const [isShow, setIsShow] = useState(true);
    const sidebarHandler = () => {
        console.log(6756);
        setIsShow(!isShow);
    };
    return (
        <main>
            <Sidebar isShow={isShow} sidebarHandler={sidebarHandler} />
            <div className="content">
                <Header isShow={isShow} sidebarHandler={sidebarHandler} />
                <div className="wrapper">
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default PanelLayout;
