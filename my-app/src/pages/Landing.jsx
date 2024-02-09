import React from "react";
import TodoList from "../components/TodoList/TodoList";
import { useTodoContext } from "../hooks/TodoContext";

const Landing = () => {
    const { todos } = useTodoContext();

    return (
        <div>
            <h1>All Todos</h1>
            <TodoList todosToShow={todos} />
        </div>
    );
};

export default Landing;
