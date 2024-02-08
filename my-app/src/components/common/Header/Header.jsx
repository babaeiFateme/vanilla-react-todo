import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { BiAlignRight } from "react-icons/bi";

import Modal from "../Modal/Modal";
import { useEffect, useState } from "react";

// import useLocalStorage from "../../../hooks/useLocalStorage";

const Header = ({ isShow, sidebarHandler }) => {

    return (
        <>
            <header>
                <div className="header">
                    <div>
                        <h2>Welcome back, Vincent 👋</h2>
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
                        <button
                            onClick={sidebarHandler}
                            className={`${
                                isShow ? "d-none" : "d-block"
                            } sidebar-btn-handler d-flex btn cursor-pointer`}
                        >
                            <BiAlignRight />
                        </button>
                    </div>
                </div>
                
            </header>

        </>
    );
};

export default Header;
