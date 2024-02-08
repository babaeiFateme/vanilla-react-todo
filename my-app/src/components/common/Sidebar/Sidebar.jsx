import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isShow, sidebarHandler }) => {
    const location = useLocation();
    return (
        <div className={`sidebar ${isShow ? "" : "closeSide"}`}>
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
                        <div
                            className={`item-link ${
                                location.pathname === "/" ? "active" : ""
                            }`}
                        >
                            <Link to="/">AllTask</Link>
                        </div>
                    </li>
                    <li className="item">
                        <div
                            className={`item-link ${
                                location.pathname === "/compelete"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link to="/compelete">Compelete</Link>
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
