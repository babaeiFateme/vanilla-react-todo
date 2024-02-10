import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import Badge from "../common/Badge/Badge";
import Modal from "../common/Modal/Modal";
import { useState } from "react";
import { useTodoContext } from "../../hooks/TodoContext";

const TodoList = ({ todosToShow }) => {
    const { handleDelete, handleEdit, handleComplete } = useTodoContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateTodo, setUpdateTodo] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const deleteTodoHandler = (id) => {
        handleDelete(id);
    };

    const editTodoHandler = (item) => {
        setIsModalOpen(!isModalOpen);
        setUpdateTodo(item);
    };
    const completeTodoHandler = (item) => {
        handleComplete(item);
    };
    const generateTodoHandler = (e) => {
        e.preventDefault();
        if (!updateTodo.title || !updateTodo.startTime || !updateTodo.endTime) {
            setErrorMessage("Please fill in all fields.");
            return;
        }
        const updateData = {
            id: updateTodo.id,
            title: updateTodo.title,
            startTime: updateTodo.startTime,
            endTime: updateTodo.endTime,
            status: updateTodo.status,
            isComplete: updateTodo.isComplete,
        };
        handleEdit(updateData);

        // Close the modal
        setIsModalOpen(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdateTodo({
            ...updateTodo,
            [name]: value,
        });
    };

    return (
        <div className="table-wrapper ">
            {todosToShow && (
                <table className="todos">
                    <tr>
                        <td></td>
                        <td className="text-center text-gray">
                            create fetch todo
                        </td>
                        <td className="text-center text-gray">
                            create fetch todo
                        </td>
                        <td className="text-center text-gray">status</td>
                        <td className="text-center"></td>
                    </tr>
                    {todosToShow.map((item) => (
                        <tr className="item" key={item.id}>
                            <td>
                                <div className="title">
                                    <span
                                        onClick={() =>
                                            completeTodoHandler(item)
                                        }
                                        className={`checkTodo ${
                                            item.isComplete
                                                ? "bg-blue"
                                                : "jxhckzx"
                                        }`}
                                    ></span>
                                    {item.title}
                                </div>
                            </td>
                            <td className="time text-center nowrap">
                                <div>{item.startTime}</div>
                            </td>
                            <td className="time text-center nowrap">
                                <div>{item.endTime}</div>
                            </td>
                            <td className="status-container text-center">
                                <Badge status={item.status} />
                            </td>
                            <td>
                                <div className="action">
                                    <button
                                        className="btn"
                                        onClick={() => editTodoHandler(item)}
                                    >
                                        <BiSolidEdit className="fs-20 text-orange" />
                                    </button>
                                    <button
                                        className="btn"
                                        onClick={() =>
                                            deleteTodoHandler(item.id)
                                        }
                                    >
                                        <BiTrash className="fs-20 text-red" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            )}
            {todosToShow && (
                <ul className="todos-mobile">
                    {todosToShow.map((item) => (
                        <li className="item" key={item.id}>
                            <div className="gap-20 d-flex justify-between mb-2 flex-wrap gap-2">
                                <div className="title">
                                    <span
                                        onClick={() =>
                                            completeTodoHandler(item)
                                        }
                                        className={`checkTodo ${
                                            item.isComplete
                                                ? "bg-blue"
                                                : "jxhckzx"
                                        }`}
                                    ></span>
                                    {item.title}
                                </div>
                                <Badge status={item.status} />
                            </div>
                            <div className="time mb-2 d-flex justify-between">
                                <span className="text-gray">
                                    create todo title:
                                </span>
                                <span>{item.startTime}</span>
                            </div>
                            <div className="time mb-2 d-flex justify-between">
                                <span className="text-gray">
                                    expire todo time
                                </span>
                                <span>{item.endTime}</span>
                            </div>

                            <div className="action">
                                <button
                                    className="btn"
                                    onClick={() => editTodoHandler(item)}
                                >
                                    <BiSolidEdit className="fs-20 text-orange" />
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => deleteTodoHandler(item.id)}
                                >
                                    <BiTrash className="fs-20 text-red" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <Modal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title="Edit Task"
            >
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
                                value={updateTodo.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startTime">start time</label>
                            <input
                                type="date"
                                name="startTime"
                                className="stat-time"
                                value={updateTodo.startTime}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endTime">end time</label>
                            <input
                                type="date"
                                name="endTime"
                                className="end-time"
                                value={updateTodo.endTime}
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

export default TodoList;
