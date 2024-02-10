import React from "react";

import { useTodoContext } from "../../hooks/TodoContext";
import TodoList from "../../components/TodoList/TodoList";

const Complete = () => {
    const { todos } = useTodoContext();
    const completeTodos = todos.filter((todo) => todo.status === "complete");

    return (
        <div>
            <TodoList todosToShow={completeTodos} />
        </div>
    );
};

export default Complete;
