import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Modal from "../../Modal/Modal";
import { useTodoContext } from "../../../../hooks/TodoContext";
import { useLocation } from "react-router-dom";

const InnerLayout = ({ children }) => {
    const location = useLocation();
    const pageTitle = location.pathname.replace("/", "");
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="inner-content">
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
            <div>
                <h1 className="page-title">
                    <span className="page-content">
                        {pageTitle === "" ? "Tasks" : pageTitle}
                    </span>
                    <hr />
                </h1>
                {children}
            </div>

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
        </div>
    );
};

export default InnerLayout;
