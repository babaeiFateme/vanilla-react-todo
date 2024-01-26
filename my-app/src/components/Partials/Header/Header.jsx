import { BiSearch } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { BiAlignRight } from "react-icons/bi";

import Modal from "../../Modal/Modal";
import {  useRef, useState } from "react";

const Header = ({ isShow, sidebarHandler }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        startTime: "",
        endTime: "",
    });
    const todosRef = useRef([]);

    const [todos, setTodos] = useState([]);

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };

    const generateTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: formData.title,
            startTime: formData.startTime,
            endTime: formData.endTime,
        };

        // Update todosRef with the new task
        todosRef.current = [...todosRef.current, newTodo];
        setTodos(todosRef.current);

        // Clear form fields
        setFormData({
            title: "",
            startTime: "",
            endTime: "",
        });

        // Close the modal
        setIsModalOpen(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
                <div className="board-view">
                    <h3>Board view</h3>

                    <button
                        onClick={() => modalHandler()}
                        className="btn fs-16 fw-600"
                    >
                        <CiCirclePlus className="fs-16 fw-600" />
                        <span>Add view</span>
                    </button>
                </div>
            </header>

            <Modal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title="Add Task"
            >
                <form onSubmit={generateTodoHandler}>
                    <div>
                        <div className="form-group">
                            <label htmlFor="Taskname">task name</label>
                            <input
                                type="text"
                                className="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startTime">start time</label>
                            <input
                                type="text"
                                name="startTime"
                                className="stat-time"
                                value={formData.startTime}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endTime">end time</label>
                            <input
                                type="text"
                                name="endTime"
                                className="end-time"
                                value={formData.endTime}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-handler">
                        <button
                            className="btn btn-blue"
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            discard
                        </button>
                        <button className="btn btn-gray" type="submit">
                            save
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Header;
