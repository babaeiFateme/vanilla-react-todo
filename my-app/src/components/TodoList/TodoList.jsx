import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import Badge from "../common/Badge/Badge";
import { useTodoContext } from "../../hooks/TodoContext";

const TodoList = () => {
    const { todos, handleDelete } = useTodoContext();

    const deleteTodoHandler = (id) => {
        handleDelete(id);
    };

    if (!todos) {
        return <>empty list</>;
    }
    return (
        <div>
            <ul className="todos">
                {todos.map((item, index) => (
                    <li className="item" key={index}>
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
