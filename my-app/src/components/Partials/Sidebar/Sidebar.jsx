import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-box">
                <h1>tasks</h1>
                <span className="sidebar-btn-handler d-flex">+</span>
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
