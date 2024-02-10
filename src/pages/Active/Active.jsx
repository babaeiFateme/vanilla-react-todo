import React from "react";

import { useTodoContext } from "../../hooks/TodoContext";
import TodoList from "../../components/TodoList/TodoList";

const Active = () => {
    const { todos } = useTodoContext();
    const ActiveTodos = todos.filter((todo) => todo.status === "active");

    return (
        <div>
            <TodoList todosToShow={ActiveTodos} />
        </div>
    );
};

export default Active;
