import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import InnerLayout from "../InnerLayout/InnerLayout";

const PanelLayout = ({ children }) => {
    const [isShow, setIsShow] = useState(true);
    const sidebarHandler = () => {
        setIsShow(!isShow);
    };
    return (
        <main>
            <Sidebar isShow={isShow} sidebarHandler={sidebarHandler} />
            <div className="content">
                <Header isShow={isShow} sidebarHandler={sidebarHandler} />
                <div className="wrapper">
                    <InnerLayout>
                        <Outlet />
                    </InnerLayout>
                </div>
            </div>
        </main>
    );
};

export default PanelLayout;
