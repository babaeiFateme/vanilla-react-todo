import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const Header = ({ isShow, sidebarHandler }) => {
    return (
        <div className="header">
            <div>
                <h2>Welcome back, Vincent 👋</h2>
                <button
                    onClick={sidebarHandler}
                    className={`${
                        isShow ? "d-none" : "d-block"
                    } sidebar-btn-handler d-flex`}
                >
                    +
                </button>
            </div>
            <div className="header-box">
                <button className="btn">
                    <BiSearch />
                </button>
                <div>
                    <MdOutlineDateRange />
                    <span className="text-gray">19 May 2022</span>
                </div>
                <button className="btn">
                    <IoNotificationsOutline />
                </button>
            </div>
        </div>
    );
};

export default Header;
