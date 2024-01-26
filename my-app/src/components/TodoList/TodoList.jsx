import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";
import useTodosStore from "../../core/storage/useTodosStore";

const TodoList = () => {
    const { todos } = useTodosStore();
    return (
        <div>
            <ul className="todos">
                {todos.map((item) => (
                    <li className="item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="title">{item.endTime}</div>
                        <div className="title">{item.endTime}</div>
                        <div>active</div>
                        <div>
                            <button className="btn">
                                <BiTrash className="fs-20 text-red" />
                            </button>
                            <button className="btn">
                                <BiSolidEdit className="fs-20 text-orange" />
                            </button>
                        </div>
                    </li>
                ))}
                {/* <li className="item">
                    <div className="title">Task1</div>
                    <div className="title">21 - 08 - 2023</div>
                    <div className="title">29 - 08 - 2023</div>
                    <div>active</div>
                    <div>
                        <button className="btn">
                           <BiTrash className="fs-20 text-red" />
                        </button>
                        <button className="btn">
                            <BiSolidEdit className="fs-20 text-orange" />
                        </button>
                    </div>
                </li>
                <li className="item">
                    <div className="title">Task1</div>
                    <div className="title">21 - 08 - 2023</div>
                    <div className="title">29 - 08 - 2023</div>
                    <div>active</div>
                    <div>
                        <button className="btn">
                           <BiTrash className="fs-20 text-red" />
                        </button>
                        <button className="btn">
                            <BiSolidEdit className="fs-20 text-orange" />
                        </button>
                    </div>
                </li>
                <li className="item">
                    <div className="title">Task1</div>
                    <div className="title">21 - 08 - 2023</div>
                    <div className="title">29 - 08 - 2023</div>
                    <div>active</div>
                    <div>
                        <button className="btn">
                           <BiTrash className="fs-20 text-red" />
                        </button>
                        <button className="btn">
                            <BiSolidEdit className="fs-20 text-orange" />
                        </button>
                    </div>
                </li>
                <li className="item">
                    <div className="title">Task1</div>
                    <div className="title">21 - 08 - 2023</div>
                    <div className="title">29 - 08 - 2023</div>
                    <div>active</div>
                    <div>
                        <button className="btn">
                            <BiTrash className="fs-20 text-red" />
                        </button>
                        <button className="btn">
                            <BiSolidEdit className="fs-20 text-orange" />
                        </button>
                    </div>
                </li>
                <li className="item">
                    <div className="title">Task1</div>
                    <div className="title">21 - 08 - 2023</div>
                    <div className="title">29 - 08 - 2023</div>
                    <div>active</div>
                    <div>
                        <button className="btn">
                           <BiTrash className="fs-20 text-red" />
                        </button>
                        <button className="btn">
                            <BiSolidEdit className="fs-20 text-orange" />
                        </button>
                    </div>
                </li> */}
            </ul>
        </div>
    );
};

export default TodoList;
