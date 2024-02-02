import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import useTodosStore from "../../core/storage/useTodosStore";
import Badge from "../common/Badge/Badge";

const TodoList = () => {
    const { todos, deleteTodo } = useTodosStore();
    const deleteTodoHandler = (id) => {
        // Call the deleteTodo function from the store
        deleteTodo(id);
    };
    if (todos.length < 1) {
        return <>empty list</>;
    }
    return (
        <div>
            <ul className="todos">
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
