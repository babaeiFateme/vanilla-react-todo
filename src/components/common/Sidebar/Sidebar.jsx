import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useTodoContext } from "../../../hooks/TodoContext";

const Sidebar = ({ isShow, sidebarHandler }) => {
    const location = useLocation();
    const { todos } = useTodoContext();
    return (
        <div className={`sidebar ${isShow ? "" : "closeSide"}`}>
            <div className="logo-box">
                <h1>tasks</h1>
                <button
                    onClick={sidebarHandler}
                    className="sidebar-btn-handler"
                >
                    +
                </button>
            </div>
            <nav>
                <ul className="link-box">
                    <li className="item">
                        <div
                            className={`item-link ${
                                location.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <Link to="/">AllTask ({todos.length})</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div
                            className={`item-link ${
                                location.pathname === "/complete"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/complete">Complete</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div
                            className={`item-link ${
                                location.pathname === "/pending" ? "active" : ""
                            }`}
                        >
                            <Link to="/pending">Pending</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div
                            className={`item-link ${
                                location.pathname === "/active" ? "active" : ""
                            }`}
                        >
                            <Link to="/active">Active</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
