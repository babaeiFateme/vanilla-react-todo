import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import Badge from "../common/Badge/Badge";
import { useEffect, useState } from "react";
import { useTodoContext } from "../../hooks/TodoContext";

const TodoList = () => {
    const { todos, addTodo } = useTodoContext();
    console.log(todos, "todos");

    // localStorage.setItem("todos", JSON.stringify(todos));
    useEffect(() => {
        // setTodos(data);
    }, [todos]);
    const deleteTodoHandler = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        addTodo(filteredTodos);

        // Update local storage with the new todos array
        localStorage.setItem("todos", JSON.stringify(filteredTodos));
    };
    if (!todos) {
        return <>empty list</>;
    }
    return (
        <div>
            <ul className="todos">
                dfdsf
                {todos.map((item) => (
                    <li className="item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="time">{item.endTime}</div>
                        <div className="time">{item.endTime}</div>
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
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
