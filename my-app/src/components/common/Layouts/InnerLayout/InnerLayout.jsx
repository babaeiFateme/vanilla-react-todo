import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import Modal from "../../Modal/Modal";
import { useTodoContext } from "../../../../hooks/TodoContext";

const InnerLayout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { todos, addTodo ,deleteTodo} = useTodoContext();

    const [formData, setFormData] = useState({
        title: "",
        startTime: "",
        endTime: "",
        status: "",
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
            status: 0,
        };
        addTodo(newTodo);

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
    useEffect(() => {}, [todos]);
    return (
        <div>
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
            {children}

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
