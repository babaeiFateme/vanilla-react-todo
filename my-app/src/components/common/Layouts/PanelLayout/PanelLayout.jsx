import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import InnerLayout from "../InnerLayout/InnerLayout";
import { TodoProvider } from "../../../../hooks/TodoContext";

const PanelLayout = () => {
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
                    <TodoProvider>
                        <InnerLayout isShow={isShow}>
                            <Outlet />
                        </InnerLayout>
                    </TodoProvider>
                </div>
            </div>
        </main>
    );
};

export default PanelLayout;
