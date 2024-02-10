import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../../Modal/Modal";
import { useTodoContext } from "../../../../hooks/TodoContext";
import { useLocation } from "react-router-dom";
import BoradView from "../../BoradView/BoradView";

const InnerLayout = ({ children, isShow }) => {
    const location = useLocation();
    const pageTitle = location.pathname.replace("/", "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { handleAdd } = useTodoContext();
    const [formData, setFormData] = useState({
        title: "",
        startTime: "",
        endTime: "",
        status: "",
        isComplete: false,
    });

    const modalHandler = () => {
        setIsModalOpen(!isModalOpen);
    };

    const generateTodoHandler = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.startTime || !formData.endTime) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: formData.title,
            startTime: formData.startTime,
            endTime: formData.endTime,
            status: "active",
            isComplete: false,
        };
        handleAdd(newTodo);

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
        <div className={`inner-content ${isShow ? "responsive-width" : ""} `}>
            <div className="board-view">
                <h3 className="d-flex aligms-center gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.25 2.25C15.0784 2.25 15.75 2.92157 15.75 3.75V6.75C15.75 7.57843 15.0784 8.25 14.25 8.25L3.75 8.25C2.92157 8.25 2.25 7.57843 2.25 6.75L2.25 3.75C2.25 2.92157 2.92157 2.25 3.75 2.25L14.25 2.25ZM14.25 6.75V3.75L3.75 3.75L3.75 6.75L14.25 6.75Z"
                            fill="#1C1D22"
                        />
                        <path
                            d="M14.25 9.75C15.0784 9.75 15.75 10.4216 15.75 11.25V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H3.75C2.92157 15.75 2.25 15.0784 2.25 14.25L2.25 11.25C2.25 10.4216 2.92157 9.75 3.75 9.75L14.25 9.75ZM14.25 14.25V11.25L3.75 11.25L3.75 14.25H14.25Z"
                            fill="#1C1D22"
                        />
                    </svg>
                    <span>Board view</span>
                </h3>

                <button
                    onClick={() => modalHandler()}
                    className="btn fs-16 fw-600"
                >
                    <CiCirclePlus className="fs-16 fw-600" />
                    <span>Add view</span>
                </button>
            </div>
            <div>
                <BoradView pageTitle={pageTitle === "" ? "Tasks" : pageTitle} />
                {children}
            </div>

            <Modal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title="Add Task"
            >
                {/* show when we have error */}
                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
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
                                type="date"
                                name="startTime"
                                className="stat-time"
                                value={formData.startTime}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endTime">end time</label>
                            <input
                                type="date"
                                name="endTime"
                                className="end-time"
                                value={formData.endTime}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-handler">
                        <button
                            className="btn btn-gray"
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            discard
                        </button>
                        <button className="btn btn-blue" type="submit">
                            save
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default InnerLayout;
