import React from "react";
import TodoList from "../components/TodoList/TodoList";
import { useTodoContext } from "../hooks/TodoContext";

const Landing = () => {
    const { todos } = useTodoContext();

    return (
        <div>
            <TodoList todosToShow={todos} />
        </div>
    );
};

export default Landing;
