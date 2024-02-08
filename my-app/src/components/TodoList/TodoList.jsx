import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import Badge from "../common/Badge/Badge";
import { useTodoContext } from "../../hooks/TodoContext";
import { useState } from "react";
import Modal from "../common/Modal/Modal";

const TodoList = () => {
    const { todos, handleDelete, handleEdit } = useTodoContext();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateTodo, setUpdateTodo] = useState({});

    const deleteTodoHandler = (id) => {
        handleDelete(id);
    };

    const editTodoHandler = (item) => {
        setIsModalOpen(!isModalOpen);
        setUpdateTodo(item);
    };
    const generateTodoHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            id: updateTodo.id,
            title: updateTodo.title,
            startTime: updateTodo.startTime,
            endTime: updateTodo.endTime,
            status: updateTodo.status,
        };
        handleEdit(newTodo);

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
        <div>
            <ul className="todos">
                {todos.map((item, index) => (
                    <li className="item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="time">{item.startTime}</div>
                        <div className="time">{item.endTime}</div>
                        <div>
                            <Badge status={item.status} />
                        </div>
                        <div className="d-flex gap-20">
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

            <ul className="todos-mobile">
                {todos.map((item, index) => (
                    <li className="item" key={index}>
                        <div className="title">{item.title}</div>
                        <div className="d-flex justify-between items-cente">
                            <div className="time">{item.startTime}</div>
                            <div className="time">{item.endTime}</div>
                        </div>
                        <div className="d-flex justify-between items-cente">
                            <div>
                                <Badge status={item.status} />
                            </div>
                            <div>
                                <button
                                    className="btn"
                                    onClick={() => deleteTodoHandler(item.id)}
                                >
                                    <BiTrash className="fs-20 text-red" />
                                </button>
                                <button className="btn">
                                    <BiSolidEdit className="fs-20 text-orange" />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title="Edit Task"
            >
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

export default TodoList;
