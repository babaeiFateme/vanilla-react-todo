import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

const Header = ({ isShow, sidebarHandler }) => {
    return (
        <header>
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
            <div className="board-view">
                <h3>Board view</h3>

                <button className="btn fs-16 fw-600">
                    <CiCirclePlus className="fs-16 fw-600" />
                    <span>Add view</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
