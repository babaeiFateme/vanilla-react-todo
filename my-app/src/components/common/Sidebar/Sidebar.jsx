import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isShow, sidebarHandler }) => {
    return (
        <div className={`sidebar ${isShow ? "d-block" : "d-none"}`}>
            <div className="logo-box">
                <h1>tasks</h1>
                <button
                    onClick={sidebarHandler}
                    className="sidebar-btn-handler d-flex"
                >
                    +
                </button>
            </div>
            <nav>
                <ul className="link-box">
                    <li className="item">
                        <div className="item-link">
                            <Link to="/">AllTask</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div className="item-link">
                            <Link to="/compelete">Compelete</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div className="item-link">
                            <Link to="/pending">Pending</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div className="item-link">
                            <Link to="/active">Active</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
