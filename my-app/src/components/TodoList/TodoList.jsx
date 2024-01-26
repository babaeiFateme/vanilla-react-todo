import { BiTrash } from "react-icons/bi";
import { BiSolidEdit } from "react-icons/bi";

const TodoList = () => {
    return (
        <div>
            {" "}
            <ul className="todos">
              
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
                
            </ul>
        </div>
    );
};

export default TodoList;
