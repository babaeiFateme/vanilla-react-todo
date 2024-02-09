import React from "react";

import { useTodoContext } from "../../hooks/TodoContext";
import TodoList from "../../components/TodoList/TodoList";

const Pending = () => {
    const { todos } = useTodoContext();
    const PendingTodos = todos.filter((todo) => todo.status === "pending");

    return (
        <div>
            <TodoList todosToShow={PendingTodos} />
        </div>
    );
};

export default Pending;
